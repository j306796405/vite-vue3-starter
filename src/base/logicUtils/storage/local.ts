import { createLocalStorage } from '/@utils/storage';

const TOKEN_KEY = 'LOGIN_TOKEN';

export function setToken(token: string): void {
  createLocalStorage().set(TOKEN_KEY, token);
}

export function getToken(): string {
  return createLocalStorage().get(TOKEN_KEY);
}

export function clearLocalStorage(): void {
  createLocalStorage().clear();
}
