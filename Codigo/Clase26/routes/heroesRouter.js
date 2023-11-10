const express = require ("express")
const router = express.Router()

const {heroesController} = require ("../controllers/heroesController.js")

// controladores

router.get("/",heroesController)

module.exports = router