import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O e-mail é obrigatório." })
    .email({ message: "Insira um endereço de e-mail válido." }),

  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres." })
    .max(100, { message: "A senha é muito longa." }),
});

export const registerSchema = loginSchema.extend({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 letras.")
    .transform((name) => {
      // Dica: Capitalizar o nome (Ex: "guilherme" -> "Guilherme")
      return name
        .trim()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export type LoginSchema = z.infer<typeof loginSchema>;
