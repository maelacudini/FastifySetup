import fastifyView from '@fastify/view'
import fastifyStatic from '@fastify/static'
import ejs from 'ejs'
import path from 'path'
import { FastifyInstance } from 'fastify'
import fastifyCookie, { FastifyCookieOptions } from '@fastify/cookie'
import i18nextConfigs from '../../lib/i18next/i18nextConfigs'
import i18nextMiddleware from 'i18next-http-middleware'
import jwtPlugin from '../../plugins/jwt.plugin'
import { getRootDir } from './paths'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { PORT } from '../constants/constants'
import fastifySwagger from '@fastify/swagger'

const registerPlugins = async ( fastify: FastifyInstance ) => {
  const i18nextInstance = i18nextConfigs()    

  // SERVE VIEWS
  await fastify.register(fastifyView, {
    engine: { ejs: ejs },
    root: path.join(getRootDir(), 'public', 'client'),
    layout: 'partials/layouts/layout.ejs',
    options: { cache: false }
  } )
  
  // SERVE STATIC FILES (E.G. STYLE)
  await fastify.register(fastifyStatic, {
    root: path.join(getRootDir(), 'dist'),
    prefix: '/dist/',
  })

  // USE COOKIES
  await fastify.register(fastifyCookie, {
    secret: "my-secret",
    hook: 'onRequest',
    parseOptions: {} 
  } as FastifyCookieOptions)

  // USE TRANSLATION
  await fastify.register(i18nextMiddleware.plugin, { i18next: i18nextInstance })

  // USE JWT, check out https://www.youtube.com/watch?v=FVJYlRvQom8
  await fastify.register(jwtPlugin)

  // REGISTER SWAGGER
  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Fastify Setup APIs',
        description: 'API documentation for Fastify Setup project',
        version: '1.0.0',
      },
      host: process.env.NODE_ENV === 'production'
        ? process.env.PROD_HOST : `localhost:${PORT}`,
      schemes: process.env.NODE_ENV === 'production' ? ['https'] : ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })
  
  // REGISTER SWAGGER UI
  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs', // the docs will be available at http://localhost:3000/docs
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    },
    logo: undefined,
    staticCSP: true,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject
    },
    transformSpecificationClone: true
  })
}

export default registerPlugins