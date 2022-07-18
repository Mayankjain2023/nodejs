const http=require('http')

http.createServer((request,response)=>{

    response.write("<h1>Hello,mayank this side</h1>")
    response.end();

}).listen(4500);