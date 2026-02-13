import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getWelcome() {
    return {
      message: 'Welcome to Backend',
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
