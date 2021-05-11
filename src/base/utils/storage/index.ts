import { createStorage as create, CreateStorageParams } from './storageCache';
import { enableStorageEncryption, DEFAULT_STORAGE_TIME } from '/@settings/storageSetting';

export type Options = Partial<CreateStorageParams>;

const createOptions = (storage: Storage, options: Options = {}): Options => {
  return {
    // 本地开发模式无需加密
    hasEncrypt: enableStorageEncryption,
    storage,
    ...options,
  };
};

export const WebStorage = create(createOptions(sessionStorage));

export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
  return create(createOptions(storage, options));
};

export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, { ...options, timeout: DEFAULT_STORAGE_TIME });
};

export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, { ...options, timeout: DEFAULT_STORAGE_TIME });
};

export default WebStorage;
