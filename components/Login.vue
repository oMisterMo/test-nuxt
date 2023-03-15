<script setup></script>

<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                >
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="email"
                    type="text"
                    placeholder="you@example.com"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-green-950 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Sign In
                </button>
                <a
                    class="inline-block align-baseline font-bold text-sm text-green-950 hover:text-green-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </form>
        <CopyrightNotice />
    </div>
</template>

<style></style>
