import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import ejs from 'ejs';
import path, { join } from 'path';
import { getRootDir } from './getRootDir';
import { FastifyInstance } from 'fastify';

async function registerPlugins( fastify: FastifyInstance ) {
  const root = getRootDir();  

  fastify.register( fastifyView, {
    engine: { ejs: ejs },
    root: path.join( root, 'src', 'client' ),
  } );

  fastify.register(fastifyStatic, {
    root: path.join(root, 'dist'),
    prefix: '/dist/',
  });
}

export default registerPlugins;