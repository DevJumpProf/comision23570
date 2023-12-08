const express = require ("express");


const app = express ();
const port = 3000;

const uploadRouter = require ("./routes/uploadRouter.js")

app.set("view engine", "ejs")

app.use("/upload",uploadRouter)

app.listen (port, ()=>{
    console.log(`server ok en el puerto ${port}`);
})