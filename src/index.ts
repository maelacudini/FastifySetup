import 'dotenv/config'
import Fastify from 'fastify'
import registerPlugins from './utils/functions/registerPlugins'
import registerRoutes from './utils/functions/registerRoutes'
import process from 'node:process'
import { PORT } from './utils/constants/constants'

const fastify = Fastify()

const main = async () => {
  try {
    // REGISTER ALL PLUGINS AND ROUTES
    await registerPlugins(fastify)
    await registerRoutes(fastify)        

    // NOT FOUND ROUTE
    fastify.setNotFoundHandler((request, reply) => {
      reply.status(404).view('views/not-found.ejs', { title: 'Not Found' })
    })
      
    // `ready` WILL BE EXECUTED ONCE ALL THE REGISTERS DECLARED HAVE FINISHED THEIR EXECUTION
    fastify.ready(async (err) => {
      if (err) {
        fastify.log.error('Error during Fastify setup:', err)
        process.exit(1)
      } else {
        try {
          await fastify.listen({ port: PORT })  
          fastify.log.info(`Server listening on port ${PORT}`)      
        } catch (err) {
          fastify.log.error('Error starting server:', err)
          process.exit(1)
        }
      }
    })
  } catch (registerErr) {
    fastify.log.error('Error during plugin registration:', registerErr)
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