const express = require('express')
const routes = require('./routes/routes')

const app = express()
const port = 8080

routes(app)

app.use(express.json())

app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`))