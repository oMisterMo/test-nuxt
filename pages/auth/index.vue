<template>
    <div>
        <p>auth page</p>
        <p>data: {{ data.message }}</p>
        <p>data: {{ data.api }}</p>
        <p>data: {{ data.data.title }}</p>
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
const { data } = await useFetch("/api/mario");

// provides a way to access shared runtime context of Nuxt (client & server)
// const nuxt = useNuxtApp();
</script>
