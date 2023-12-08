
const express = require ("express");
const router = express.Router()

const {uploadView,uploadOk} = require ("../controllers/uploadController.js")

const multer = require ("../middlewares/upload_middleware.js")



router.get ("/",uploadView)

//luego de l upload podemos decidir que tipo de carga hacer (ejemplo en doc.)
router.post ("/",multer.single("image"),uploadOk)


module.exports = router;