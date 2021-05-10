export interface GlobConfig {
  BASE_URL: string;
  DEV: boolean;
  MODE: string;
  PROD: boolean;
  SSR: boolean;
  projectName: string;
  proxyPermission: string;
  proxyManagement: string;
}

export interface GlobEnvConfig {
  BASE_URL: string;
  DEV: boolean;
  MODE: string;
  PROD: boolean;
  SSR: boolean;
  VITE_PROJECT_NAME: string;
  VITE_PROXY_PERMISSION: string;
  VITE_PROXY_MANAGEMENT: string;
}
