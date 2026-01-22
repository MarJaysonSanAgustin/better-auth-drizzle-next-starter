import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/auth-schema"
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  trustedOrigins() {
    return ["http://localhost:3000", "http://192.168.1.5:3000"]
  },
  advanced: {
    disableOriginCheck: true,
    cookiePrefix: "better-auth-drizzle",
    useSecureCookies: true
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 300, // 5 minutes
      refreshCache: {
        updateAge: 60 // Refresh when 60 seconds remain before expiry
      }
    }
  },
  plugins: [nextCookies()]
});