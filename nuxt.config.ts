// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
console.log("dirname: ", __dirname);

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname),
    },
    css: ["~/assets/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        secret: process.env.SECRET,
        // Keys within public, will be also exposed to the client-side
        public: {
            baseUrl: process.env.API_BASE_URL || "default_0",
            other: process.env.BASE_URL || "default_1",
            mo: process.env.MO || "default_2",
        },
    },
});
