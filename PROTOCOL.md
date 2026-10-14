# How the Urja Meter Ops portal works

Written from what I observed, not from documentation. Add dates/evidence where useful.

## 1. Overview
What the portal is, and what data it holds (meters, network position, consumption...).

## 2. Authentication and sessions
- Login flow (requests, fields, redirects)
- What proves I'm logged in (cookie / token / header)
- Lifetime, expiry, and what expiry looks like
- Any extra per-request requirements

## 3. Data access paths
For each: URL, method, parameters, response format, pagination, example.
- Path A:
- Path B (bulk/export? other?):

## 4. Data model
Fields, types, units, identifiers, relationships (hierarchy, location).

## 5. Quirks and surprises
Inconsistent data, odd formats, rate limits, flaky behaviour, anything unexpected.

## 6. Open questions
What I couldn't determine.
