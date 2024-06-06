import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from '../entity/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoresRepository: Repository<Score>,
  ) {}

  async create(score: Score): Promise<Score> {
    return this.scoresRepository.save(score);
  }

  async findAll(): Promise<Score[]> {
    return this.scoresRepository.find({
      order: { score: 'DESC' },
      take: 10,
    });
  }
}
