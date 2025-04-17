import mysql from 'mysql2/promise'
import { URL_HOST, URL_USER, URL_PORT, URL_PASSWORD, URL_DATABASE } from '../../config/config.js'

const config = {
  host: URL_HOST,
  user: URL_USER,
  port: URL_PORT,
  password: URL_PASSWORD,
  database: URL_DATABASE
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()
      // get genre ids from database table using genre names
      const [genres] = await connection.query('SELECT id, name FROM genre  WHERE LOWER(name) = ?;', [lowerCaseGenre])

      // no genre found
      if (genres.length === 0) return []

      // get the id from the first genre result
      const [{ id }] = genres


      // get all movies ids from database table
      // la query a movie_genres
      // join
      // y devolver resultados
      return []



    }

    const [movies] = await connection.query('SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie');

    return movies
  }

  static async getById({ id }) {
    const [movies] = await connection.query(`SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
    FROM movie WHERE id = UUID_TO_BIN(?);`, [id]);

    if (movies.length === 0) return null

    return movies[0]

  }

  static async create({ input }) {
    const {
      genre: genreInput,
      title,
      year,
      director,
      duration,
      poster,
      rate
    } = input

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult;



    try {
      await connection.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
         VALUES (UUID_TO_BIN("${uuid}"),?, ?, ?,? ,?, ?);`,
        [title, year, director, duration, poster, rate]);

    } catch (e) {
      // evitar mandar los errores en consola o mostrarlos al usuario
      // puede enviarle información sensible
      throw new Error("Error creating movie");
      // enviar la traza a un servicio interno
      // sendLog(e)

    }

    const [movies] = await connection.query(`
    SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
    FROM movie WHERE id = UUID_TO_BIN(?);`,
      [uuid]);


    return movies[0]

  }



  static async delete({ id }) {

  }

  static async update({ id, input }) {
  }
}