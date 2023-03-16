<template>
    <div class="md:container md:mx-auto text-center p-20">
        <p class="text-7xl font-bold p-5">{{ error.statusCode }}</p>
        <p class="text-4xl p-5">Opps</p>
        <p class="text-lg p-5">{{ error.message }}</p>
        <button
            class="bg-green-600 hover:bg-green-400 text-white font-bold mt-5 p-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="handleClearError"
        >
            Go Home
        </button>
    </div>
</template>

<script setup>
// Now we can use in template
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style></style>
