// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
console.log("dirname: ", __dirname);

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname),
    },
    css: ["~/assets/main.scss"],
});
