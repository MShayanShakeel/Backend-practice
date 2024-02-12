const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Testdb');

const mongoosSchema = mongoose.Schema({
    name: String,
    city: String,
})

const Main = async () => {
    const mongoosModel = mongoose.model('Products', mongoosSchema);
    let data = await mongoosModel({ name: "mobileee",  })
    let result = await data.save();
    console.log(result);
}

const updateInDb = async () => {
    const mongoosmodel = mongoose.model('Products', mongoosSchema);
    let data = await mongoosmodel.updateOne(
        { name: "Hasnain" },
        { $set: { city: "pakistan" } }
    )
    console.log(data);
}
updateInDb();

