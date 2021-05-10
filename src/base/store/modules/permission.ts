import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators';
import { store } from '/@/base/store/index';
import { login } from '/@/base/services/login';
import { LoginActionModel, LoginModel } from '/@/base/services/models/login';

const NAME = 'permission';
@Module({ namespaced: true, name: NAME, dynamic: true, store })
export default class Permission extends VuexModule {
  private info: LoginModel | null = null;

  get getInfo() {
    return this.info;
  }

  @Mutation
  commitInfo(info) {
    this.info = info;
  }

  @Action
  async login(userInfo: LoginActionModel) {
    try {
      const info = await login(userInfo);
      this.commitInfo(info);
      return info;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }
}

export { Permission };
export const userStore = getModule<Permission>(Permission);