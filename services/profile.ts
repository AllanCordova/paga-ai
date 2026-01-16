import { getErrorMessage } from "@/utils/error/errorMessage";
import { createClient } from "@/utils/supabase/server";

export const profileService = {
  async getAccount() {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        error: "Usuário não autenticado.",
      };
    }

    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", user?.id)
      .single();

    if (error) {
      return { success: false, error: getErrorMessage(error) };
    }

    return { success: true, data };
  },
};
