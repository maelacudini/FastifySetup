import { FastifyInstance } from 'fastify'

const homeRoutes = (fastify: FastifyInstance) => {
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