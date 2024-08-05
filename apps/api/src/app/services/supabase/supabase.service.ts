import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class SupabaseService {
  private readonly supabase: SupabaseClient;

  constructor() {
    const supabaseURL = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY
    this.supabase = createClient(supabaseURL, supabaseKey)
  }

  getSignup(email: string, password: string, options?: object) {
    return this.supabase.auth.signUp({
      email: email,
      password: password,
      options: options
    })
  }

  getLogout() {
    return this.supabase.auth.signOut()
  }

  getLogin(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
  }

  getDelete(id: string) {
    console.log('delete success');
    return this.supabase.auth.admin.deleteUser(id)
  }
}
