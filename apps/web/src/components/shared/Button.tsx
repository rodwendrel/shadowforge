"use client";
import { ReactNode } from "react";

interface ButtonProps {
  action?: () => void;
  icon: ReactNode;
  children: ReactNode;
  variant: string;
}

export default function Button({
  action,
  icon,
  children,
  variant,
}: ButtonProps) {
  return (
    <button className={variant} onClick={action}>
      <span className="flex justify-center items-center gap-2">
        {icon}
        <span className="font-medium">{children}</span>
      </span>
    </button>
  );
}
