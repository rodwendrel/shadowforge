import { User } from '@shadowforge/core';
import api from '@shadowforge/core/src/data/services/axiosService';

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
        password: '',
        email: data.user?.email,
      }

    } catch (error: any) {
      const errorData = JSON.parse(error.data);
      console.error(errorData.data.message);
      throw  errorData.data.message;
    }
  }

  async login(email: string, password: string) {
    try {
      const { data } = await api.post('auth/login', {
        email,
        password
      })

      return {
       user: data.user,
       email: data.email,
       token: data.token
      
      }
      
    } catch (error: any) {
      const errorData = JSON.parse(error.data);
      console.error(errorData.data.message);
      throw  errorData.data.message;
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