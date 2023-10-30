//console.log(typeof window); // window no lo tenemos en node
// globalThis es un variable global en toda nuestra aplicacion
// console.log(); es una propiedad de => globalThis

//  CommonJS require module
const { sum } = require('./sum')  // para importar el contenido del otro js
console.log(sum(1, 2));