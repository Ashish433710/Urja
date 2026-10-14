import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import routes from './api/routes.js';
import { AppError } from './errors.js';

export async function buildApp({ portal, logger = false } = {}) {
  const app = Fastify({ logger });

  await app.register(swagger, {
    openapi: {
      info: { title: 'Urja Meter API', version: '0.1.0', description: 'Clean API over the Urja Meter Ops portal' },
    },
  });
  await app.register(swaggerUi, { routePrefix: '/docs' });

  // One consistent error shape for every failure.
  app.setErrorHandler((err, req, reply) => {
    if (err instanceof AppError) {
      return reply.status(err.status).send({ error: { code: err.code, message: err.message } });
    }
    if (err.validation) {
      return reply.status(400).send({ error: { code: 'bad_request', message: err.message } });
    }
    req.log.error(err);
    return reply.status(500).send({ error: { code: 'internal_error', message: 'Unexpected error' } });
  });

  await app.register(routes, { portal });
  return app;
}
