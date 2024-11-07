import { Schema, model } from "mongoose";

// todo lo que estaria dentro de esta tabla seria la base de datos
const UserSchema = Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// export default model(<nombreTabla-Coleccion> debe ser en plural, <Base o  estructura de la tabla>)
export default model('usuarios', UserSchema)
