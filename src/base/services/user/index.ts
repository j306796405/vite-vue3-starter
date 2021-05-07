import { permissionRequest } from '/@/base/utils/request';

export function getBusinessList() {
  return permissionRequest.get({
    url: `/menu/getBusinessList`,
  });
}
