import { createContext, useState } from "react";
import { User } from "@shadowforge/core";
import { useRouter } from "next/navigation";
import { AuthService } from "@shadowforge/core/src/data/services/authService";
import useLocalStorage from "../hooks/useLocalStorage";
import useToast from "@/data/hooks/useToast";
import getMessage from "@shadowforge/core/src/data/utils/toastUtils";

export interface UserContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout(): any;
  signup: (email: string, password: string, user: string) => Promise<void>;
}
const UserContext = createContext<UserContextProps>({} as any);

export function UserProvider({ children }: any) {
  const { set, remove } = useLocalStorage();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const authService = new AuthService();
  const { showToast } = useToast();

  /* Criar conta */
  async function signup(user: string, email: string, password: string) {
    const newUser = {
      email,
      password,
      user,
    };

    try {
      await authService.signup(newUser);
      router.push("/login");
      console.log("Ctrado com sucesso!" + newUser);
    } catch (error: any) {
      const message = getMessage(error);
      showToast(message, "error");
    }
  }

  /* Login */
  async function login(email: string, password: string) {
    try {
      const response = await authService.login(email, password);
      set("user", response);
      setUser(user);
      router.push("/home");
    } catch(error: any) {
      const message = getMessage(error);
      showToast(message, "error");
    }
  }

  /* Logout */
  function logout() {
    try {
      authService.logout();
      remove("user");
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
