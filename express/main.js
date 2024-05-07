import bodyParser from 'body-parser'
import express from 'express'
import { registerRoutes } from './route.js'

const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

registerRoutes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})
