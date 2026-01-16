"use server";

import { authService } from "@/services/auth";
import { loginSchema, registerSchema } from "@/schemas/auth.schema";
import { redirect } from "next/navigation";
import { ApiResponse } from "@/types/apiResponse";
import { User } from "@supabase/supabase-js";

export async function signUpAction(
  formData: FormData
): Promise<ApiResponse<User>> {
  const data = Object.fromEntries(formData);

  const validation = registerSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.issues[0].message,
    };
  }

  const { name, email, password } = validation.data;

  const response = await authService.createAccount(name, email, password);

  if (response.error) {
    return { success: false, error: response.error };
  }

  redirect("/");
}

export async function loginAction(
  formData: FormData
): Promise<ApiResponse<User>> {
  const data = Object.fromEntries(formData);

  const validation = loginSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.issues[0].message,
    };
  }

  const { email, password } = validation.data;

  const response = await authService.login(email, password);

  if (response.error) {
    return { success: false, error: response.error };
  }

  redirect("/");
}

export async function logoutAction(): Promise<ApiResponse<User>> {
  const response = await authService.logout();

  if (response.error) {
    return { success: false, error: response.error };
  }

  redirect("/login");
}
