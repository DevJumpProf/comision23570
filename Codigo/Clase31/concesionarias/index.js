const express = require ("express")
const path = require ("path")

const port = 3000

const app = express()

// Rutas
const mainRouter = require ("./routes/main")
const sucursalesRouter = require ("./routes/sucursal")
const marcasRouter = require ("./routes/marcas")
const autosRouter = require ("./routes/autos") 

// configuramos nuestro motor de vistas y su carpeta
app.set ("views",path.join(__dirname,"views"))
app.set ("view engine", "ejs")

app.use (express.static(path.join(__dirname,"public")))


// definimos la rutas

app.use ("/",mainRouter)
app.use("/sucursales",sucursalesRouter)
app.use("/marcas",marcasRouter)
app.use("/autos",autosRouter) 

app.listen (port,()=>{
    console.log(`Servidor para Concesionarias OK en el puerto ${port}`);
})






