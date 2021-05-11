<template>
  <el-result :title="props.title || title" :sub-title="props.subTitle || subTitle">
    <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <el-button type="primary" size="medium" @click="handler" v-if="btnText">{{
        btnText
      }}</el-button>
    </template>
  </el-result>
</template>

<script lang="tsx">
  import type { PropType } from 'vue';

  import { defineComponent, ref, computed, unref } from 'vue';

  import { ExceptionEnum } from '/@enums/exceptionEnum';
  import PageEnum from '/@enums/pageEnum';
  import netWorkSvg from '/@/assets/svg/net-error.svg';

  import { useRoute } from 'vue-router';
  import { useGo, useRedo } from '/@hooks/web/usePage';

  interface MapValue {
    title: string;
    subTitle: string;
    btnText?: string;
    icon?: string;
    handler?: Fn;
    status?: string;
  }

  export default defineComponent({
    name: 'ErrorPage',
    props: {
      // 状态码
      status: {
        type: Number as PropType<number>,
        default: ExceptionEnum.PAGE_NOT_FOUND,
      },

      title: {
        type: String as PropType<string>,
        default: '',
      },

      subTitle: {
        type: String as PropType<string>,
        default: '',
      },

      full: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props) {
      const statusMapRef = ref(new Map<string | number, MapValue>());

      const { query } = useRoute();
      const go = useGo();
      const redo = useRedo();

      const getStatus = computed(() => {
        const { status: routeStatus } = query;
        const { status } = props;
        return Number(routeStatus) || status;
      });

      const getMapValue = computed(
        (): MapValue => {
          return unref(statusMapRef).get(unref(getStatus)) as MapValue;
        }
      );

      const backLoginI18n = '返回登录';
      const backHomeI18n = '返回首页';

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_ACCESS, {
        title: '403',
        status: `${ExceptionEnum.PAGE_NOT_ACCESS}`,
        subTitle: '抱歉，您无权访问此页面。',
        btnText: props.full ? backLoginI18n : backHomeI18n,
        handler: () => (props.full ? go(PageEnum.LOGIN) : go()),
      });

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_FOUND, {
        title: '404',
        status: `${ExceptionEnum.PAGE_NOT_FOUND}`,
        subTitle: '抱歉，您访问的页面不存在。',
        btnText: props.full ? backLoginI18n : backHomeI18n,
        handler: () => (props.full ? go(PageEnum.LOGIN) : go()),
      });

      unref(statusMapRef).set(ExceptionEnum.ERROR, {
        title: '500',
        status: `${ExceptionEnum.ERROR}`,
        subTitle: '抱歉，服务器报告错误。',
        btnText: backHomeI18n,
        handler: () => go(),
      });

      unref(statusMapRef).set(ExceptionEnum.NET_WORK_ERROR, {
        title: '网络错误',
        subTitle: '网络错误',
        btnText: '刷新',
        handler: () => redo(),
        icon: netWorkSvg,
      });

      return () => {
        const { title, subTitle, btnText, icon, handler, status } = unref(getMapValue) || {};
        return {
          title,
          subTitle,
          btnText,
          icon,
          handler,
          status,
        };
      };
    },
  });
</script>
<style lang="less"></style>
