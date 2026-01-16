"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schemas/auth.schema";
import { loginAction } from "@/actions/auth";
import { Input } from "../ui/Input";
import { Wallet, Loader2 } from "lucide-react";

export default function Login() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginSchema) => {
    setServerError(null);

    startTransition(async () => {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await loginAction(formData);

      if (response?.error) {
        setServerError(response.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background animate-in fade-in duration-500">
      <div className="flex flex-col items-center gap-4 mb-8 text-center">
        <div className="p-4 bg-primary/10 rounded-full">
          <Wallet className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Bem-vindo de volta
        </h1>
      </div>

      <div className="w-full max-w-sm bg-card p-6 rounded-2xl border border-border shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="email"
            label="E-mail"
            placeholder="exemplo@email.com"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            id="password"
            label="Senha"
            placeholder="••••••"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          {serverError && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center justify-center">
              ⚠️ {serverError}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-12 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Validando...
              </>
            ) : (
              "Acessar Conta"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Não tem conta?{" "}
          <a
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            Crie agora
          </a>
        </p>
      </div>
    </div>
  );
}
