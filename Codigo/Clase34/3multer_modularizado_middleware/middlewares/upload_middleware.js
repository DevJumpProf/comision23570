const multer = require ("multer");
const path = require ("path");

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
  
  module.exports= multer({ storage: storage }) // 1 upload contiene el objeto storage
