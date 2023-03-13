<template>
    <div>
        <NuxtLayout>
            <header>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/auth">Auth</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/search">Search</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/profile">Profile</NuxtLink>
                    </li>
                </ul>
            </header>
            <NuxtPage></NuxtPage>
        </NuxtLayout>
    </div>
</template>

<script setup>
console.log("Mo Nuxt...");
</script>
