import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  "http://127.0.0.1:54321",
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: { persistSession: false, autoRefreshToken: false },
  }
);

jest.mock("/utils/supabase/client", () => {
  const { createClient } = require("@supabase/supabase-js");
  const client = createClient("http://127.0.0.1:54321", "anon-key", {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return { supabase: client, createClient: () => client };
});

jest.mock("/utils/supabase/server", () => {
  const { createClient } = require("@supabase/supabase-js");
  const client = createClient("http://127.0.0.1:54321", "anon-key", {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return { createClient: async () => client };
});

beforeEach(async () => {
  const { error } = await supabaseAdmin.rpc("reset_test_db");

  if (error) {
    console.error("Erro ao limpar banco de testes:", error);
    throw new Error("Falha na limpeza do banco de dados.");
  }
});
