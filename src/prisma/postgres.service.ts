import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PostgresClient } from '@prisma/postgres-client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PostgresService extends PostgresClient implements OnModuleInit {
  constructor() {
    const pool = new Pool({ connectionString: process.env.POSTGRES_DATABASE_URL });
    
    const adapter = new PrismaPg(pool);

    super({ adapter });
  }
  async onModuleInit() {
    await this.$connect();
    console.log("Postgres Database is connected successfully!")
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}