export default defineEventHandler(async (event) => {
    //===================================================
    // Server side
    //===================================================
    console.log("============ products =============");

    // Make call to api with sensitive data here!!

    const data = await $fetch("https://fakestoreapi.com/products");
    // console.log("backend data: ", data);

    return data;
});
