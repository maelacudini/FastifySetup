/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { FastifyInstance, FastifyRequest } from 'fastify'
import { CreateUserBody, UpdateUserBody } from './types'
import { getUserOpts } from '../utils/schemas/user.schemas'

async function userRoutes (fastify: FastifyInstance) {

  // GET, PUBLIC
  fastify.get('/user/:id', getUserOpts)

  // POST, PUBLIC
  fastify.post('/user', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
    const {
      username, email 
    } = request.body
    fastify.log.info(`POST /user route hit with username: ${username}, email: ${email}`)

    return { message: `User ${username} created successfully.` }
  })

  // PUT, PUBLIC
  fastify.put('/user/:id', async (request: FastifyRequest<{ Params: { id: string }; Body: UpdateUserBody }>, reply) => {
    const { id } = request.params
    const { username } = request.body
    fastify.log.info(`PUT /user/${id} route hit, updating email to: ${username}`)

    return { message: `User with ID ${id} updated.` }
  })

  // DELETE, PUBLIC
  fastify.delete('/user/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
    const { id } = request.params
    fastify.log.info(`DELETE /user/${id} route hit, attempting to delete user.`)

    return { message: `User with ID ${id} deleted.` }
  })
}

export default userRoutes