//array
      //indice   0       1        2 
let animales = ["Gato","Perro","Tigre"]
// cantidad                     
console.log(animales[0]);
//.length
console.log(animales.length);
// acceder al ultimo elemento
console.log(animales[animales.length-1]);

let jugadores = ["Messi", "Di Maria", "Martinez"]

let jugadoras = ["Larroquete","Banini","Correa"]

//spread operator 
let equipoTotal = [...jugadores,...jugadoras,"Rodriguez"]

console.log(equipoTotal);

//destructuring

//copiar datos sin  destructuring
let dibu = jugadores[2]
console.log(dibu);

//copiar datos con destructuring
let [leo,angel,emiliano] = jugadores 

console.log(emiliano);
