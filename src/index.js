import { loadConfig } from './config.js';
import { PortalClient } from './portal-client/index.js';
import { buildApp } from './server.js';

const config = loadConfig();
const app = await buildApp({ portal: new PortalClient(config.portal), logger: true });
await app.listen({ port: config.port, host: '0.0.0.0' });
