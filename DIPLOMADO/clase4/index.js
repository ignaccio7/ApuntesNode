import dbConnection from './database/config.js'
import routerUser from './routes/user.route.js'
import routerDish from './routes/dish.route.js'
import routerAuth from './routes/auth.route.js'
import routerOrder from './routes/order.route.js'

const express = require('express')
require('dotenv').config()

const app = express()
const server = require('node:http').createServer(app)

dbConnection()

app.use(express.json())

// Init Routes
app.use('/', require('./routes/index.js'))

app.use('/api/users', routerUser)
app.use('/api/dish', routerDish)
app.use('/api/auth', routerAuth)
app.use('/api/order', routerOrder)

server.listen(process.env.PORT, () => {
  console.log(`The app is running on ${process.env.PORT} port go to: http://localhost:${server.address().port}`);
})

