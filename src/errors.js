// Errors the portal client may throw. The API layer maps them to HTTP responses,
// so route code never needs to know how the portal fails.
export class AppError extends Error {
  constructor(message, { status = 500, code = 'internal_error' } = {}) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
export class NotImplementedError extends AppError {
  constructor(what) { super(`${what} is not implemented yet`, { status: 501, code: 'not_implemented' }); }
}
export class NotFoundError extends AppError {
  constructor(what) { super(`${what} not found`, { status: 404, code: 'not_found' }); }
}
// The portal itself failed or is unreachable: from our consumer's view that is a bad gateway.
export class PortalUnavailableError extends AppError {
  constructor(message = 'Upstream portal unavailable') { super(message, { status: 502, code: 'portal_unavailable' }); }
}
export class PortalAuthError extends AppError {
  constructor(message = 'Could not authenticate with the portal') { super(message, { status: 502, code: 'portal_auth_failed' }); }
}
