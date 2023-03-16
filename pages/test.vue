<template>
    <div>
        <Avatar src="hellooo" />
        <Avatar src="sup" />
        <p>{{ Object.keys(data[0]) }}</p>

        <div v-for="key in Object.keys(data[0])">
            {{ key }}
        </div>
    </div>
</template>

<script setup>
//===================================================
// Send Api Request
//===================================================
const api = "https://fakestoreapi.com/products/";
const products = await useFetch(api);
const { data } = products;

//===================================================
// Get Env Variable
//===================================================
const runtimeConfig = useRuntimeConfig();

console.log("baseUrl: ", runtimeConfig.baseUrl);
console.log("mo: ", runtimeConfig.mo);
console.log("secret: ", runtimeConfig.secret);

// console.log("data: ", data);
</script>
