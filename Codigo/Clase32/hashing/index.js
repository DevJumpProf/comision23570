const express = require ("express")
const path = require ("path")
const bcryptjs = require ("bcriptjs")
const port = 3000
const app = express()


app.use(express.urlencoded({extended:false}))
app.use(express.json())



// definimos la rutas

app.post ("/login",controlador)


app.listen (port,()=>{
    console.log(`Servidor para Concesionarias OK en el puerto ${port}`);
})






