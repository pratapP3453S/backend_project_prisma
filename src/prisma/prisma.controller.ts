import { Controller, Post } from "@nestjs/common";
import { PostgresService } from "./postgres.service";
// import { MongoService } from "./mongodb.service";

@Controller('user')
export class PostgresController {
  constructor(
    private readonly pgService: PostgresService,
    // private readonly mongoService: MongoService,
  ) {}

  @Post('create-data')
  async createData() {
    // Save relational data to Postgres
    const user = await this.pgService.postgresUser.create({ data: { email: 'test@example.com', name: 'Pratap' } });

    // Save non-relational logs to MongoDB
    // await this.mongoService.user.create({ 
    //   data: { email: 'test@example.com' } 
    // });

    return { user, status: 'Logged to Postgres' };
  }
}