import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const globalForDb = global as unknown as { pool: Pool };

const pool =
  globalForDb.pool ||
  new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

// Casting 'pool as any' satisfies the positional signature drizzle(client, config)
export const db = drizzle(pool as any, { schema } as any);
