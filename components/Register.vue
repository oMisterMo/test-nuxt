<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="inline-firstname"
                    >
                        Firstname
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-firstname"
                        type="text"
                        placeholder="Firstname"
                    />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="inline-surname"
                    >
                        Surname
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="inline-surname"
                        type="text"
                        placeholder="Surname"
                    />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm"> Send me your newsletter! </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button
                        class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
        <CopyrightNotice />
    </div>
</template>
