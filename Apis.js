const express = require('express');
const dbConnection = require('./mongodbConn');
const mongobd = require('mongodb')
const app = express();


app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnection();
    let result = await data.find().toArray();
    res.send(result)
    console.log(result);
})


app.post('/', async (req, res) => {
    let data = await dbConnection();
    let result = await data.insertOne(req.body);
    res.send(result);
})



app.put('/:name', async (req, res) => {
    let data = await dbConnection();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    console.log(result);
})


//MY FIRST DELET DYNAMIC API 
app.delete('/:id', async (req, res) => {
    let data = await dbConnection();
    let result = await data.deleteOne({ _id: new mongobd.ObjectId(req.params.id) })
    console.log(result , "app is working !");
})


app.get('/search/:name' , async( req ,res )=> {
    console.log(req.params.name)
    const result = await dbConnection.find({
        "$or":[
            {"name" : {$regex : req.params.name}}
        ]
    })
    console.log(result);
})

app.listen(5000);
