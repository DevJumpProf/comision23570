const express = require ("express")
const bcryptjs = require ("bcryptjs")

const app = express()
const port = 3000

app.use(express.urlencoded({extended:false}))
app.use(express.json())

let passwordHash
// definimos la rutas

app.post ("/login",async(req,res)=>{
    //datos que voy a cargar en thunder
    const user = req.body.user;
    const password = req.body.password;

    //comprobar que los datos son correctos
    if (user=="admin"&& password == 123456){
         passwordHash = await bcryptjs.hash(password.toString(),8)
        res.json({
            message: "autenticacion exitosa",
            passwordHash:passwordHash
        })
    }else{
        res.json({
            message: "autenticacion fallida"
        }) 
    }
})


app.get ("/comparar",(req,res)=>{
    let comparar = bcryptjs.compareSync("123456",passwordHash)
    if(comparar){
        res.json({message:"comparacion exitosa"})
    }else{
        res.json({
            message: "comparacion fallida"
        }) 
    }

})


app.listen (port,()=>{
    console.log(`Servidor para Bcrypt OK en el puerto ${port}`);
})






