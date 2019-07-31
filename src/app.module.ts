import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';

const options = {
  user: 'geek',
  pass: 'code',
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-crud', options),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
