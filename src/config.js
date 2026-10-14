// Single place where environment is read. Fail loudly on missing required values.
export function loadConfig(env = process.env) {
  return {
    port: Number(env.PORT ?? 3000),
    portal: {
      baseUrl: env.PORTAL_BASE_URL ?? 'https://urja-ops.flockenergy.tech',
      username: env.PORTAL_USERNAME ?? '',
      password: env.PORTAL_PASSWORD ?? '',
    },
  };
}
