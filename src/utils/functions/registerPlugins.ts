import fastifyView from '@fastify/view'
import fastifyStatic from '@fastify/static'
import ejs from 'ejs'
import path from 'path'
import { getRootDir } from './getRootDir'
import { FastifyInstance } from 'fastify'
import fastifyCookie, { FastifyCookieOptions } from '@fastify/cookie'
import i18nextConfigs from '../../lib/i18next/i18nextConfigs'
import i18nextMiddleware from 'i18next-http-middleware'
// import fastifyMongodb from '@fastify/mongodb';

async function registerPlugins( fastify: FastifyInstance ) {
  const root = getRootDir()  
  const i18nextInstance = i18nextConfigs()

  // SERVE VIEWS
  await fastify.register( fastifyView, {
    engine: { ejs: ejs },
    root: path.join( root, 'src', 'client' ),
    layout: 'partials/layouts/layout.ejs',
    options: { cache: false }
  } )
  
  // SERVE STATIC FILES (E.G. STYLE)
  await fastify.register(fastifyStatic, {
    root: path.join(root, 'dist'),
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

  /*await fastify.register(fastifyMongodb, {
    // force to close the mongodb connection when app stopped
    forceClose: true,
    url: process.env.MONGO_URI,
    name: 'MONGODB_CONNECTION_1',
    connectTimeoutMS: 5000,
    database: 'your_database_name',
    // maximum number of connections that are currently in the process of being established
    maxConnecting: 5,
    // maximum number of established and idle connections that are kept in the connection pool
    maxPoolSize: 20,
    ssl: true,
    // how often the driver checks that the connection is still alive
    heartbeatFrequencyMS: 5000,
  })*/
}

export default registerPlugins