# FoodBridge

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Prisma ORM + Turso Setup

```URL
https://www.prisma.io/blog/prisma-turso-ea-support-rXGd_Tmy3UXX
```

```bash
npm install

curl -sSfL https://get.tur.so/install.sh | bash
```

Restart IDE

```bash
turso db create turso-prisma

turso db tokens create turso-prisma

turso db list

```

update .env w/ TURSO_AUTH_TOKEN & DATABASE_URL

```bash
npm install prisma

npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > migration.sql

npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > migration.sql

npm install @prisma/client@latest

npm install @prisma/adapter-libsql

npm install @libsql/client
```

## Auth Setup

```
https://authjs.dev/reference/sveltekit
```
