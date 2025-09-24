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
import { useRouter } from "next/router";

interface LoginProps {
  onSwitchToRegister: () => void;
  onSwitchToForgotPassword: () => void;
}

export function Login({ onSwitchToRegister, onSwitchToForgotPassword }: LoginProps) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email || !password) {
      alert("Preencha email e senha!");
      return;
    }

   
    router.push("/principal");
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
                <Button
                  variant="link"
                  type="button"
                  onClick={onSwitchToForgotPassword}
                >
                  Esqueci minha senha
                </Button>
              </div>
              <Button
                type="submit"
                className="w-full"
                onClick={() => router.push("/principal")}
              >
                Entrar
              </Button>
              <Button
                variant="secondary"
                className="w-full"
                type="button"
                onClick={onSwitchToRegister}
              >
                Cadastre-se
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
