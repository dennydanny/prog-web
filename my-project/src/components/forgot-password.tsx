import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { PasswordInput } from "@/components/password-input";

interface ForgotPasswordProps {
  onSwitchToLogin: () => void;
}

export default function ForgotPassword({
  onSwitchToLogin,
}: ForgotPasswordProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    alert("Senha redefinida com sucesso!");
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Esqueceu sua senha?</CardTitle>
          <CardDescription>Insira sua nova senha abaixo.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <PasswordInput
              id="password"
              label="Nova senha"
              value={password}
              onChange={setPassword}
              required
            />

            <PasswordInput
              id="confirm-password"
              label="Confirmar senha"
              value={confirm}
              onChange={setConfirm}
              required
            />

            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}

            <CardFooter className="flex-col gap-2 px-0">
              <Button type="submit" className="w-full">
                Redefinir senha
              </Button>
              <Button
                variant="secondary"
                onClick={onSwitchToLogin}
                className="w-full"
              >
                <p className="text-sm">Voltar ao login</p>
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
