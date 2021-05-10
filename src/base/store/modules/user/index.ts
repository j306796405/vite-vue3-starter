import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators';
import { store } from '/@/base/store/index';
import { login, logout } from '/@/base/services/user';
import { getLoginUser } from '/@/base/services/user';
import { LoginActionModel, LoginModel } from '/@/base/services/models/user';
import { setToken, clearLocalStorage } from '/@/base/logicUtils/storage/local';
import { logError } from '/@/base/utils/log';

const NAME = 'user';
@Module({ namespaced: true, name: NAME, dynamic: true, store })
export default class User extends VuexModule {
  private info: LoginModel | null = null;

  get getInfo() {
    return this.info;
  }

  @Mutation
  commitInfo(info) {
    this.info = info;
  }

  @Mutation
  commitLogout() {
    clearLocalStorage();
  }

  @Action
  async loginAction(userInfo: LoginActionModel) {
    try {
      const info = await login(userInfo);
      this.commitInfo(info);
      setToken(info.code);
      return info;
    } catch (error) {
      error(error);
      return null;
    }
  }

  @Action
  async loginUserAction() {
    try {
      const info = await getLoginUser();
      this.commitInfo(info);
      setToken(info.code);
      return info;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  @Action
  async logoutAction() {
    try {
      await logout();
      this.commitLogout();
    } catch (error) {
      logError(error);
    }
  }

  @Action
  localLogoutAction() {
    this.commitLogout();
  }
}

export { User };
export const userStore = getModule<User>(User);
