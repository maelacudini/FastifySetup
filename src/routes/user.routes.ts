 
 

import { FastifyInstance, FastifyRequest } from 'fastify'
import { UpdateUserBody } from './types'
import { getUserOpts } from '../utils/schemas/user.schemas'

async function userRoutes (fastify: FastifyInstance) {

  // PUBLIC, GET USER BY ID
  fastify.get('/user/:id', getUserOpts)

  // PUBLIC, UPDATE EXISTING USER
  fastify.put('/user/:id', async (request: FastifyRequest<{ Params: { id: string }; Body: UpdateUserBody }>, reply) => {
    const { id } = request.params
    const { username } = request.body
    fastify.log.info(`PUT /user/${id} route hit, updating email to: ${username}`)

    reply.send({ message: `User with ID ${id} updated.` })
  })

  // PUBLIC, DELETE USER
  fastify.delete('/user/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
    const { id } = request.params
    fastify.log.info(`DELETE /user/${id} route hit, attempting to delete user.`)

    reply.send({ message: `User with ID ${id} deleted.` })
  })
}

export default userRoutes