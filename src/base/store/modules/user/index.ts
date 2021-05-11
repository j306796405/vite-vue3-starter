import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators';
import { store } from '/@store';
import { login, logout, getLoginUser } from '/@services/user';
import { LoginActionModel, LoginModel } from '/@models/user';
import { setToken, clearLocalStorage } from '/@logicUtils/storage/local';
import { logError } from '/@log';

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
      setToken(info.id);
      return info;
    } catch (error) {
      logError(error);
      return null;
    }
  }

  @Action
  async loginUserAction() {
    try {
      const info = await getLoginUser();
      this.commitInfo(info);
      // setToken(info.id);
      return info;
    } catch (error) {
      logError(error);
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
