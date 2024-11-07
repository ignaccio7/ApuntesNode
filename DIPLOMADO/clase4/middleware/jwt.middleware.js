import jwt from 'jsonwebtoken'
import { request } from 'express'

const validateJWT = (req = request, res, next) => {
  const token = req.header('Authorization')

  if(!token) {
    return res.status(401).send({
      success: false,
      message: 'Acceso no autorizado'
    })
  }
  try {
    const {uid} = jwt.verify(token, process.env.JWT_KEY)
    req.uid = uid
    next()    
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: 'Token no valido'
    })
  }

}

export {
  validateJWT
}