"use client";
import Navlink from "./NavLink";
import { IconHome, IconLogout2 } from "@tabler/icons-react";
import Button from "../Button";
import useUser from "@/data/hooks/useUser";

export default function Navbar() {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex">
      <aside className="w-72 h-full bg-background-secondary">
        <nav className="flex flex-col justify-between h-full items-center">
          <ul className="flex flex-col text-white mt-10 p-2 w-full  gap-8">
            <Navlink icon={<IconHome stroke="1.5" />} href="/home">
              Home
            </Navlink>
          </ul>
          <div className="flex justify-center items-center w-full mb-5">
          <Button
              icon={<IconLogout2 size="20" />}
              variant="button-opaque"
              action={handleLogout}
            >
              Sair
            </Button>
          </div>
        </nav>
      </aside>
    </div>
  );
}
