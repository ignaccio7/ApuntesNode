import dbConnection from './database/config.js'
import routerUser from './routes/user.route.js'

const express = require('express')
require('dotenv').config()

const app = express()
const server = require('node:http').createServer(app)

dbConnection()

app.use(express.json())

// Init Routes
app.use('/', require('./routes/index.js'))

app.use('/api/users', routerUser)

server.listen(process.env.PORT, () => {
  console.log(`The app is running on ${process.env.PORT} port go to: http://localhost:${server.address().port}`);
})

