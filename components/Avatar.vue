<template>
    <div>
        <p>Source is {{ src }}</p>
    </div>
</template>

<script setup>
// This is only usable inside `<script setup>`, is compiled away in the
// output and should **not** be actually called at runtime.
const { src } = defineProps(["src"]);
</script>
