import { authService } from "@/services/auth";

describe("Flux Auth", () => {
  const uniqueId = Date.now();
  const userData = {
    name: "Allan Teste",
    email: `teste.service.${uniqueId}@example.com`,
    password: "SenhaForte123!",
  };

  it("can create an account and login", async () => {
    const createRes = await authService.createAccount(
      userData.name,
      userData.email,
      userData.password
    );
    expect(createRes.success).toBe(true);

    const loginRes = await authService.login(userData.email, userData.password);
    expect(loginRes.success).toBe(true);
    expect(loginRes.data?.session).toBeDefined();
  });

  it("not alow create duplicate datas", async () => {
    await authService.createAccount("Allan", userData.email, "password");

    const duplicateRes = await authService.createAccount(
      "Outro Nome",
      userData.email,
      "OutraSenha123"
    );

    expect(duplicateRes.success).toBe(false);

    expect(duplicateRes.error).toMatch(/already registered|exist|duplic/i);
  });

  it("not login with invalid password", async () => {
    const response = await authService.login(userData.email, "SenhaErrada!!!");

    expect(response.success).toBe(false);
    expect(response.error).toBeDefined();
  });

  it("not login by email not created", async () => {
    const response = await authService.login(
      `inexistente.${Date.now()}@nada.com`,
      "123456"
    );

    expect(response.success).toBe(false);
    expect(response.error).toMatch(/inválid|credential/i);
  });

  it("user can logout with success", async () => {
    await authService.login(userData.email, userData.password);

    const response = await authService.logout();
    expect(response.success).toBe(true);
  });
});
