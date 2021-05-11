import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';
import moment from 'moment';
import pkg from './package.json';
import styleImport from 'vite-plugin-style-import';

const { dependencies, devDependencies, name, version } = pkg;
const APP_INFO = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
};

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({ supportTs: false }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: `${pathResolve('src')}/`,
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
      {
        find: /\/@base\//,
        replacement: pathResolve('src/base') + '/',
      },
      {
        find: /\/@logic\//,
        replacement: pathResolve('src/logic') + '/',
      },
      {
        find: /\/@services\//,
        replacement: pathResolve('src/base/services') + '/',
      },
      {
        find: /\/@store\//,
        replacement: pathResolve('src/base/store') + '/',
      },
      {
        find: /\/@store/,
        replacement: pathResolve('src/base/store/index') + '/',
      },
      {
        find: /\/@styles\//,
        replacement: pathResolve('src/base/styles') + '/',
      },
      {
        find: /\/@settings\//,
        replacement: pathResolve('src/base/settings') + '/',
      },
      {
        find: /\/@layouts\//,
        replacement: pathResolve('src/base/layouts') + '/',
      },
      {
        find: /\/@utils/,
        replacement: pathResolve('src/base/utils'),
      },
      {
        find: /\/@utils\//,
        replacement: pathResolve('src/base/utils') + '/',
      },
      {
        find: /\/@logicUtils\//,
        replacement: pathResolve('src/base/logicUtils') + '/',
      },
      {
        find: /\/@router\//,
        replacement: pathResolve('src/base/router') + '/',
      },
      {
        find: /\/@router/,
        replacement: pathResolve('src/base/router'),
      },
      {
        find: /\/@plugins\//,
        replacement: pathResolve('src/base/plugins') + '/',
      },
      {
        find: /\/@log/,
        replacement: pathResolve('src/base/utils/log'),
      },
      {
        find: /\/@models\//,
        replacement: pathResolve('src/base/services/models') + '/',
      },
      {
        find: /\/@enums\//,
        replacement: pathResolve('src/base/enums') + '/',
      },
      {
        find: /\/@assets\//,
        replacement: pathResolve('src/base/assets/') + '/',
      },
      {
        find: /\/@images\//,
        replacement: pathResolve('src/base/assets/images/') + '/',
      },
      {
        find: /\/@components/,
        replacement: pathResolve('src/base/components/') + '/',
      },
      {
        find: /\/@views/,
        replacement: pathResolve('src/base/views/') + '/',
      },
      {
        find: /\/@hooks/,
        replacement: pathResolve('src/base/hooks/') + '/',
      },
    ],
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/base/styles/variables.scss";`,
      },
    },
  },
  define: {
    __APP_INFO__: JSON.stringify(APP_INFO),
  },
});
