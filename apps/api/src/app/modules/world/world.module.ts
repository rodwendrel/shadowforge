import { Module } from '@nestjs/common';
import { WorldService } from './world.service';
import { WorldController } from './world.controller';
import { PrismaService } from 'src/app/db/prisma.service';

@Module({
  providers: [WorldService, PrismaService],
  controllers: [WorldController]
})
export class WorldModule {}
