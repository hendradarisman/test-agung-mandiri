import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoresModule } from './scores/scores.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import * as fs from 'fs';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'yourusername',
      password: process.env.DATABASE_PASSWORD || 'yourpassword',
      database: process.env.DATABASE_NAME || 'game',
      autoLoadEntities: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      
    }),
    ThrottlerModule.forRoot({  ttl: 10, interval: 60 }), // this function for rate limiter
    ScoresModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
    consumer.apply(morgan('combined', { stream: logStream })).forRoutes('*');
  }

}
