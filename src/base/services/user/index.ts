import { permissionRequest } from '/@utils/request';
import { LoginModel } from '/@models/user';

export function login(params): Promise<LoginModel> {
  return permissionRequest.post({
    url: `/users/login`,
    params,
  });
}

export function getLoginUser(): Promise<LoginModel> {
  return permissionRequest.get({
    url: `/users/loginUser`,
  });
}

export function logout(): Promise<string> {
  return permissionRequest.get({
    url: `/users/logout`,
  });
}

export function getMenu(): Promise<string> {
  return permissionRequest.get({
    url: `/menu/tree/byBusinessCode/management-center`,
  });
}
