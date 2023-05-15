import { z, parseDataAs } from '@sidebase/nuxt-parse'

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            zod: z,
            parseDataAs
        }
    }
})