import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  { ReturnType<typeof createApp>} app 整个应用的实例
 */
export default function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files: Record<string, { [key: string]: any }> = import.meta.globEager(
    './**/*.ts'
  )

  Object.keys(files).forEach((key: string) => {
    if (typeof files[key].default === 'function') {
      if (key !== './index.ts') files[key].default(app)
    }
  })
}
