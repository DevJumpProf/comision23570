const express = require ("express")
const router = express.Router()

const {index} = require ("../controllers/autosControllers.js")


// controladores


router.get ("/",index) 


module.exports = router

