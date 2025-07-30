import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const identityProviderTable = sqliteTable("identity_provider", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  issuer_url: text().notNull(),
  client_id: text().notNull(),
  client_secret: text().notNull(),
  redirect_uri: text().notNull(),
  enabled: int().default(1),
  created_at: int({ mode: "timestamp" }),
});

export const session = sqliteTable("app_metadata", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  icon_url: text(),
  launch_url: text().notNull(),
  enabled: int().default(1),
  created_at: int({ mode: "timestamp" }),
});
