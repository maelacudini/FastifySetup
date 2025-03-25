import { FastifyInstance } from 'fastify';

async function homeRoutes(fastify: FastifyInstance) {
  fastify.get( '/', async (request, reply) => {
    return reply.viewAsync(
      'views/home.ejs', 
      { name: 'User' },
      { layout: 'components/layouts/main.ejs' }
    );
  });
}

export default homeRoutes;