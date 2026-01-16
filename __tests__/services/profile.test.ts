import { authService } from "@/services/auth";
import { profileService } from "@/services/profile";

describe("Flux Profile", () => {
  const uniqueId = Date.now();
  const userData = {
    name: "Allan Teste",
    email: `teste.service.${uniqueId}@example.com`,
    password: "SenhaForte123!",
  };

  it("Get a correct profile when user loged", async () => {
    const createRes = await authService.createAccount(
      userData.name,
      userData.email,
      userData.password
    );
    expect(createRes.success).toBe(true);

    const loginRes = await authService.login(userData.email, userData.password);
    expect(loginRes.success).toBe(true);
    expect(loginRes.data?.session).toBeDefined();

    const profilseRes = await profileService.getAccount();
    expect(profilseRes.success).toBe(true);
    expect(profilseRes.data.id).toEqual(loginRes.data?.user.id);
  });

  it("Not get profile when user not loged", async () => {
    const profilseRes = await profileService.getAccount();
    expect(profilseRes.success).toBe(false);
  });
});
