<template>
  <div class="login-page">
    <div class="login-header">
      <img class="login-header-logo" :src="logoPng" alt="" />
    </div>
    <div class="login">
      <div class="login-modal">
        <el-form
          autoComplete="on"
          :model="loginForm"
          :rules="loginRules"
          ref="loginFormRef"
          label-position="left"
          size="medium"
        >
          <h2 class="login-title">登录</h2>
          <el-form-item prop="username">
            <el-input
              name="username"
              type="text"
              v-model="loginForm.username"
              autoComplete="on"
              placeholder="账户"
              prefix-icon="el-icon-user"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              name="password"
              @keyup.enter="handleLogin"
              v-model="loginForm.password"
              autoComplete="on"
              placeholder="密码"
              prefix-icon="el-icon-lock"
              :show-password="true"
            />
          </el-form-item>
          <el-form-item class="login-action">
            <el-button
              class="login-action-button"
              type="primary"
              :loading="loading"
              @click.prevent="handleLogin"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, unref, toRefs, onBeforeMount } from 'vue';
  import { isValidUsername } from '/@utils/validate';
  import logoPng from '/@images/logo-metersbonwe.png';
  import { userStore } from '/@store/modules/user/';
  import { LoginActionModel } from '/@services/models/user';
  import router from '/@router';
  import PageEnum from '../../enums/pageEnum';

  export default defineComponent({
    name: 'Login',
    setup() {
      const loginFormRef = ref();
      const state = reactive({
        loginForm: {
          username: '',
          password: '',
        },
        loading: false,
      });

      onBeforeMount(() => {});

      const validateUsername = (rule, value, callback) => {
        if (!isValidUsername(value)) {
          callback(new Error('请输入正确的用户名'));
        } else {
          callback();
        }
      };

      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'));
        } else {
          callback();
        }
      };

      const handleLogin = async () => {
        const isValidate = await loginFormRef.value.validate();
        const form: LoginActionModel = unref(state.loginForm);

        if (isValidate) {
          try {
            await userStore.loginAction(form);
            router.replace(PageEnum.BASE_HOME);
          } catch (error) {
            console.error(error);
          }
        }
      };

      return {
        logoPng,
        ...toRefs(state),
        loginFormRef,
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePass }],
        },
        handleLogin,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import 'login.scss';
</style>
