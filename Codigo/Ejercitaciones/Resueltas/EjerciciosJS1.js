//funcion
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Batman";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



const devolverString=str =>str;console.log(devolverString("hola"));

const suma = (x, y)=>  x+y; console.log(suma(10, 2));

const resta=(x, y)=> x-y;console.log(resta(10, 2));

const multiplica=(x, y)=> x*y ; console.log(multiplica(10, 2));

const divide = (x, y) =>x/y;console.log(divide (21, 7));

const sonIguales = (x, y) => x===y; console.log(sonIguales (10, "10"));

const tienenMismaLongitud = (str1, str2)=>str1.length==str2.length;console.log( tienenMismaLongitud ("Hola", "1234"));

const  menosQueNoventa=num =>num <90 ; console.log(menosQueNoventa(99));

const mayorQueCincuenta = num=> num>50;console.log(mayorQueCincuenta(49));

const obtenerResto= (x, y)=> x%y; console.log(obtenerResto(2,7));

const esPar = num=> num%2===0; console.log(esPar(2));

/* const esImpar=num=> num%2===1;console.log(esImpar(3)); */
const esImpar=num=> num%2!==0;console.log(esImpar(3));

const elevarAlCuadrado=num=>Math.pow(num,2); console.log(elevarAlCuadrado(8));
/* const elevarAlCuadrado=num=>num**2; console.log(elevarAlCuadrado(8)); */

const elevarAlCubo = num => Math.pow(num,3);console.log(elevarAlCubo (3));

const elevar=(num, exponent) =>Math.pow(num,exponent);console.log(elevar(3,3));

const redondearNumero=num =>Math.round(num); console.log(redondearNumero(4.6));

const redondearHaciaArriba=num=>  Math.ceil(num);console.log(redondearHaciaArriba(4.5));

const numeroRandom=()=> Math.random();console.log(numeroRandom());
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
/* const esPositivo=numero=> {
if(numero>0){
  return  "Es positivo"
}else if (numero<0){
  return  "Es Negativo"
}else{
  return false
}
}
console.log(esPositivo(1)); */

// if ternario
const esPositivo = numero =>numero===0?false:numero>0? "Es positivo": "Es Negativo"

console.log(esPositivo(-1));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

return `${nombre} ${apellido}`
}
console.log(combinarNombres("Oscar","Bonavena"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
return `Hola ${nombre}!`
}
console.log(obtenerSaludo("Don pepito"));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
return alto*ancho
}
console.log(obtenerAreaRectangulo(10,2));

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
return lado*4
}
console.log(retornarPerimetro(10,8));

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return (base*altura)/2

}
console.log(areaDelTriangulo(10,8));

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
return euro*1.2
}
console.log(deEuroAdolar(200));

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
const esVocal=letra=>{
if(letra.length!=1){
  return "Dato incorrecto"
}else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
  return `efectivamente ${letra} es vocal`
}else {
 return ` ${letra} No es vocal`
}
}
console.log(esVocal("m"));


