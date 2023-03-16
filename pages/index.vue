<template>
    <div>
        <!-- Override <script setup> useHead() attributes -->
        <Head>
            <Title>Hello</Title>
            <Meta name="description" content="This is the index page"></Meta>
        </Head>
        <p>index page</p>
    </div>
    <!-- <Mo /> -->
    <!-- <Login /> -->
</template>

<script setup>
//===================================================
// Override global <head> attributes from nuxt.config
//===================================================
useHead({
    title: "Index Page Mo",
});
</script>
