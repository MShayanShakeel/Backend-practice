const dbConnection = require('./mongodbConn');


const deletData = async () => {
    let db = await dbConnection();
    let finalResult = await db.deleteOne({
        name: "Shaya",
    })
    console.log(finalResult)
    if (finalResult.acknowledged) {
        console.log("Delet Data Succesfully !")
    }
}

deletData();