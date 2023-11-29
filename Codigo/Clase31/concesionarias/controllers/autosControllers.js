const fs = require ("fs")
const concesionariaJSON = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))


module.exports= {
    index: (req,res)=>{
let autos = []

concesionariaJSON.forEach (sucursal=>{
    sucursal.autos.forEach(auto=>{
        autos.push(auto)
    })
})
res.render ("autos",{title: "Autos", autos:autos})
    },
}




