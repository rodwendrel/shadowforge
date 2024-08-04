import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

export interface SessionContextProps {
  isAuthenticated: boolean;
}

const SessionContext = createContext<SessionContextProps>({} as any);

export function SessionProvider({ children }: any) {
  const { get } = useLocalStorage();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const user = get("user");
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Failed to get user:", error);
      router.push("/login");
    }
  }, [router, get]);

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;
