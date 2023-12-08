const multer = require ("multer");
const path = require ("path");
const express = require ("express");
const router = express.Router()

const {uploadView,uploadOk} = require ("../controllers/uploadController.js")

//lo buscamos en la documentacion (ver readme)
const storage = multer.diskStorage({  //2 storage = objeto con toda la informacion relacionada (destination) al almacenamiento del archivo -  filename) al nombre del arhivo
    destination: function (req, file, cb) {
      cb(null, 'images') // el primer argumento es para errores, el segundo es la configuracion ¿donde guardamos los archivos?
    },
    filename: function (req, file, cb) {
/*       cb(null, file.fieldname + '-' + Date.now()) */
      cb(null, Date.now()+path.extname(file.originalname)) /* requiero path para obtener la extension del archivo */
    }
  })
  
  const upload = multer({ storage: storage }) // 1 upload contiene el objeto storage


router.get ("/",uploadView)

//luego de l upload podemos decidir que tipo de carga hacer (ejemplo en doc.)
router.post ("/",upload.single("image"),uploadOk)


module.exports = router;