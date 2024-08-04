import { Injectable } from '@nestjs/common';
import { User, ResponseUser } from '@shadowforge/core';
import { createClient } from '@supabase/supabase-js'
import { PrismaService } from 'src/app/db/prisma.service';
import * as dotenv from 'dotenv'

dotenv.config();

const supabaseURL = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseURL, supabaseKey)

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup({user, email, password}: User): Promise<ResponseUser> {

    const { data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { displayName: user }
      }
    })

    if(error) {
      console.log("error", error)
      throw error
    }

    try {
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
      console.error('Prisma user creation error:', prismaError);

      const { error: deleteError } = await supabase.auth.admin.deleteUser(data.user.id);
      if (deleteError) {
        console.error('Failed to delete user from Supabase:', deleteError);
      }

      throw prismaError;
    }
  }

  async login({ email, password }: User) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(error) {
      console.log("error", error)
      throw error
    }

    return {
      user: data.user?.user_metadata.displayName,
      email: data.user?.email,
      token: data.session?.access_token,
    }
  }

  async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error logging out", error);
        throw error;
      }
      console.log('Logout successful');
    } catch (error) {
      console.error("Error during logout", error);
      throw error;
    }
  }
}
