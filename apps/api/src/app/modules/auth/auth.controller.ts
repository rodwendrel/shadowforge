import {  Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {User } from '@shadowforge/core'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post('signup')
      async signup(@Body() user: User) {
        return this.authService.signup(user)
    }

    @Post('login')
    async login(@Body () user: User) {
      return this.authService.login(user)
    }

    @Post('logout')
    async logout() {
      return this.authService.logout()
    }
}
