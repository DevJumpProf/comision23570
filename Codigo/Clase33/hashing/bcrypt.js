const bcryptjs = require ("bcryptjs")


let contrasenia = "juanito"


let hash = bcryptjs.hashSync(contrasenia,5)
 console.log(hash);

let comparacion =bcryptjs.compareSync(contrasenia,hash)

console.log(comparacion);

/* 
 let reHash =  bcryptjs.hashSync(hash,5)
 console.log(reHash)
 */


 

