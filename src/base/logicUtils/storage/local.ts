import { createLocalStorage } from '/@/base/utils/storage';

const TOKEN_KEY = 'loginToken';

export function setToken(token: string): void {
  createLocalStorage().set(TOKEN_KEY, token);
}

export function getToken(): string {
  return createLocalStorage().get(TOKEN_KEY);
}

export function clearLocalStorage() {
  createLocalStorage().clear();
}
