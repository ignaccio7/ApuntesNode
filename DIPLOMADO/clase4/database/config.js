import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    /**
     * Esta es la conexion antigua
     await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true, //<- habilita un driver para utilizar una urlparseada, para asi hacer conexiones si esque existiera objetos complejos
      useUnifiedTopology: true //<- para manejar una capa de topologia definida
      //useCreateIndex: true //<- Crea un indice para crear de forma generar nuestras compilaciones en modelos. Crea como una vista un conjunto de normaas que van a trabajar para construcciones automatizadas en base a modelos
    })
     */
    await mongoose.connect(process.env.DB_CONNECTION)
    console.log('Database successfull connected!');
  } catch (error) {
    console.log(error);
    throw new Error('Error en la conexion con la base de datos.')
  }
}

export default dbConnection;