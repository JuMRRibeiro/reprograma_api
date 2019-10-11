const express = require('express')
const app = express()

//rotas
const index = require ("./routes/index")
const alunas = require('./routes/alunasRoute')
const professoras = require("./routes/professorasRoute")

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app