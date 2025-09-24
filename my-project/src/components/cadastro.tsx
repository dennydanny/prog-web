import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PasswordInput } from "@/components/password-input";
interface CadastroProps {
  onSwitchToLogin: () => void;
}

export default function Cadastro({ onSwitchToLogin }: CadastroProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    alert("Conta criada com sucesso!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>
            Insira seu email e senha para criar sua conta.
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
                required
              />
            </div>
            <PasswordInput
              id="password"
              label="Senha"
              value={password}
              onChange={setPassword}
              required
            />
            <PasswordInput
              id="confirm-password"
              label="Confirmar Senha"
              value={confirm}
              onChange={setConfirm}
              required
            />
            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}

            <CardFooter className="flex-col gap-2 px-0">
              <div className="flex flex-col w-full gap-4">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={onSwitchToLogin}
                >
                  Já tenho conta
                </Button>
                <Button type="submit">
                  Criar conta
                </Button>
              </div>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
