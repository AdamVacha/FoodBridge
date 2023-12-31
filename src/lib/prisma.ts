import { PrismaClient } from '@prisma/client';

import { PrismaLibSQL } from '@prisma/adapter-libsql';

import { createClient } from '@libsql/client';

// Create a new instance of the libSQL database client

const libsql = createClient({
	// @ts-expect-error

	url: process.env.DATABASE_URL,

	authToken: process.env.TURSO_AUTH_TOKEN
});

// Create a Prisma "adapter" for libSQL
console.log(process.env.DATABASE_URL);
const adapter = new PrismaLibSQL(libsql);

// Pass the adapter option to the Prisma Client instance

const prisma = new PrismaClient({ adapter });

export default prisma;
