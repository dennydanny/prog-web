"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PasswordInput } from "./password-input";
import { useState } from "react";

export function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nSenha: ${password}`);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Tabela de Custos logo"
            width={48}
            height={48}
          />
          <CardTitle className="font-serif font-semibold text-3xl">
            Tabela de Custos
          </CardTitle>
          <CardDescription>
            Insira seu email e senha para acessar sua conta.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <PasswordInput
                id="password"
                label="Senha"
                value={password}
                onChange={setPassword}
                required
              />
            </div>
            <CardFooter className="flex-col gap-2 px-0">
              <div>
                <a className="text-sm underline-offset-4 hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
              <Button variant="secondary" className="w-full">
                Cadastre-se
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
