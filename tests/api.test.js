import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/server.js';
import { PortalClient } from '../src/portal-client/index.js';

test('GET /health returns ok', async () => {
  const app = await buildApp({ portal: new PortalClient({}) });
  const res = await app.inject({ method: 'GET', url: '/health' });
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.json(), { status: 'ok' });
});

test('errors use the consistent error shape', async () => {
  const app = await buildApp({ portal: new PortalClient({}) });
  const res = await app.inject({ method: 'GET', url: '/v1/meters' });
  assert.equal(res.statusCode, 501);
  assert.equal(res.json().error.code, 'not_implemented');
});

// TODO: once the client is real, test its PARSING with saved portal responses as fixtures
// (that is where the portal's quirks live, so that is where tests pay off most).
