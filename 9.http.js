const https = require('node:http'); // protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js');

const desiredPort = process.env.PORT ?? 3000;

const server = https.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
})

findAvailablePort(desiredPort).then(port => {

    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`);

    })
})

// Los console.log(); que se ejecutan aqui en el servidor
// no llegan a los del navegador | >
// Esto es aplicable en desarrollo no en produccion
