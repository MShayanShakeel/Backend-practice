const { default: mongoose } = require("mongoose");

const modelSchema = mongoose.Schema({
    name : String,
    fname : String,
    city : String,
    education : String,
    phone : Number,
    age : Number,
})

export default mongoose.model('Products' , modelSchema);