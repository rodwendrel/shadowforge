"use client";
import { UserProvider } from "@/data/contexts/UserContext";
import { SessionProvider } from "@/data/contexts/SessionContext";
import Page from "@/components/shared/Page";

export default function layout({ children }: any) {
  return (
    <UserProvider>
      <SessionProvider>
        <Page> {children} </Page>
      </SessionProvider>
    </UserProvider>
  );
}
