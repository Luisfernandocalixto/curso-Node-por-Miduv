//  Esto solo en los modulos nativos
//  que no tienen promesas nativas

//  const { promisify } = require('node: util')
//  const readFilePromise = promisify(fs.readFile)

// function invocada
//  IIFE - Inmediatly Invoked Function Expression 
(
    async () => {
        const { readFile } = require('node:fs/promises');

        console.log('Leyendo el primer archivo...');
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log('primer texto:', text);

        console.log('Hacer cosas mientras lee el archivo...');

        console.log('Leyendo el segundo archivo...');
        const secondText = await readFile('./archivo2.txt', 'utf-8');
        console.log('segundo texto:', secondText);

    }
)()

/* async function init() {
    const { readFile } = require('node:fs/promises');

    console.log('Leyendo el primer archivo...');
    const text = await readFile('./archivo.txt', 'utf-8');
    console.log('primer texto:', text);

    console.log('Hacer cosas mientras lee el archivo...');

    console.log('Leyendo el segundo archivo...');
    const secondText = await readFile('./archivo2.txt', 'utf-8');
    console.log('segundo texto:', secondText);

}
init() */

//  Existe sincrono | asincrono callback | asincrono secuencial  | asincrono en paralelo

