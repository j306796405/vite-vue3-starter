import { isDevMode } from '/@/base/utils/env';

export const DEFAULT_STORAGE_TIME = 60 * 60 * 24 * 7;

// 是否开启加密encrypted using aes
export const enableStorageEncryption = !isDevMode();

// aes encryption key
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_',
};
