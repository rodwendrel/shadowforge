import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
