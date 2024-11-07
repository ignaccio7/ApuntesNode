// path: index '/'
// const { Router } = require('express') con babel ahora usamos los imports y ya no los require
import { Router } from 'express'
const { principalGet } = require('../controllers/index.js')

const router = Router()

router.get('/', principalGet)

module.exports = router