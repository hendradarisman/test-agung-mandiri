import { Module } from '@nestjs/common';
import { ScoresService } from './service/scores.service';
import { ScoresController } from './controller/scores.controller';

@Module({
  providers: [ScoresService],
  controllers: [ScoresController]
})
export class ScoresModule {}
