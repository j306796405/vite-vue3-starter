export interface LoginActionModel {
  username: string;
  password: string;
}

export interface LoginModel {
  id: string;
  code: string;
  name: string;
  orgCode: string;
}

// 是否出现在左侧菜单
enum NavbarEnum {
  SHOW = 1,
  HIDE = 0,
}

// 是否为菜单
enum IsMenuEnum {
  ACTIVE = 1,
  INACTIVE = 0,
}

enum WindowOpenEnum {
  ACTIVE = 1,
  INACTIVE = 0,
}

export interface IMenu {
  id: string;
  // 名称
  label: string;
  // 系统业务码
  businessCode: string;
  // 排序
  order: number;
  // 是否为菜单
  isMenu: IsMenuEnum;
  // 菜单唯一code
  code: string;
  data: string;
  datas: { version: number };
  // 是否新窗口打开
  windowOpen: WindowOpenEnum;
  // 是否展示在菜单中
  navbar: NavbarEnum;
  // 创建日期
  createTime: string;
  // 更新日期
  lastModifyTime: string;

  items?: IMenu[];
}
