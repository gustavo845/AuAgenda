const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.URL

async function connect() {
    try {
        
        await mongoose.connect(url);
        console.log("Conectado ao banco")

    } catch (error) {
        console.log(error)
    }
}

module.exports = connect;