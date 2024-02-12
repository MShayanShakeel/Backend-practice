const dbConnection = require('./mongodbConn');

const insertData = async () =>{
    let db = await dbConnection();
    let finalResult = await db.insertOne({
        name : "Abdullah" , fname : "Shakeel" , age : "13" , gemmder : "male",
    })
    console.log(finalResult);

    if(finalResult.acknowledged){
        console.log("Data Insert Succcesfully !")
    }

}


insertData();