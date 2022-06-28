
<script>
import { useStore } from '@/store/index';
export default {
  name: "LoginPage",
  head: {
    title: "ورود",
  },
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      errors: {}
    };
  },
  methods: {
    async userLogin() {
      this.errors = {}
      if (this.loginForm.username !== 'admin') {
        this.errors['username'] = "لطفاً نام کاربری را به صورت صحیح وارد نمایید."
        return
      }
      if (this.loginForm.password !== 'admin') {
        this.errors['password'] = "رمز عبور وارد شده صحیح نمی باشد."
        return
      }
      this.store.is_authenticated = true
      this.$router.push('/post')
    },
  },
}
</script>

<template>
  <div class="px-6 h-full text-gray-800">
    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">

      <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <img src="~assets/img/login.jpg" class="w-full" alt="ورود" width="977" height="695" />
      </div>

      <form @submit.prevent="userLogin" class="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">

        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-1" for="username">نام کاربری</label>
          <input :class="{ 'border-red-600': errors.username }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-1" id="username" type="text"
            v-model="loginForm.username">
          <div class="text-red-600 text-xs italic">{{ errors.username }}</div>
        </div>

        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-1" for="password">رمز عبور</label>
          <input :class="{ 'border-red-600': errors.password }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-1" id="password" type="password"
            v-model="loginForm.password">
          <div class="text-red-600 text-xs italic">{{ errors.password }}</div>
        </div>

        <div>
          <button class="inline-block p-3 bg-blue-600 text-white font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out mx-1"
            type="submit">ورود</button>
        </div>

      </form>
    </div>
  </div>
</template>
