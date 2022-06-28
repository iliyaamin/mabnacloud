
<script>
import { useStore } from '@/store/index';
export default {
    name: 'PostPage',
    head: {
        title: 'پست'
    },
    setup() {
        const store = useStore()
        return { store }
    },
    created() {
        if (!this.store.is_authenticated) {
            this.$router.push({ path: '/', query: { redirect: this.$route.fullPath } })
        }
    },
}
</script>
<template>

    <section class="bg-blue-100 pt-10 pb-10">
        <div class="container mx-auto">
            <div class="flex justify-between">
                <div class="w-full text-center">
                    <h2 class="text-4xl font-bold text-gray-700 mb-5">
                        صفحه پست
                    </h2>
                    <p class="mb-8 text-gray-400">
                        این صفحه تنها پس از احراز هویت در دسترس است.
                    </p>
                    <NuxtLink class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">
                        بازگشت به صفحه ورود
                    </NuxtLink>
                    <div class="text-center">
                        <img class="w-50 mx-auto" src="~assets/img/post.svg" alt="تصویر صفحه پست" width="500" height="543">
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>
