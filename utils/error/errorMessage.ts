import { PostgrestError } from "@supabase/supabase-js";

const supabaseErrorMap: Record<string, string> = {
  "23505": "Este dado já está sendo utilizado em outro cadastro.",
  "23503":
    "Não é possível excluir ou alterar este item pois ele está vinculado a outro registro.",
  "23502": "Um campo obrigatório não foi preenchido.",
  "22001": "O valor informado é muito longo para este campo.",

  PGRST116: "O registro solicitado não foi encontrado.",
  "42501": "Você não tem permissão para acessar ou modificar estes dados.",

  user_already_exists: "Já existe um usuário cadastrado com este e-mail.",
  invalid_login_credentials: "E-mail ou senha incorretos.",
  weak_password: "A senha é muito fraca. Escolha uma senha mais forte.",
};

function isSupabaseError(error: unknown): error is PostgrestError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "message" in error &&
    "details" in error
  );
}

export function getErrorMessage(error: unknown): string {
  if (isSupabaseError(error)) {
    const friendlyMessage = supabaseErrorMap[error.code];
    if (friendlyMessage) return friendlyMessage;

    console.error("Erro Supabase não mapeado:", error.code, error.message);
    return "Ocorreu um erro ao processar sua solicitação.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Ocorreu um erro inesperado. Tente novamente mais tarde.";
}
