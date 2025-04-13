import { FastifyInstance, FastifyRequest } from 'fastify'
import { CreateUserBody, LoginUserBody } from '../utils/types/routes.types'

const authRoutes = (fastify: FastifyInstance) => {

  // PUBLIC, SERVE LOGIN PAGE
  fastify.get( '/login', async (request, reply) => {    
    return reply.viewAsync(
      'views/login.ejs', 
      { title: 'Login', },
    )
  })

  // PUBLIC, USER LOGIN
  fastify.post('/login', async (request: FastifyRequest<{ Body: LoginUserBody }>, reply) => {
    const {
      password, email 
    } = request.body

    if (password !== '123') {
      reply.send({ message: 'Please correct credentials' })
    }

    // check password email and everything else you need to do
    // if valid send token

    const token = fastify.jwt.sign({
      email, 
      role: 'admin' 
    })
    
    // reply.send({ message: `POST /login route hit with email: ${email}` })
    reply.send({ token })
  })

  // PUBLIC, SERVE SIGNUP PAGE
  fastify.get( '/signup', async (request, reply) => {
    return reply.viewAsync('views/signup.ejs',{ title: 'Signup' })
  })  

  // PUBLIC, USER SIGNUP
  fastify.post('/signup', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
    const {
      password, email 
    } = request.body  
    reply.send({ message: `POST /signup route hit with password: ${password}, email: ${email}, user created` })
  })

  // PUBLIC, USER LOGOUT
  fastify.get( '/logout', async (request, reply) => {
    reply.send({ message: 'Logged out' })
  })
}

export default authRoutes