//Math
//Math Pow :devolver un número elevado a un exponente

console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(3,3));

//Math.round : .round` redondeará un número al número entero más cercano.

console.log(Math.round (6.5));
console.log(Math.round (6.45));

//Math.floor : floor` siempre redondeará un número al número entero más cercano hacia abajo
console.log(Math.floor(6.9999));

//Math.ceil : .ceil` siempre se redondeará al número entero más cercano hacia arriba.
console.log(Math.ceil(6.01));

//Math devuelve el numero mayor 

console.log(Math.max(40,200,500,1800,2000))

//Math Random
console.log(Math.round (Math.random()*10));
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.round (Math.random()*10));
 //---------------------------------------------------


//

let num1= 32
let num2=40
let num3="32"
let num4=32
  

//OR ||
console.log(num1==num2||num3==num4)
 //            FALSE       TRUE

//AND &&
console.log(num1<num2&&num3==num4)
//            TRUE      TRUE


console.log(num1==num2);
console.log(num1!=num2);

console.log(num1==num3);
console.log(num1===num3);

console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num4);
console.log(num1>=num4);

console.log(num1!=num4);
console.log(num1!=num3);
console.log(num1!==num3);


 // .length

 let password = "1234567111111111"
console.log(password.length);


// condicionales - if else

 if (password.length>=8&&password.length<=15){
  console.log("pass de 8 caracteres");
}else{
    console.log("pass tiene que ser entre 8 y 15");
}

let edad = 18

if (edad>=18){
    console.log("puede pasar");
}else{
    console.log("No puede pasar"); 
}

//ternario
edad>=18?console.log("puede pasar"):console.log("No puede pasar"); 

//switch

let semaforo = "ROJO"

switch (semaforo.toUpperCase()){

case "ROJO":
console.log("no podes pasar");
break;

case "AMARILLO":
console.log("Precaucion");
break;

case "VERDE":
console.log("Podes avanzar");
break;

default :
console.log("no es un color del semaforo");
}

//FUNCIONES
function saludo (){
    console.log("Hola Codo a codo");
}
saludo()

function saludo2 (nombre,edad){
    console.log(`Hola ${nombre} tenes ${edad} años`);
}
saludo2("Tito",32)
saludo2("Juan",32)

function suma (num1,num2){
    return num1+num2
}

console.log(suma (10,10));


//funcion flecha arrow function

const resta = (num1,num2)=>{
    return num1-num2
};
console.log(resta(10,2));


const saludo3 = nombre=> `hola ${nombre}`;console.log(saludo3("Alicia"));





