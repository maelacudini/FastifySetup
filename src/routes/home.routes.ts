import { FastifyInstance } from 'fastify'

async function homeRoutes (fastify: FastifyInstance) {
  fastify.get( '/', async (request, reply) => {
    return reply.viewAsync(
      'views/home.ejs', 
      {
        title: 'Homepage', 
        name: 'User',
      },
    )
  })
}

export default homeRoutes