"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useUser from "@/data/hooks/useUser";
import { register } from "module";

export default function RegisterForm() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useUser();

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    signup(user, email, password);
    console.log("enviado!");
  };

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
      <div className="flex flex-col sm:w-1/5">
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5 text-black"
        >
          <input
            type="text"
            placeholder="Usuário"
            className="p-2 rounded"
            onChange={(e) => setUser(e.target.value)}
          />
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
          <button className="button-primary" type="submit">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}
