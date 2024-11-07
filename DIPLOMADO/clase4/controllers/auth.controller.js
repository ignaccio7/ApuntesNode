import { request, response } from "express";
import UserModel from "../models/User.model";
import bcrypt from 'bcryptjs'
import { generateJWT } from "../utils/jwt.utils";

export async function singin(req = request, res = response){
  try {
    const { email, password } = req.body
    const userDB = await UserModel.findOne({ email })

    if (!userDB) {
      return res.status(404).send({
        success: false,
        message: 'Usuario o contraseñas invalidos'
      })
    }

    const validPassword = bcrypt.compareSync(password, userDB.password)

    if (!validPassword) {
      return res.status(400).send({
        success:false,
        message: 'Contraseña incorrecta'
      })
    }

    const token = await generateJWT(userDB.id)
    return res.status(200).send({
      success:true,
      message: 'Usuario logeado satisfactoriamente',
      token
    })

  } catch (error) {
    return res.status(500).send({
      success:true,
      message: 'Ha ocurrido un problema',
      error
    })
  }
}

export const renewToken = async (req = request, res = response) => {
  try {
    const uid = req.uid
    const token = await generateJWT(uid)
    const user = await UserModel.findById(uid)
    res.send({
      success: true,
      uid,
      token,
      user,
      message: 'token actualizado'
    })
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Ha ocurrido un error',
      success:false
    })
  }
}