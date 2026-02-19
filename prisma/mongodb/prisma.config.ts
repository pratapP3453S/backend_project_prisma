import 'dotenv/config'
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: '.',
  migrations: {
    path: './migrations',
  },
  datasource: {
    url: env('MONGO_DATABASE_URL'),
  },
});