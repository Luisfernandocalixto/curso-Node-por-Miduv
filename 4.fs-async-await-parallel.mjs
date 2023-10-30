//  Esto solo en los modulos nativos
//  que no tienen promesas nativas

//  const { promisify } = require('node: util')
//  const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises";
import { text } from "stream/consumers";

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text);
    console.log('segundo texto:', secondText);
})

//  en paralelo es más rápido, lee ambos archivos al mismo tiempo