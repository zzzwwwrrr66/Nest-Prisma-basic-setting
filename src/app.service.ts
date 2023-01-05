import { Injectable } from '@nestjs/common';

// 실제 로직이 들어가는곳 

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  test():number {
    return 1 + 1
  }
}
