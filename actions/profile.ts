"use server";

import { profileService } from "@/services/profile";

export async function getProfileAction() {
  const response = await profileService.getAccount();

  if (response.error) {
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}
