"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wallet,
  Menu,
  X,
  Users,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { DesktopMenu } from "./header-parts/desktop-menu";
import { MobileMenu } from "./header-parts/mobile-menu";
import { Profile } from "@/types/tables";

interface HeaderProps {
  user: Profile | null;
}

export const headerRoutes = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Meus Grupos", href: "/groups", icon: Users },
  { name: "Configurações", href: "/settings", icon: Settings },
];

export default function Header({ user }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="p-1.5 bg-primary/10 rounded-lg">
            <Wallet className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">Paga Aí</span>
        </Link>

        <DesktopMenu user={user} />

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
      />
    </header>
  );
}
