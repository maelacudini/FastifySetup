import { FastifyError, FastifyReply, FastifyRequest } from "fastify"
import { getUserService } from "../services/user.services"
import { UserType } from "../utils/types/controllers.types"

const getUserController = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  // Handle incoming HTTP requests, extract relevant data, delegate the processing to a service, format and send the HTTP response

  try {
    const { id } = request.params
    const userData: UserType = await getUserService(id)
    reply.header("Content-Type", "text/html").send(`<p>Username: ${userData.username}</p>`)
  } catch (error) {
    reply.status(404).send({ error: (error as FastifyError).message })
  }
}

export { getUserController }