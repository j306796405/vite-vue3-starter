import { DeviceType } from '/@/base/enums/appEnum';

export interface AppState {
  device: DeviceType;
}

const appState: AppState = {
  device: DeviceType.Desktop,
};

export const app = {
  state: appState,
  mutations: {
    TOGGLE_DEVICE: (state: AppState, device: DeviceType) => {
      state.device = device;
    },
  },
};
