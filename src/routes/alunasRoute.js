const express = require('express')
const router = express.Router()
const controller = require('../controllers/alunasController')

//const alunas = require("../model/alunas.json")

router.get("/", controller.get)

//router.get("/", function (req, res) {
  //  res.status(200).send(alunas)
//})
router.get("/nasceuSp", controller.getSp)
router.get("/: id", controller.getById)
router.get("/:id/books", controller.getBooks)



module.exports = router