const mongoose = require("mongoose")

const AnimalSchema = require('./AnimalModel')

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    animals:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Animals"
    }
},
{timestamps:true})

const  UserModel = mongoose.model("User", userSchema)

module.exports = UserModel;