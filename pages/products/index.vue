<template>
    <div class="flex gap-5 flex-wrap justify-evenly">
        <p>products page</p>
        <div
            v-for="p in products"
            class="bg-slate-500 flex-col text-center m-5 p-5 max-w-xs rounded-lg"
        >
            <!-- <p>{{ p }}</p> -->
            <img class="flex rounded-lg w-fit" :src="p.image" alt="alt" />
            <p>{{ p.title }}</p>
            <p>£{{ p.price }}</p>
            <p>£{{ p.category }}</p>
        </div>
    </div>
</template>

<script setup>
//===================================================
// Anything that goes in the script tag gets
// exposed to the front end user
//===================================================

console.log("=== setup auth ===");
// const data = {};
// const { data } = await useFetch("/api/mario");
// const { data } = await useFetch("/api/mario?name=mo&car=bike");

// Use useFetch on the client side
const { data: products } = await useFetch("/api/getproducts");

// provides a way to access shared runtime context of Nuxt (client & server)
// const nuxt = useNuxtApp();
</script>
