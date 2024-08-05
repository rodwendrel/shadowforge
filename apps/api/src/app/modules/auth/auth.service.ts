import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, ResponseUser } from '@shadowforge/core';
import { PrismaService } from 'src/app/db/prisma.service';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private supabase: SupabaseService
  ) {}

      /* Criação de conta */
      async signup({ user, email, password }: User): Promise<ResponseUser> {
        let data: any; 

        try {
          // Criar conta no Supabase
          const signupResult = await this.supabase.getSignup(
            email,
            password,
            {
              data: { displayName: user }
            }
          );
          data = signupResult.data; 
          const error = signupResult.error;
      
          if (error) {
            console.log("Supabase signup error:", error);
            throw new HttpException({
              status: error.status,
              error: 'Supabase signup error',
              message: error.message,
            }, HttpStatus.BAD_REQUEST);
          }

          // Cria usuário no Prisma
          const prismaCreate = await this.prisma.user.create({
            data: {
              id: data.user.id,
            },
          });
      
          return {
            id: prismaCreate.id,
            user,
            email: data.user?.email || email,
          };
        } catch (prismaError) {
          console.error('Prisma user creation error:', prismaError.response);
      
          // Deletar usuário do prisma caso ocorra erro
          if (data?.user?.id) {
            const { error: deleteError } = await this.supabase.getDelete(data.user.id);
            if (deleteError) {
              console.error('Failed to delete user from Supabase:', deleteError);
            }
          }
      
          throw new HttpException({
            status: prismaError.response.status,
            error: 'Prisma user creation error',
            message: prismaError.response.message,
          }, HttpStatus.UNPROCESSABLE_ENTITY);
        }
      }

  /* Login de conta */
  async login({ email, password }: User) {
    const { data, error } = await this.supabase.getLogin(email, password);

    if(error) {
      console.log("error", error)
      throw new HttpException({
        status: error.status,
        error: 'Supabase login error',
        message: error.message
      }, HttpStatus.BAD_REQUEST);
    }

    return {
      user: data.user?.user_metadata.displayName,
      email: data.user?.email,
      token: data.session?.access_token,
    }
  }

  async logout() {
      const { error } = await this.supabase.getLogout();
      if (error) {
        console.error("Error logging out", error);
        throw new HttpException({
          status: error.status,
          error: 'Supabase login error',
          message: error.message
        }, HttpStatus.BAD_REQUEST);
      }
      console.log('Logout successful');

  }
}
