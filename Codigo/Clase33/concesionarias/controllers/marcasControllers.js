const fs = require("fs");
const concesionaria = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);

module.exports = {
  index: (req, res) => {
    let marcas = [];
    concesionaria.forEach((sucursal) => {
      sucursal.autos.forEach((auto) => {
        if (marcas.includes(auto.marca) == false) {
          marcas.push(auto.marca);
        }
      });
    });
    res.render("marcas", { title: "Marcas", marcas });
  },
  show: (req, res) => {
    let autosArray = []; // creo un array para completarlo con los autos de la marca que viajan en el req.params
    let marcaReq = req.params.marca; // guardo en una variable  la marca que viaja en el req.params de marca/:marca
/*     let aceptado = false; */

    concesionaria.forEach((sucursal) => {
      sucursal.autos.forEach((auto) => {
        if (marcaReq == auto.marca) {
          autosArray.push({"modelo": auto.modelo, "anio": auto.anio,"color":auto.color, "sucursal": sucursal.sucursal,"img":auto.img})
  /*         aceptado = true; */
        }
      });
      /*      console.log(autosArray); */
    });
    if (autosArray.length>0) {
      res.render("marcaDetalle", {
        autosArray,
        marcaReq,
        title: `${marcaReq}`,
      });
    } else {
      res.render("error", {
        titulo: "no pudimos encontrar ese auto",
        descripcion: "intentalo nuevamente",
        title: "ERROR",
      });
    }
  },
};
