<template>
  <div>123</div>
  <el-button>默认按钮</el-button>
</template>

<script lang="ts">
  import { onMounted, defineComponent } from 'vue';
  import { userStore } from '/@store/modules/user/';

  export default defineComponent({
    setup() {
      onMounted(async () => {
        userStore.loginUserAction();
      });
    },
  });
</script>
<style scoped></style>
