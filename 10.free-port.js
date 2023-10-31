const { rejects } = require('node:assert');
const net = require('node:net');
const { resolve } = require('node:path');


function findAvailablePort(desiredPort) {
    return new Promise((resolve, rejects) => {
        const server = net.createServer();

        server.listen(desiredPort, () => {
            const { port } = server.address();
            server.close(() => {
                resolve(port);
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port));
            } else {
                rejects(err);
            }
        })

    })
}

module.exports = { findAvailablePort }

// "dev:1": "nodemon ./clase-2/1.http.js",
// "dev:2": "nodemon ./clase-2/2.routing.js"
// 