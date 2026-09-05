import { integer, pgTableCreator, varchar, timestamp } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `${name}`);

export const prelaunchInfo = pgTable("prelaunch_info", {
  id: integer("id").primaryKey(),
  fname: varchar("fname", { length: 255 }).notNull(),
  lname: varchar("lname", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  primaryRole: varchar("primary_role", { length: 255 }).notNull(),
  tier: varchar("tier", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});