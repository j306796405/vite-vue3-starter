import {
  ElButton,
  ElSelect,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPopover,
  ElMessage,
  ElForm,
  ElFormItem,
  ElLoading,
  ElInput,
  ElTooltip,
  ElDialog,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElResult,
} from 'element-plus';
import { createApp } from 'vue';

export default function loadComponent(app: ReturnType<typeof createApp>) {
  app.use(ElButton);
  app.use(ElSelect);
  app.use(ElBreadcrumb);
  app.use(ElBreadcrumbItem);
  app.use(ElIcon);
  app.use(ElDropdown);
  app.use(ElDropdownMenu);
  app.use(ElDropdownItem);
  app.use(ElPopover);
  app.use(ElMessage);
  app.use(ElForm);
  app.use(ElFormItem);
  app.use(ElLoading);
  app.use(ElInput);
  app.use(ElTooltip);
  app.use(ElDialog);
  app.use(ElScrollbar);
  app.use(ElMenu);
  app.use(ElSubmenu);
  app.use(ElMenuItem);
  app.use(ElResult);
}
