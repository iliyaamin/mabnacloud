import { defineStore } from 'pinia'


export const useStore = defineStore({
    id: 'useStore',
    state: () => ({
        is_authenticated: false,
    }),
})
