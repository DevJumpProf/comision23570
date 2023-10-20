const express = require ("express")
const router = express.Router()

const {getAllPost,getPost} = require ("../controllers/Post.Controllers.js")

router.get ("/", getAllPost)
router.get("/:id", getPost)
/* router.post ("/", funcion)
router.put ("/:id", funcion)
router.delete ("/:id", funcion) */

module.exports =router
