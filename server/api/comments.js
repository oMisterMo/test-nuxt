export default defineEventHandler(async (event) => {
    //===================================================
    // Server side
    //===================================================

    const cookies = parseCookies(event);
    const config = useRuntimeConfig();
    const query = getQuery(event);
    const body = readBody(event);

    console.log(config.secret);
    console.log("cookies ", cookies);
    console.log("query: ", query);
    console.log("body: ", body);

    //=====================================================
    // use api $fetch() in server routes to get more data
    //=====================================================

    // return JSON data, a Promise or use event.node.res.end().
    // return { message: "hello", api: "works", moENV: config.public.mo };
    // return event.node.res.end("hello");
    return {};
});
