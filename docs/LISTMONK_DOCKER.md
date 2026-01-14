**Listmonk Docker Compose**

This file shows a minimal, recommended Docker Compose setup for running listmonk together with a Postgres database.

- Compose file: `docker-compose.listmonk.yml`
- Example env: `.env.listmonk`

Quick start

1. No env-file required: defaults are in `docker-compose.yml`. Edit the compose file directly to change passwords or ports.

2. Start the services:

```bash
docker compose -f docker-compose.yml up -d
```

3. Open the listmonk UI in your browser (host port `9001` by default):

```
http://localhost:9001
```

Notes & references

- Official listmonk docs and downloads: https://listmonk.app/#download
- The Compose file exposes the listmonk UI on host port `9001` by default and Postgres on `5433` (these defaults can be overridden via `.env.listmonk` using `LISTMONK_HOST_PORT` and `POSTGRES_HOST_PORT`).
- The Compose mounts `listmonk-data` and `listmonk-db-data` volumes for persistence.
- The example `.env.listmonk` pre-defines an admin user. Check listmonk docs for details on pre-seeding admin accounts or running migrations if necessary.

If you want me to also add an automated migration step or a small script to create the initial admin account after the DB is ready, say so and I will add it.
