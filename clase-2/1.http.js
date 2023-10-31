const https = require('node:http'); // protocolo HTTP
const fs = require('node:fs')


const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url === '/') {
        res.end('<h1>Bienvenido a mi página de inicio</h1>');

    }
    else if (req.url === '/imagen.png') {

        fs.readFile('./clase-2/placa.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>');

            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })

    }
    else if (req.url === '/contacto') {
        res.end('<h1>Contacto</h1>');

    }
    else {
        res.statusCode = 404 // Not found
        res.end('<h1>404</h1>');

    }
}

const server = https.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`);

});

// Status code
// 100-199: Respuestas informativas
// 200-299: Respuestas satisfactorias      200 OK
// 300-399: Redirecciones                  301 Moved Permanently
// 400-499: Errores del cliente            400 Bad Request | 404 Not Found
// 500-599: Errores del servidor           500 Internal Server Error 