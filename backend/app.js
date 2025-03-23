const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connect = require("./db/connection")

const app = express()
dotenv.config();

app.use(express.json());

app.use(cors());

//conectando ao banco

connect();

//rotas
const routes = require("./routes/route")

app.use("/api", routes)

app.listen(3000, ()=>{
    console.log("Servidor on")
})

