# Urja Meter API

> One-paragraph summary: what this is and the one-line architecture idea.
> (Fill in last, but write it for a reader with zero context.)

## What I built and how it's structured
- `src/portal-client/`: the only code that knows how the portal works.
- `src/api/`: clean routes and schemas.
- `src/server.js`: app wiring, error handling, docs.
- Link to **[PROTOCOL.md](PROTOCOL.md)** and **[openapi.json](openapi.json)**.

## Install, configure, run
```bash
npm install
cp .env.example .env   # add portal credentials
npm run dev            # http://localhost:3000, docs at /docs
npm test
npm run openapi        # regenerates openapi.json
```
Requires Node 20+.

## Sample request
```bash
curl http://localhost:3000/v1/meters?limit=5
```
(Paste a real response here.)

## Assumptions
## Design decisions and trade-offs
(See also [docs/decisions.md](docs/decisions.md).)
## What I intentionally skipped, and why
## What I'd improve with more time

## Reflection
See [REFLECTION.md](REFLECTION.md).
