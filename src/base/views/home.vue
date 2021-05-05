<!--
 * @Description: 
 * @Author: Jeffery
 * @Date: 2021-04-23 16:30:55
-->
<template>
  <div>Home</div>
  <el-button>默认按钮</el-button>
</template>

<script lang="ts">
  import { appStore } from '/@/base/store/modules/app';

  export default {
    setup() {
      console.log(appStore.getDevice);
    },
  };
</script>
<style scoped></style>
