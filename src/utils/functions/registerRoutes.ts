import { FastifyInstance } from 'fastify'
import userRoutes from '../../routes/user.routes'
import homeRoutes from '../../routes/home.routes'
import authRoutes from '../../routes/auth.routes'

async function registerRoutes( fastify: FastifyInstance ) {
  await fastify.register(homeRoutes)
  await fastify.register(userRoutes)
  await fastify.register(authRoutes)
}

export default registerRoutes