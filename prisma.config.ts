import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use session (direct) URL for migrations, pooled for runtime
    url: process.env["DIRECT_URL"],
  },
});
