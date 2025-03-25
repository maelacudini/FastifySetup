import Fastify from 'fastify'
import userRoutes from './routes/user.routes'
import homeRoutes from './routes/home.routes'
import registerPlugins from './utils/functions/registerPlugins'
import process from 'node:process'

const fastify = Fastify()

const main = async () => {
  registerPlugins(fastify)
  fastify.register(userRoutes);
  fastify.register(homeRoutes);

  // `ready` will be executed once all the registers declared have finished their execution
  fastify.ready(err => {
    if (err) {
      console.log(err)
    } else {
      try {
        fastify.listen({ port: 3000 }, (err, address) => {
          if (err) {
            fastify.log.error(err);
            process.exit(1);
          }
          console.log(`Server listening on ${address}`);
        });        
      } catch (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    }
  })
}

[ "SIGINT", "SIGTERM" ].forEach( ( signal ) => {
  process.on( signal, async () => {
    await fastify.close();
  
    process.exit( 0 );
  } );
} );

main()