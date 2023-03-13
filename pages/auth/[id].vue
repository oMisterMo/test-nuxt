<template>
    <div>params: {{ $route.params.id }}</div>
</template>

<script setup>
console.log("setup auth params page...");

// useRoute is available everywhere
const route = useRoute();

console.log("fullPath: ", route.fullPath);
console.log("path: ", route.path);
console.log("name: ", route.name);
console.log("params: ", route.params);
console.log("query: ", route.query);
</script>
