import fastifyJwt, { Secret } from '@fastify/jwt'
import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'

const jwtPlugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.register(fastifyJwt, { secret: process.env.JWT_SIGNIN_SECRET as Secret })

  fastify.decorate("authenticate", async function(request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.status(401).send({ message: `Unauthorized: ${err}` })
    }
  })

  fastify.decorate("hasRole", function(role: 'admin' | 'user') {
    return async function (request: FastifyRequest, reply: FastifyReply) {      
      const userRole = request.user.role
      if (userRole !== role) {
        reply.status(403).send({ message: `Forbidden` })
      }
    }
  })
}

export default fp(jwtPlugin)
