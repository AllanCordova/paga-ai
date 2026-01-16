"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/schemas/auth.schema";
import { signUpAction } from "@/actions/auth";
import { Input } from "@/components/ui/Input";
import { Wallet, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Register() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: RegisterSchema) => {
    setServerError(null);
    startTransition(async () => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await signUpAction(formData);

      if (response?.error) {
        setServerError(response.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background animate-in fade-in duration-500">
      {/* Botão Voltar */}
      <div className="absolute top-6 left-6">
        <Link
          href="/login"
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4 mb-8 text-center">
        <div className="p-4 bg-primary/10 rounded-full">
          <Wallet className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Crie sua conta</h1>
        <p className="text-sm text-muted-foreground">
          Comece a organizar suas despesas hoje.
        </p>
      </div>

      <div className="w-full max-w-sm bg-card p-6 rounded-2xl border border-border shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Novo Campo: Nome */}
          <Input
            id="name"
            label="Nome Completo"
            placeholder="Ex: Guilherme Silva"
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />

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
                Criando conta...
              </>
            ) : (
              "Cadastrar Grátis"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
