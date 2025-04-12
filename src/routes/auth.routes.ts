import { FastifyInstance, FastifyRequest } from 'fastify'
import { CreateUserBody } from './types'

async function authRoutes (fastify: FastifyInstance) {

  // PUBLIC, SERVE LOGIN PAGE
  fastify.get( '/login', async (request, reply) => {    
    return reply.viewAsync(
      'views/login.ejs', 
      { title: 'Login', },
    )
  })

  // PUBLIC, USER LOGIN
  fastify.post('/login', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
    const {
      username, email 
    } = request.body  
    reply.send({ message: `POST /login route hit with username: ${username}, email: ${email}, user created` })
  })

  // PUBLIC, SERVE SIGNUP PAGE
  fastify.get( '/signup', async (request, reply) => {
    return reply.viewAsync('views/signup.ejs',{ title: 'Signup' })
  })  

  // PUBLIC, USER SIGNUP
  fastify.post('/signup', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
    const {
      username, email 
    } = request.body  
    reply.send({ message: `POST /signup route hit with username: ${username}, email: ${email}, user created` })
  })

  // PUBLIC, USER LOGOUT
  fastify.get( '/logout', async (request, reply) => {
    reply.send({ message: 'Logged out' })
  })
}

export default authRoutes