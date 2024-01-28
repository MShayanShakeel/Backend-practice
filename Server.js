const http = require('http');

const ServerData = ((req , res ) => {
    res.write("<h1>server is runnig ! </h1>")
    res.end();
})

http.createServer(ServerData).listen(5000);