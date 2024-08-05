import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DbModule } from './db/db.module';
import { WorldModule } from './modules/world/world.module';

@Module({
  imports: [AuthModule, DbModule, WorldModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
