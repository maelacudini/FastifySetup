export const getUserSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        username: { type: 'string' }, 
        id: { type: 'number' } 
      }
    }
  }
}