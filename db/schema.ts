import { serial, pgTableCreator, varchar, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const pgTable = pgTableCreator((name) => `${name}`);

export const prelaunchInfo = pgTable("prelaunch_info", {
  id: serial("id").primaryKey(),
  fname: varchar("fname", { length: 255 }).notNull(),
  lname: varchar("lname", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  primaryRole: varchar("primary_role", { length: 255 }).notNull(),
  tier: varchar("tier", { length: 255 }).notNull(),
  timestamp: text("timestamp").notNull(),
});

export const userInfo = pgTable("user_info", {
  id: serial("id").primaryKey(),
  fname: varchar("fname", { length: 255 }).notNull(),
  lname: varchar("lname", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  age: varchar("age", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  state: varchar("state", { length: 255 }).notNull(),
  userName: varchar("user_name", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  bio: text("bio").notNull(),
  primaryRole: varchar("primary_role", { length: 255 }).notNull(),
  skills: text("skills").notNull().$type<string[]>().default(sql`(json_array())`),
  goals: text("goals").notNull().$type<string[]>().default(sql`(json_array())`),
  profilePic: varchar("profile_pic", { length: 255 }).notNull(),
  projects: text("projects").notNull().$type<string[]>().default(sql`(json_array())`),
  studios: text("studios").notNull().$type<string[]>().default(sql`(json_array())`),
  userId: varchar("user_id", { length: 255 }).notNull(),
});