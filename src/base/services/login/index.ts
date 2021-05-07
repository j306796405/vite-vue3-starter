import { permissionRequest, YFBGADRequest } from '/@/base/utils/request';

export function login(params) {
  return permissionRequest.post({
    url: `/users/login`,
    params,
  });
}

export function test() {
  return YFBGADRequest.get({
    url: `/display/selectByPageOfMy?params=%7B%22channelType%22%3Anull%2C%22startTime%22%3Anull%2C%22endTime%22%3Anull%2C%22channelCode%22%3A%22HQ08S032%22%7D&page=1&rows=10&sidx=site_id&sord=desc&channelCode=HQ08S032`,
  });
}

// export function logout() {
//   return httpPost(`${PERMISSION_PROXY}/users/logout`);
// }

// // 重置密码
// export function editPassword(params) {
//   return httpPost(`${PERMISSION_PROXY}/users/editpassword`, params);
// }
