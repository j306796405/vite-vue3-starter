import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import { store } from '/@store';

const NAME = 'permission';
@Module({ namespaced: true, name: NAME, dynamic: true, store })
export default class Permission extends VuexModule {}

export { Permission };
export const userStore = getModule<Permission>(Permission);
