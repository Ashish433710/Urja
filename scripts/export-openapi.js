// Writes openapi.json from the live route schemas, so the spec never drifts from the code.
import { writeFile } from 'node:fs/promises';
import { buildApp } from '../src/server.js';
import { PortalClient } from '../src/portal-client/index.js';

const app = await buildApp({ portal: new PortalClient({}) });
await app.ready();
await writeFile('openapi.json', JSON.stringify(app.swagger(), null, 2) + '\n');
await app.close();
console.log('Wrote openapi.json');
