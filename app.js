/**
 * Created by roche_d on 11/05/15.
 */

console.log('started');

var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    console.log(req);
    proxy.web(req, res, { target: 'http://tracker.t411.io:56969' });
    //http://tracker.t411.io:56969/0dad9247ce28ccbaea3039fef799024c/announce
});

console.log("listening on port 8080");
server.listen(8080);