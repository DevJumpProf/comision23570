/* requerir el modelo */
const PostModel = require ("../models/PostModel.js")

//metodos del C-R-U-D
 
//MOSTRAR TODOS LOS REGISTROS   - Read

const getAllPosts = async (req,res) =>{
    try {
          const posts = await PostModel.findAll()  
          res.json (posts)
    } catch (error) {
        res.json ({message:error.message})
    }
}   

//mostrar un registro - Read
const getPost = async (req,res) =>{
try {
    const post = await PostModel.findByPk(req.params.id)
    res.json(post)
} catch (error) {
    res.json ({message:error.message})
}
}

//crear un registo - CREATE

const createPost=async(req,res)=>{
    try {
       await PostModel.create(req.body)
       res.json({
        "message": "registro creado correctamente"
       })
    } catch (error) {
        res.json ({message:error.message})
    }
}

module.exports = {getAllPosts,getPost,createPost}