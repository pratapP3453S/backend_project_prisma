import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PostgresClient } from '@prisma/postgres-client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresService extends PostgresClient implements OnModuleInit {
  private pool: Pool;
  constructor(
    private config: ConfigService
  ) {
    const connectionString = config.get<string>('POSTGRES_DATABASE_URL')
    const pool = new Pool({ connectionString, max: 10, });
    
    const adapter = new PrismaPg(pool);

    super({ adapter });

    this.pool = pool;
  }
  async onModuleInit() {
    await this.$connect();
    console.log("Postgres Database is connected successfully!")
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
  }
}