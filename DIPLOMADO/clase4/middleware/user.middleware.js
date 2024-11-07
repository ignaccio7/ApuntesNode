// para verificar si existe el usuario
import UserModel from "../models/User.model";

const checkIfEmailExists = async (email) => {
  try {
    // el findOne retorna si existe un documento y sino un nulo
    const exist = await UserModel.findOne({email})
    if (exist) {
      return {
        status: 400,
        message: 'Email exists',
        error: email
      }
    }
    return null
  } catch (error) {
    return {
      status: 500,
      message: "Ha ocurrido un error interno",
      error
    }
  }
}

export {
  checkIfEmailExists
}