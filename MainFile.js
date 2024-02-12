const express = require('express');
const mongodb = require('./CRUD-APIS/Mongodb');

const app = express();

app.get('/' , async (req , res )=> {
    res.send(":workign")
    const data = mongodb();
    const result = await data.find();
    console.log("working!")
    console.log(result)
})

app.listen(5000);