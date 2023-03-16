export default defineEventHandler(async (event) => {
    //===================================================
    // Server side
    //===================================================
    console.log("============ mario =============");

    // Make call to api with sensitive data here!!

    // const data = await $fetch("https://fakestoreapi.com/products/1");
    // console.log("backend data: ", data);

    return { message: "hello", api: "works", data: {} };
});
