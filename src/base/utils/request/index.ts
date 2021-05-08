// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动
// The axios configuration can be changed according to the project, just change the file, other files can be left unchanged

import type { AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types';
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';
import { merge } from 'lodash-es';
import { VAxios } from './Axios';
import checkStatus from './checkStatus';

// import { useGlobSetting } from '/@/hooks/setting';
import { ElMessage, ElMessageBox } from 'element-plus';

import { RequestEnum, RequestStatusEnum, ContentTypeEnum } from '/@/base/enums/httpEnum';
import { ProxyEnum } from '/@/base/enums/proxyEnum';

import { isString } from '/@/base/utils/is';
import { getToken } from '/@/base/utils/auth';
import { setObjToUrlParams } from '/@/base/utils';
import { errorResult } from './const';
import { createNow, formatRequestDate } from './helper';

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { data } = res;
    // 错误的时候返回
    if (!data) {
      // return '[HTTP] Request has no return value';
      return errorResult;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    const { isTransformRequestResult } = options;
    if (!isTransformRequestResult) {
      return res.data;
    }

    //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { status, message } = data;

    // 这里逻辑可以根据项目进行修改
    const hasSuccess = data && Reflect.has(data, 'status') && status === RequestStatusEnum.SUCCESS;
    if (!hasSuccess) {
      if (message) {
        // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
        if (options.errorMessageMode === 'modal') {
          ElMessageBox.confirm(message, '错误提示', { type: 'error', confirmButtonText: '确定' });
        } else if (options.errorMessageMode === 'message') {
          ElMessage.error(message);
        }
      }
      Promise.reject(new Error(message));
      return errorResult;
    }

    // 登录超时 因为status同样为ERROR, 此处需要特殊处理message为52000的情况，所以判断提前了
    if (message === RequestStatusEnum.TIMEOUT) {
      const timeoutMsg = '登录超时,请重新登录!';
      ElMessageBox.confirm(timeoutMsg, '操作失败', { type: 'error', confirmButtonText: '确定' });
      Promise.reject(new Error(timeoutMsg));
      return errorResult;
    }

    // 接口请求成功，直接返回结果
    if (status === RequestStatusEnum.SUCCESS) {
      return message;
    }

    // 接口请求错误，统一提示错误信息
    if (status === RequestStatusEnum.ERROR) {
      if (message) {
        ElMessage.error(data.message);
        Promise.reject(new Error(message));
      } else {
        const msg = '操作失败,系统异常!';
        ElMessage.error(msg);
        Promise.reject(new Error(msg));
      }
      return errorResult;
    }
    return errorResult;
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { joinParamsToUrl, formatDate, joinTime = true } = options;

    const params = config.params || {};
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, createNow(joinTime, false));
      }
    } else if (!isString(params)) {
      // format请求数据
      formatDate && formatRequestDate(params);
      config.data = params;
      config.params = undefined;
      if (joinParamsToUrl) {
        config.url = setObjToUrlParams(config.url as string, config.data);
      }
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config) => {
    // 请求之前处理config
    const token = getToken();
    if (token) {
      // set token to headers
      config.headers.Authorization = token;
    }
    return config;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { response, code, message } = error || {};
    const msg: string = response?.data?.error?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    try {
      // 超时处理
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        ElMessage.error('接口请求超时,请刷新页面重试!');
      }

      // 网络异常处理
      if (err?.includes('Network Error')) {
        ElMessageBox.confirm('请检查您的网络连接是否正常!', '网络异常', {
          type: 'error',
          confirmButtonText: '确定',
        });
      }
    } catch (error) {
      throw new Error(error);
    }

    // 匹配其他错误码情况
    checkStatus(error?.response?.status, msg);
    return Promise.reject(error);
  },
};

export function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    merge(
      {
        timeout: 30 * 1000,
        // 基础接口地址
        baseURL: ProxyEnum.ManagementProxy,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 需要对返回数据进行处理
          isTransformRequestResult: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型 普通: message 重要: modal
          errorMessageMode: 'message',
          // 是否加入时间戳
          joinTime: true,
          /**
           * 忽略重复请求
           * 1: 如果为get请求，joinTime需设置为false，因为时间戳的原因pending key会匹配不上
           * 2: 两次请求不应该是同步代码
           */
          ignoreCancelToken: true,
        },
      },
      opt || {}
    )
  );
}

export const permissionRequest = createAxios({
  baseURL: ProxyEnum.PermissionProxy,
});

export const YFBGADRequest = createAxios({
  baseURL: ProxyEnum.YFBGADProxy,
});
