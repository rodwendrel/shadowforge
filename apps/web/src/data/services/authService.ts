import { User } from '@shadowforge/core';
import api from './axiosService';

export class AuthService {
  async signup({ user, email, password }: User): Promise<User> {
    try{
      const { data } = await api.post(`auth/signup`, {
        user: user,
        email: email,
        password: password,
      }) 

     return {
        user,
        password,
        email: data.user?.email || email,
      }

    } catch (error) {
      throw error
    }
  }

  async login(email: string, password: string) {
    try {
      const { data } = await api.post('auth/login', {
        email,
        password
      })

      return {
        email: data.user?.email || email,
        password,
        user: data.user?.user || 'user',
      }
      
    } catch (error) {
      throw error
    }
  }

  async logout() {
    try {
      await api.post('auth/logout');
    } catch (error) {
      console.error("Erro ao fazer logout", error);
      throw error;
    }
  }

}