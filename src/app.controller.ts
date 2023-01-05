import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 실제 데이터 정의 해주는곳

@Controller("ha") // url 들어감
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("get") // Controller url base 로 다음 경로 설정 
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("get2")
  test():{a:number} {
    return {a: this.appService.test()};
  }
}
