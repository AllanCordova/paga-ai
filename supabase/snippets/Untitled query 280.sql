-- Função para limpar o banco de testes
create or replace function reset_test_db()
returns void
language plpgsql
security definer -- Roda com permissão de superusuário
as $$
begin
  -- 1. Limpa a tabela de usuários (Auth). 
  -- O 'CASCADE' garante que tudo ligado a ele (profiles, grupos, despesas) também suma.
  truncate table auth.users cascade;
  
  -- 2. Se tiver tabelas públicas que não estão ligadas ao auth.users, limpe elas aqui:
  -- truncate table public.sua_tabela_solta cascade;
end;
$$;