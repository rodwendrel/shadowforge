"use client";
import Navbar from "@/components/shared/nav/Navbar";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 p-4">{props.children}</div>
    </div>
  );
}
