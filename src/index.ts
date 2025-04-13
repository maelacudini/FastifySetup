import 'dotenv/config'
import Fastify from 'fastify'
import registerPlugins from './utils/functions/registerPlugins'
import registerRoutes from './utils/functions/registerRoutes'
import process from 'node:process'
import { PORT } from './utils/constants/constants'
import connectMongoDB from './lib/mongoDB/connectDB'

const fastify = Fastify()

const main = async () => {
  try {
    // CONNECT TO DATABASE
    await connectMongoDB()

    // REGISTER ALL PLUGINS AND ROUTES
    await registerPlugins(fastify)
    await registerRoutes(fastify)       

    // NOT FOUND ROUTE
    fastify.setNotFoundHandler((request, reply) => {
      reply.status(404).view('views/not-found.ejs', { title: 'Not Found' })
    })
    
    try {
      await fastify.listen({ port: PORT })  
      fastify.log.info(`Server listening on port ${PORT}`)      
    } catch (err) {
      fastify.log.error('Error starting server:', err)
      process.exit(1)
    }
  } catch (error) {
    fastify.log.error('Error:', error)
    process.exit(1)
  }
};

// GRACEFUL SHUT DOWN
[ "SIGINT", "SIGTERM" ].forEach( ( signal ) => {
  process.on( signal, async () => {
    await fastify.close()
  
    process.exit( 0 )
  } )
} )

main()