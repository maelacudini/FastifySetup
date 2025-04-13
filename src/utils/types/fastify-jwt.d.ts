import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { email: string; role: 'admin' | 'user' }
    user: { email: string; role: 'admin' | 'user' }
  }
}
