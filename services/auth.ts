import { ApiResponse } from "@/types/apiResponse";
import { getErrorMessage } from "@/utils/error/errorMessage";
import { createClient } from "@/utils/supabase/server";
import { supabase } from "@/utils/supabase/client";
import { User, Session } from "@supabase/supabase-js";

type AuthResponseData = {
  user: User | null;
  session: Session | null;
};

export const authService = {
  async createAccount(
    name: string,
    email: string,
    password: string
  ): Promise<ApiResponse<AuthResponseData>> {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      return { success: false, error: getErrorMessage(error) };
    }

    return { success: true, data };
  },

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return { success: false, error: getErrorMessage(error) };
    }

    return { success: true, data };
  },

  async logout() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { success: false, error: getErrorMessage(error) };
    }

    return { success: true };
  },
};
