import { NotImplementedError } from '../errors.js';

/**
 * PortalClient: the ONLY module that knows how the portal really works.
 * Everything portal-specific (login flow, tokens, headers, parsing, retries,
 * session refresh, quirks) belongs here. It must return clean, normalised
 * objects so the API layer never sees portal oddities.
 *
 * TODO (yours, after investigating): implement these and record what you
 * learned in PROTOCOL.md.
 */
export class PortalClient {
  constructor(config) {
    this.config = config;
  }

  async listMeters(/* { limit, cursor } */) {
    throw new NotImplementedError('listMeters');
  }

  async getMeter(/* id */) {
    throw new NotImplementedError('getMeter');
  }

  async getConsumption(/* id, { from, to } */) {
    throw new NotImplementedError('getConsumption');
  }
}
