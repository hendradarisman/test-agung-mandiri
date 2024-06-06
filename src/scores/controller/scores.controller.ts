import { Controller, Get, Post, Body, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { ScoresService } from '../service/scores.service';
import { Score } from '../entity/score.entity';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../auth/roles.guard';
import { Roles } from '../../auth/roles.decorator';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user', 'admin')
  @Post()
  async create(@Body() score: Score, @Request() req) {
    if (!req.user.isAdmin && score.playerName !== req.user.username) {
      throw new UnauthorizedException();
    }
    return this.scoresService.create(score);
  }

  @Get('leaderboard')
  async findAll() {
    return this.scoresService.findAll();
  }
}
