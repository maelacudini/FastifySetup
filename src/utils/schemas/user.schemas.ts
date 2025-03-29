import { getUserController } from "../../controllers/user.controller"

export const getUserOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          username: { type: 'string' }, 
          id: { type: 'number' } 
        }
      }
    }
  },
  handler: getUserController
}