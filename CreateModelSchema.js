const mongoose = require('mongoose');

const mongoosSchema = mongoose.Schema({
    name : String,
    fname : String,
    city : String,
    education : String,
    phone : Number,
    age : Number,
})

module.exports =  mongoose.model('Products' , mongoosSchema);

