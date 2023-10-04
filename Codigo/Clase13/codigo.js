//ARRAY
// indice         0      1        2       3       4
let animales = ["Gato", "Perro", "Tigre", "Conejo", "Gato"];
/* console.log(animales[1]); */

let numeros = [1, 2, 8, 7, 4, 6, 7, 3, 12];

/* animales.splice(1,0,"Cocodrilo","Tortuga")
console.log(animales); */

// .PUSH()
/* animales.push ("Cocodrilo")
console.log(animales) */

//.pop ()
// elimina elemento al final del array
/* animales.pop ()
console.log(animales) */

//unshift
//Agrega un dato al inicio del array
/* animales.unshift ("Tortuga")
console.log(animales); 
 */
//shift
//elimina un dato al inicio del array
/* animales.shift()
console.log(animales) */

//SLICE
/* slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.  */
/* let nuevoArray=animales.slice(1,3)
console.log(nuevoArray); */

//find
/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */

/* const nuevoArray = numeros.find(element=>element>7)
console.log(nuevoArray);
 */

//filter

/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* let nuevoArray=animales.filter (elements=>elements ==="Perro"||elements==="Rata" )
console.log(nuevoArray); */
//forEach
/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */

/* animales.forEach((element,i)=>{
    console.log(`El ${element} está en la posicion" ${i+1}`);
})
 */

/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */

/* let nuevoArray = animales.filter(elements=>elements ==="Perro"||elements==="Gato")
console.log(nuevoArray); */

//map.
/* .map() : Permite recorre el array y modificar los elements presentes en él, 
retornando un nuevo array con la misma longitud que el original. */
/* let nuevoArray = numeros.map(element =>element*10)
console.log(nuevoArray); */

//While
/* let numero = 450

while (numero<1000){
   numero++;
   console.log(numero); 
   if (numero===500){
    break;
   }
} */

/* do while */
/* let numero = 11
do{
    numero++;
    console.log(numero);
}while (numero<10)
 */

/* for(let i = 1; i<=10; i++){
    console.log(2*i);
}
 */
/* for (let i=0;i>=0;i++){
    console.log(i);
}
 */

// objetos
//claves - valores
/* const celular = {
  marca: "Motorola",
  modelo: "V3",
  stock: true,
  encender: ()=>{
    console.log(` ${celular.marca} modelo : ${celular.marca.modelo} Encendido`);
  }
}; */
/*   encender: function (){
    console.log(` ${this.marca} modelo : ${this.modelo} Encendido`);
  } */

/* 
celular.encender() */

/* spread operator OBJETOS */

/* let generoAccion={
    nombreGenero:"Accion",
    ranking: 1
}

let rambo={
    titulo: "Rambo",
    popularidad:10,
    ...generoAccion
}
console.log(rambo); */

//destructuring objetos
/* let auto ={
    marca : "Chevrolet",
    modelo: "Zafira",
    anio:2006
} */

//copiar datos sin dectructuring
/* let miModelo = auto.modelo
console.log(miModelo); */

//copiar datos con dectructuring

/* let {anio,marca:marcaNueva} = auto
console.log(marcaNueva);
 */







/* 
console.log(`tengo un ${celular.marca} modelo : ${celular.modelo}`);
console.log(`tengo un ${celular["marca"]} modelo : ${celular["modelo"]}`);
 */