import { signUpAction, loginAction, logoutAction } from "@/actions/auth";
import { authService } from "@/services/auth";
import { redirect } from "next/navigation";

jest.mock("/services/auth");

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Auth Server Actions (Unit Tests)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("signUpAction", () => {
    it("should return validation error (Zod) if data is invalid", async () => {
      const formData = new FormData();
      formData.append("name", "Allan");
      formData.append("email", "email-without-at-sign");
      formData.append("password", "123");

      const result = await signUpAction(formData);

      expect(result?.success).toBe(false);
      expect(authService.createAccount).not.toHaveBeenCalled();
    });

    it("should return error if authService fails (e.g., duplicate email)", async () => {
      const formData = new FormData();
      formData.append("name", "Allan");
      formData.append("email", "duplicate@test.com");
      formData.append("password", "StrongPass123!");

      (authService.createAccount as jest.Mock).mockResolvedValue({
        success: false,
        error: "Email already registered",
      });

      const result = await signUpAction(formData);

      expect(result?.success).toBe(false);
      expect(result?.error).toBe("Email already registered");
      expect(redirect).not.toHaveBeenCalled();
    });

    it("should redirect to '/' if registration is successful", async () => {
      const formData = new FormData();
      formData.append("name", "Allan");
      formData.append("email", "new@test.com");
      formData.append("password", "StrongPass123!");

      (authService.createAccount as jest.Mock).mockResolvedValue({
        success: true,
        data: { user: { id: "123" } },
      });

      await signUpAction(formData);

      expect(authService.createAccount).toHaveBeenCalledWith(
        "Allan",
        "new@test.com",
        "StrongPass123!"
      );
      expect(redirect).toHaveBeenCalledWith("/");
    });
  });

  describe("loginAction", () => {
    it("should return error if credentials are wrong", async () => {
      const formData = new FormData();
      formData.append("email", "allan@test.com");
      formData.append("password", "wrongPassword");

      (authService.login as jest.Mock).mockResolvedValue({
        success: false,
        error: "Invalid login credentials",
      });

      const result = await loginAction(formData);

      expect(result?.success).toBe(false);
      expect(result?.error).toBe("Invalid login credentials");
    });

    it("should redirect upon successful login", async () => {
      const formData = new FormData();
      formData.append("email", "allan@test.com");
      formData.append("password", "correctPassword");

      (authService.login as jest.Mock).mockResolvedValue({
        success: true,
        data: { session: {} },
      });

      await loginAction(formData);

      expect(redirect).toHaveBeenCalledWith("/");
    });
  });

  describe("logoutAction", () => {
    it("should redirect to /login after successful logout", async () => {
      (authService.logout as jest.Mock).mockResolvedValue({
        success: true,
      });

      await logoutAction();

      expect(authService.logout).toHaveBeenCalled();
      expect(redirect).toHaveBeenCalledWith("/login");
    });
  });
});
