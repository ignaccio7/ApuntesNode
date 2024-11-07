import jwt from 'jsonwebtoken'

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {uid}
    jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: '24h',
    }, (err, token) => {
      if (err) {
        reject({ message: 'El token no pudo ser generado', reason: err })
      }
      resolve(token)
      return
    })
  })
}

export {
  generateJWT
}