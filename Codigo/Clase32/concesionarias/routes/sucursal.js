const express = require ("express")
const router = express.Router()

const {index,show} = require ("../controllers/sucursalesControllers.js")

router.get("/",index)
router.get ("/:sucursal",show)

module.exports = router
