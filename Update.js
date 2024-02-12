const dbConnection = require('./mongodbConn');


const updateData = async () => {
    let db = await dbConnection();
    let finalResult = await db.updateOne(
        { name: "Hassan" },
        { $set: { name: "Hasnain" } }
    );
    console.log(finalResult);
    if (finalResult.acknowledged) {
        console.log("Result Update SuccesFully !")
    }
}


updateData();