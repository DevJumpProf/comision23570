const express = require ("express")
const router = express.Router()

const {getAllPosts,getPost,createPost} = require ("../controllers/Post.Controllers.js")

router.get ("/", getAllPosts)
router.get("/:id", getPost)
router.post ("/", createPost)
/* router.put ("/:id", funcion)
router.delete ("/:id", funcion)  */

module.exports =router
