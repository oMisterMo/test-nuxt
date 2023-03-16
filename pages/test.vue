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
console.log("=========== fetch ===========");
const api = "https://fakestoreapi.com/products/";
const { data, pending, error } = await useFetch(api);
// const products = await useFetch(api);

// Use data.value in console
// Use data in template
console.log("products.length ", data.value.length);
console.log("product ", data.value[0].title);

//===================================================
// Get Env Variable
//===================================================
const runtimeConfig = useRuntimeConfig();

console.log("=========== env ===========");
console.log("baseUrl: ", runtimeConfig.baseUrl);
console.log("other: ", runtimeConfig.other);
console.log("mo: ", runtimeConfig.mo);
console.log("secret: ", runtimeConfig.secret);

// console.log("data: ", data);
</script>
