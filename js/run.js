/**
 * Created by Administrator on 2017/7/26.
 */
var http=require('http');

var server=http.createServer(function (request,response) {
    console.log(request.method+':'+request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello yetian </h1>');
})
server.listen(8000);
console.log('run');