<template>
  <div>123</div>
  <el-button>默认按钮</el-button>
</template>

<script lang="ts">
  import { onMounted, defineComponent } from 'vue';
  import { userStore } from '/@/base/store/modules/user/';
  import { getAppEnvConfig } from '/@/base/utils/env';

  export default defineComponent({
    setup() {
      onMounted(async () => {
        console.log(getAppEnvConfig());
        userStore.loginUserAction();
      });
    },
  });
</script>
<style scoped></style>
