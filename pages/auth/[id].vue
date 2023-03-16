<template>
    <div>
        <p>params: {{ $route.params.id }}</p>
        <p>item: {{ data.title }}</p>
    </div>
</template>

<script setup>
console.log("setup auth params page...");

// useRoute is available everywhere
const api = "https://fakestoreapi.com/products/";
const route = useRoute();

// console.log("fullPath: ", route.fullPath);
// console.log("path: ", route.path);
// console.log("name: ", route.name);
// console.log("params: ", route.params);
// console.log("query: ", route.query);

//===================================================
// First Get Param id
//===================================================
const { id } = route.params;
const uri = api + id;

//===================================================
// Try Fetch Data with extended uri
//===================================================
const { data } = await useFetch(uri, { key: id });
console.log("data found is: ", data.value);

//===================================================
// Show error message using custom error.vue page
//===================================================
if (!data.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Item not found",
        fatal: true, // Show error page for client side errors too
    });
}
</script>
