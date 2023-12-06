

const CryptoJS = require("crypto-js");

const mensaje = "mensaje Secreto";
const clave = "ClaveSecreta123";

// Ciframos el mensaje utilizando AES
const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();
console.log(mensajeCifrado); //

/* "Descifrado de mensajes con Crypto.js" */
const encryptedMessage =mensajeCifrado;
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, clave).toString(CryptoJS.enc.Utf8);
console.log(decryptedMessage); // 'VkX19xS4WWX1upac1PEZvI/D4aEFe9TEg5PfKH3FH6abZOatA25LRNKQ+2