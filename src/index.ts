 
import Fastify from 'fastify'
import userRoutes from './routes/user.routes'
import homeRoutes from './routes/home.routes'
import registerPlugins from './utils/functions/registerPlugins'
import process from 'node:process'
import { PORT } from './utils/constants/constants'
import i18nextMiddleware from 'i18next-http-middleware'
import i18nextConfigs from './lib/i18next/i18nextConfigs'

const fastify = Fastify()

const main = async () => {
  // INITIALIZE I18NEXT CONFIGURATIONS AND GET THE INSTANCE
  const i18nextInstance = i18nextConfigs()

  try {
    // REGISTER ALL PLUGINS AND ROUTES
    await registerPlugins(fastify)
    await fastify.register(i18nextMiddleware.plugin, { i18next: i18nextInstance })
    await fastify.register(userRoutes)
    await fastify.register(homeRoutes)

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