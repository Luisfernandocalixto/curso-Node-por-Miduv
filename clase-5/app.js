import 'dotenv/config'
import express, { json } from 'express'; // require -> commonJS
import { createMovieRoute } from './routes/movies.js';
import { corsMiddleware } from './middlewares/cors.js';
// import movies from "./movies.json" with {type: 'json'}; // require -> JSON 
// EN EL FUTURO : el import del json sera asi
// import movies from './movies.json' with { type: 'json'}

// como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

// leer un json en ESModules recomendado por ahora
export const createApp = ({ movieModel }) => {
    const app = express();
    app.use(json())
    app.use(corsMiddleware())
    app.disable("x-powered-by") // desabilitar el header X-Powered-By: Express

    // Tener en cuenta 
    // cuando la peticion es del mismo ORIGIN  , No se obtiene la cabezera de origen
    // http://localhost:1234 ->  http://localhost:1234
    // res.header('Access-Control-Allow-Origin', '*')
    // Todos los recursos que sean MOVIES se identifica con/Movies

    app.use('/movies', createMovieRoute({ movieModel }))


    const PORT = process.env.PORT ?? 1234

    app.listen(PORT, () => {
        console.log(`Server listening on port http://localhost:${PORT}`);
    })

}

