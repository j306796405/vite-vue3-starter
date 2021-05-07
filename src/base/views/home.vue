<template>
  <el-button>默认按钮</el-button>
</template>

<script lang="ts">
import { onMounted } from 'vue'
  import { login, test } from '/@/base/services/login';
  // import { getBusinessList } from '/@/base/services/user';

  export default {
    setup() {
      onMounted(async () => {
        // const res = await login({
        //     "userName": "hq01uh422",
        //     "password": "123456"
        // })

        const res = await test()
        console.log(res)
      })
      
    },
  };
</script>
<style scoped></style>
