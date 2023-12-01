const fs = require ("fs")
const concesionaria = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))


module.exports= {
    index: (req,res)=>{
        res.render ("sucursales",{title:"Sucursales",nombre:"CAC Autos",concesionaria:concesionaria})
    },
    show:(req,res)=>{
        // guardar en una variable el nombre de la sucursal (enviado por params)
        // declaramos variables cuyo valor pasamos luego.
        let sucursalReq = req.params.sucursal  
        let nombreSucursal
        let direccionSucursal
        let telefonoSucursal
        let cantidadAutos
        let autosArray

        concesionaria.forEach(sucursal=>{ // lo recorremos y cuando se machee la sucursal de el request con el de los datos, guardamos la info en cada variable

            if( sucursalReq == sucursal.sucursal){
                nombreSucursal = sucursal.sucursal
                direccionSucursal = sucursal.direccion
                telefonoSucursal =sucursal.telefono
                cantidadAutos = sucursal.autos.length
                autosArray = sucursal.autos 

                res.render ("sucursalDetalle",{ 
                    nombreSucursal,telefonoSucursal,direccionSucursal,cantidadAutos,autosArray,title:`${nombreSucursal}`
                })
            }
        })
        res.render("error",{titulo: "no pudimos encontrar esa sucursal",descripcion:"intentalo nuevamente con la lista disponible",title:"error"})

    }
}



