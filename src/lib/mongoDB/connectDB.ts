import mongoose from "mongoose"

const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('Using existing connection')
    
    return true
  }

  try {
    const URI = process.env.MONGO_URI

    if (!URI) {
      console.log('Please set a MongoDB URI')
      
      throw new Error("Please set a MongoDB URI")
    }

    await mongoose.connect(URI, {
      heartbeatFrequencyMS: 5000,
      ssl: true, 
      maxPoolSize: 20,
      maxConnecting: 5,
      connectTimeoutMS: 5000,
    })
    console.log("MongoDB connected")

    return true
  } catch (error) {
    console.log('connectMongoDB error')
    
    throw new Error("Could not connect to MongoDB")
  }
}

export default connectMongoDB