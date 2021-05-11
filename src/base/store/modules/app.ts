import { DeviceType } from '/@/base/enums/appEnum';
import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators';
import { store } from '/@store';

const NAME = 'app';
@Module({ namespaced: true, name: NAME, dynamic: true, store })
export default class App extends VuexModule {
  private device: DeviceType = DeviceType.Desktop;

  get getDevice(): DeviceType {
    return this.device;
  }

  @Mutation
  commitDevice(device: DeviceType) {
    this.device = device;
  }
}

export { App };
export const appStore = getModule<App>(App);
