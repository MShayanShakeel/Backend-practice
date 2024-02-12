// 28 VIDEOS COMPLEATE
const dbConnection = require('./mongodbConn');

// getData().then((resp)=> {
//  resp.find({name :"Hassan"}).toArray().then((data) =>{
//   console.warn(data);
//  })
// })

const mainn = async () => {
  let data = await dbConnection();
  data = await data.find({}).toArray();
  console.log(data)
}
// mainn();


// const express = require('express');
// const path = require('path');
// const middleWareUser = require('./MiddleWare');
// const route = express.Router();
// const app = express();


// route.use(middleWareUser);

// app.set('view engine', 'ejs');



// const fileRoute = path.join(__dirname , "");
// app.use(express.static(fileRoute));

// app.get('/' , (req  ,res ) => {
//   res.send("this is my Home Page");
// })


// route.get('/about' ,( req ,res ) => {
//   const user = {
//     name : "M Shayan",
//     fname : "M Shakeel",
//     email : "Shayan@gmai.com",
//     country : "Pakistan",
//     skills : ["JavaScript" , "React JS" , "node JS" , "Express" , "MongoDB"] ,
//   }
//   res.render('about' , {user})
// })

// app.get('/contact' , (req  ,res ) => {
//   res.send("this is my Contact Page");
// })

// app.get('/Blog' , (req  ,res ) => {
//   res.send("this is my Blogs Page");
// })


// app.get('/' , (req  ,res ) => {
//   res.send("this is my Home Page");
// })


// app.use('/' , route);

// app.listen(5000);




// app.get("/contact" ,( req ,res ) => {
//   res.send("server is running on Contact page!");
// })
// app.get("/service" ,( req ,res ) => {
//   res.send("server is running on Service page!");
// })



// const http = require('http');
// const apiData = require('./Data');

// const ServerDataRunning = ((req , res ) => {
//     res.writeHead(200 , {'Content-Type' : 'application\json'}),
//     res.write(JSON.stringify(apiData));
//     res.end();
// })

// http.createServer(ServerDataRunning).listen(5000)

// SECOND PRECTICE
// const fs = require('fs');
// const { argv } = require('process');

// const fileInput = process.argv;

// if(fileInput[2] === "Add"){

//     fs.writeFileSync(fileInput[3], fileInput[4])
// }
// else if(fileInput[2] === "Remove"){
//     fs.unlinkSync(fileInput[3] , fileInput[4])
// }
// else{
//   console.log("Invalid Iut !")
// }
// console.log(fileInput);

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname , 'Files');

// const fileTemp = `${filePath}/Hello.txt`;

// fs.writeFileSync(fileTemp , "File created succesfully bro");
// fs.readFile(fileTemp ,'utf8' , (err , item) =>{
//   console.log(item);
// })

// fs.appendFile(fileTemp , 'yhhshgsiaha fvgoirg' , (err) => {
//   if(!err) console.log("update !")
// })

// fs.rename(fileTemp , `${filePath}/Update.txt` , (err) => {
//   console.log("update !")
// })

// fs.unlinkSync(`${filePath}/Update.txt`)

// console.log(filePath);





// FINAL EXAM START OUT 14 VIDEOS 


// const fs = require('fs');
// const path = require('path');
// const dirFiles = path.join(__dirname , "Files")
// const fileData = `${dirFiles}/Hello.txt`;


// fs.readFile(fileData , 'utf8' ,  (err , item) => {
//   console.log(item);
// })
//  fs.rename(fileData , `${dirFiles}/Hello11.txt` , (err) => {
//   if(!err) console.log("updates!")
//  })

//  fs.appendFile(fileData , " Update code here bro !" , (err , item)  => {
//   console.log("update!")
//  })
// for(i = 0 ; i < 5 ; i++){
  // fs.writeFileSync(dirFiles + "/Hello.txt" , "file create bro" )
// }

// console.log(dirFiles)






















