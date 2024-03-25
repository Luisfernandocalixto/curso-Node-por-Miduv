const express = require("express") // require -> commomJS

const app = express()
app.disable("x-powered-by") // desaabilitar el header X-Powered-By: Express

app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server litening on port https://localhost:${PORT}`);
})