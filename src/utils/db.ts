import mongoose from 'mongoose'

const URI_MONGO = process.env.URI_MONGO

const connectDB = async () => {
  try {
    if (!URI_MONGO) {
      throw new Error('La variable de entorno no está configurada')
    }

    await mongoose.connect(URI_MONGO)
    console.log('Conexión exitosa a MongoDB')
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
  }
}

export default connectDB
