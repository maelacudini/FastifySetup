 
import Fastify from 'fastify'
import userRoutes from './routes/user.routes'
import homeRoutes from './routes/home.routes'
import registerPlugins from './utils/functions/registerPlugins'
import process from 'node:process'
import { PORT } from './utils/constants/constants'

const fastify = Fastify()

const main = async () => {
  try {
    await registerPlugins(fastify)
    await fastify.register(userRoutes)
    await fastify.register(homeRoutes)

    fastify.setNotFoundHandler((request, reply) => {
      reply.status(404).view('views/not-found.ejs', { title: 'Not Found' })
    })
  
    // `ready` will be executed once all the registers declared have finished their execution
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

[ "SIGINT", "SIGTERM" ].forEach( ( signal ) => {
  process.on( signal, async () => {
    await fastify.close()
  
    process.exit( 0 )
  } )
} )

main()