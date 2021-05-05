/*
 * @Author: Jeffery Jiang
 * @Description:
 */
import { createStore, createLogger } from 'vuex';
import { AppState } from '/@/base/store/modules/app';

export interface RootState {
  app: AppState;
}

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
});
