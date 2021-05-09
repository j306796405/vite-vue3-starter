import { permissionRequest } from '/@/base/utils/request';
import { LoginModel } from '/@/base/services/models/login';

export function login(params): Promise<LoginModel> {
  return permissionRequest.post({
    url: `/users/login`,
    params,
  });
}

// export function logout() {
//   return httpPost(`${PERMISSION_PROXY}/users/logout`);
// }

// // 重置密码
// export function editPassword(params) {
//   return httpPost(`${PERMISSION_PROXY}/users/editpassword`, params);
// }
