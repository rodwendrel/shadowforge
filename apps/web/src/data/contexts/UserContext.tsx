import { createContext, useState } from "react";
import { User } from "@shadowforge/core";
import { useRouter } from "next/navigation";
import { AuthService } from "../services/authService";
import useLocalStorage from "../hooks/useLocalStorage";

export interface UserContextProps {
  // loading?: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout(): any;
  signup: (email: string, password: string, user: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps>({} as any);

export function UserProvider({ children }: any) {
  const { get, set, remove } = useLocalStorage();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const authService = new AuthService();

  async function signup(user: string, email: string, password: string) {
    const newUser = {
      email,
      password,
      user,
    };

    try {
      const data = await authService.signup(newUser);
      setUser(data);
      console.log("Cadastrado com sucesso!" + newUser);
    } catch (error) {
      console.error("Erro" + error);
    }
  }

  async function login(email: string, password: string) {
    await authService.login(email, password);
    router.push("/home");
  }

  function logout() {
    try {
      authService.logout();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
