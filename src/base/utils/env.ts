import type { GlobEnvConfig } from '/#/config';

export function getAppEnvConfig(): GlobEnvConfig {
  const ENV = (import.meta.env as unknown) as GlobEnvConfig;

  const {
    BASE_URL,
    DEV,
    MODE,
    PROD,
    SSR,
    VITE_PROJECT_NAME,
    VITE_PROXY_PERMISSION,
    VITE_PROXY_MANAGEMENT,
  } = ENV;

  return {
    BASE_URL,
    DEV,
    MODE,
    PROD,
    SSR,
    VITE_PROJECT_NAME,
    VITE_PROXY_PERMISSION,
    VITE_PROXY_MANAGEMENT,
  };
}

/**
 * @description: Development model
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return getAppEnvConfig().MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return getAppEnvConfig().DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return getAppEnvConfig().PROD;
}
