import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

// 정리 작업인곳, 다른 곳의 임포트 여기서 함
@Module({
  imports: [
    ConfigModule.forRoot({ // modul 어디에서도 config 사용가능
      isGlobal: true,
    }),
    AuthModule, 
    UserModule, 
    TodoModule, 
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
