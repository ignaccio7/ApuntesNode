import { request, response } from "express";
import UserModel from "../models/User.model";
import { checkIfEmailExists } from "../middleware/user.middleware";
import bcrypt from 'bcryptjs'
import { generateJWT } from "../utils/jwt.utils";

const createUser = async (req, res = response) => {
  try {
    const { email, name, password } = req.body

    if(email && name && password) {
      if (name.length >= 3 && password.length >= 5 && email.length >= 5) {

        // usamos nuestro middleware para verificar si el email ya existe
        const checkEmail = await checkIfEmailExists(email)
        if (checkEmail) {
          return res.status(checkEmail.status).send({
            ...checkEmail
          })
        }

        const user = UserModel(req.body) // creamos un modelo de usuario basado en lso campos que nos llega
        
        // para encriptar la contraseña -> aunque tenga la misma contraseña al encriptar no devolvera lo mismo
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(password, salt);
        // para encriptar la contraseña        

        await user.save()

        // para generar el token
        const token = await generateJWT(user.id);
        // para generar el token

        res.status(201).send({
          success:true,
          message:'Usuario creado',
          data: user,
          token
        })
        return;
      }else{
        res.status(400).send({
          success:false,
          message:'Datos invalidos'
        })
      }
    }else{
      res.status(400).send({
        success:false,
        message:'Faltan Datos'
      })
    }
    return;
    // res.send({ ok:true })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      success:false,
      message:'Error en el servidor'
    })
  }
}

const getAllUsers = async (req, res = response) => {
  try {
    const users = await UserModel.find()
    res.status(200).send({
      success:true,
      data: users
    })
  } catch (error) {
    res.status(500).send({
      error,
      success:false,
      message:'Error en el servidor'
    })
  }
}

const getById = async (req = request, res = response) => {
  try {
    const { id } = req.params
    const user = await UserModel.findById(id)
    if (user) {
      res.status(200).send({
        success:true,
        data: user
      })  
    }else{
      res.status(400).send({
        success:false,
        message:"Usuario no existe"
      })
    }
    return
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      success:false,
      message:'Error en el servidor'
    })
  }
}

export {
  createUser,
  getAllUsers,
  getById
}