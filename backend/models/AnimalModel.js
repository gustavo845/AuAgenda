const mongoose = require("mongoose")

const {Schema} = mongoose;

const AnimalSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    fur:{
        type: String,
        required: true,
    },
    breed:{
        type: String,
        required: true,
    }
},
{timestamps:true})

const  AnimalModel = mongoose.model("Animal", AnimalSchema)

module.exports = AnimalModel;