// components/layout/header-parts/logout-button.tsx
"use client";

import { LogOut } from "lucide-react";
import { logoutAction } from "@/actions/auth";
import { Profile } from "@/types/tables";

interface LogoutButtonProps {
  user: Profile | null;
  className?: string;
  children?: React.ReactNode;
}

export function LogoutButton({ user, className, children }: LogoutButtonProps) {
  if (!user) return null;

  async function handleLogout() {
    const response = await logoutAction();
    if (response?.error) {
      alert(response.error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center gap-2 transition-colors hover:text-destructive ${className}`}
      title="Sair"
    >
      <LogOut className="w-5 h-5" />
      {children}
    </button>
  );
}
