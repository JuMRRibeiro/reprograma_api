const express = require('express')
const router = express.Router()
const controller = require("../controllers/professorasController")

//const alunas = require("../model/alunas.json")

router.get("/", controller.get)
router.get('/:id', controller.getById)


//router.get("/", function (req, res) {
  //  res.status(200).send(alunas)
//})





module.exports = router