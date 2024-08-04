"use client";
import { useState, useEffect } from "react";
import useUser from "@/data/hooks/useUser";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUser();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
      <form className="flex flex-col sm:w-1/5" onSubmit={handleLogin}>
        <div className="flex flex-col gap-5 text-black">
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-2 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button-primary">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
