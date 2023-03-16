<template>
    <div>
        <p>params: {{ $route.params.id }}</p>
        <div class="flex gap-20 p-5">
            <i class="material-icons">home</i>
            <i class="material-icons">key</i>
            <i class="material-icons">search</i>
        </div>
        <p>item: {{ data.title }}</p>

        <div
            class="bg-slate-500 flex-col text-center m-5 p-5 max-w-xs rounded-lg"
        >
            <!-- <p>{{ p }}</p> -->
            <img class="flex rounded-lg w-fit" :src="data.image" alt="alt" />
            <p>{{ data.title }}</p>
            <p>£{{ data.price }}</p>
            <p>£{{ data.category }}</p>
        </div>
    </div>
</template>

<script setup>
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
console.log(data.value.title);

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
