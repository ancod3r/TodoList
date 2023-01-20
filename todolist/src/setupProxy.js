const { createProxyMiddleware } = require('http-proxy-middleware');

// const env =  dotenv.config({ path: '../config.env' })
// const protocol = 'http://'
// const protocol = JSON.parse(process.env.HTTPS) ? "https:" : "http:";
// const host = process.env.PROXY_HOST
// const port = process.env.PROXY_PORT

module.exports = function (app) {
    try{
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://localhost:4000/',
            changeOrigin: true,
        })
    );
    }
    catch(err){
        console.log(err.message);
    }
};


// module.exports = function (app) {
//     try{
//     app.use(
//         '/graphql',
//         createProxyMiddleware({
//             target: {
//                 protocol: protocol,
//                 host: host,
//                 port: port
//                 },
//             changeOrigin: true,
//         })
//     );
//     }
//     catch(err){
//         console.log(err.message);
//     }
// };