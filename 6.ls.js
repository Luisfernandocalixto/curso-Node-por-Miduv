const { error } = require('node:console');
const fs = require('node:fs');
//const fs = require('node:fs/promises'); // o 



fs.readdir('.', (err, files) => {
    if (err) {
        console.log('Error al leer el directorio ', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
});



/* fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        if (err) {
            console.log('Error al leer el directorio: ', err);
            return;
        }
    }); */