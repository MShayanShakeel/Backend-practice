// const http = require('http');
// const apiData = require('./Data');

// const ServerDataRunning = ((req , res ) => {
//     res.writeHead(200 , {'Content-Type' : 'application\json'}),
//     res.write(JSON.stringify(apiData));
//     res.end();
// })

// http.createServer(ServerDataRunning).listen(5000)
const fs = require('fs');
const { argv } = require('process');

const fileInput = process.argv;

if(fileInput[2] === "Add"){

    fs.writeFileSync(fileInput[3], fileInput[4])
}
else if(fileInput[2] === "Remove"){
    fs.unlinkSync(fileInput[3] , fileInput[4])
}
else{
  console.log("Invalid Input !")
}
// console.log(fileInput);
