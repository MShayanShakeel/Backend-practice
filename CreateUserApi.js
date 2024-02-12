const express = require('express');
require('./CreateMongoCon');
const productSchema = require('./CreateModelSchema');


const app = express();

app.use(express.json());

app.post('/create' , async (req , res) => {
    let data = new productSchema(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
})

app.listen(5000);