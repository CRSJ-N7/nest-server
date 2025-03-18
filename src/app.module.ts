import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './cats/logger.middleware';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';

@Module({
  providers: [CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
