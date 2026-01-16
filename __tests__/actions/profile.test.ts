import { getProfileAction } from "@/actions/profile";
import { profileService } from "@/services/profile";

jest.mock("/services/profile");

describe("Profile Server Action (Unit Tests)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return profile data successfully when the service finds the account", async () => {
    const mockProfile = {
      id: "user-123",
      full_name: "Test User",
      avatar_url: "https://example.com/avatar.jpg",
      updated_at: new Date().toISOString(),
    };

    (profileService.getAccount as jest.Mock).mockResolvedValue({
      success: true,
      data: mockProfile,
    });

    const result = await getProfileAction();

    expect(result.success).toBe(true);
    expect(result.data).toEqual(mockProfile);
    expect(profileService.getAccount).toHaveBeenCalledTimes(1);
  });

  it("should return an error when the service fails to find the account", async () => {
    (profileService.getAccount as jest.Mock).mockResolvedValue({
      success: false,
      error: "User not found or not authenticated",
    });

    const result = await getProfileAction();

    expect(result.success).toBe(false);
    expect(result.error).toBe("User not found or not authenticated");
    expect(result.data).toBeUndefined();
  });
});
