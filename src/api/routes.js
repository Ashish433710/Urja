// Clean API surface. Routes only talk to the portal client and return normalised data.
const errorSchema = {
  type: 'object',
  properties: {
    error: {
      type: 'object',
      properties: { code: { type: 'string' }, message: { type: 'string' } },
    },
  },
};

export default async function routes(app, { portal }) {
  app.get('/health', {
    schema: { tags: ['system'], summary: 'Liveness check', response: { 200: { type: 'object', properties: { status: { type: 'string' } } } } },
  }, async () => ({ status: 'ok' }));

  // Example of the pattern to copy for each endpoint: schema first, thin handler.
  app.get('/v1/meters', {
    schema: {
      tags: ['meters'],
      summary: 'List meters (placeholder: define your own response model)',
      querystring: { type: 'object', properties: { limit: { type: 'integer', minimum: 1, maximum: 200, default: 50 } } },
      response: { 501: errorSchema, 502: errorSchema },
    },
  }, async (req) => portal.listMeters({ limit: req.query.limit }));
}
