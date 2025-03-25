import { FastifyInstance } from 'fastify';

async function userRoutes(fastify: FastifyInstance) {
    fastify.get('/user', async (request, reply) => {
        console.log('Users route accessed'); 
        return { message: 'Users route' };
    });
}

export default userRoutes;