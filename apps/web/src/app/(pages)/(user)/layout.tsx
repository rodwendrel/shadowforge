"use client";
import { UserProvider } from "@/data/contexts/UserContext";


export default function layout({ children }: any) {
  return <UserProvider>{children}</UserProvider>;
}
