/* eslint-disable no-unused-vars */
import * as i18next from "i18next"
import { FastifyReply } from 'fastify'

declare module 'fastify' {
  
  interface FastifyRequest {
    language: string;
    languages: string[];
    i18n: i18next.i18n;
    t: i18next.TFunction;
  }

 interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    hasRole: (role: 'admin' | 'user') => (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}