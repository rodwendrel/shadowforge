"use client";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavlinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  action?: () => void;
}

export default function Navlink({ href, icon, children, action }: NavlinkProps) {
  const [selected, setSelected] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == href) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [pathname, href]);

  return (
    <li
      className={selected ? "link-primary" : "p-2 transition-all ease-in-out duration-100 hover:-translate-y-0.5"}
      onClick={action}
    >
      <Link href={href}>
        <span className="flex justify-center items-center gap-2">
          {icon}
          <span className="font-light">{children}</span>
        </span>
      </Link>
    </li>
  );
}
