import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthController} from './auth.controller';
import { PrismaService } from 'src/app/db/prisma.service';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

@Module({
  providers: [AuthService, PrismaService, SupabaseService],
  controllers: [AuthController]
})
export class AuthModule {}
