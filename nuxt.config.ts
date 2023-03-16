// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
console.log("dirname: ", __dirname);

export default defineNuxtConfig({
    app: {
        head: {
            title: "Mo",
            meta: [
                {
                    name: "description",
                    content: "Some description about this application",
                },
            ],
            link: [
                // { rel: "stylesheet", href: "" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                },
            ],
        },
    },
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
            other: process.env.DOESNT_EXIST || "default_1",
            mo: process.env.MO || "default_2",
        },
    },
});
