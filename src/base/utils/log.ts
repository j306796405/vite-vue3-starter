import pkg from '../../../package.json';

const projectName = import.meta.env.VITE_PROJECT_NAME;
const version = `v${pkg.version}`;

export function logWarn(message: string) {
  console.warn(`[${projectName} ${version} warn]:${message}`);
}

export function logError(message: string) {
  console.error(`[${projectName} ${version} warn]:${message}`);
}
