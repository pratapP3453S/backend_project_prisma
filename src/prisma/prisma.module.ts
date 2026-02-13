import { Global, Module } from '@nestjs/common';
// import { MongoService } from './mongodb.service';
import { PostgresService } from './postgres.service';
import { PostgresController } from './prisma.controller';

@Global()
@Module({
  controllers: [PostgresController],
  providers: [PostgresService],
  exports: [PostgresService],
})
export class PrismaModule {}
