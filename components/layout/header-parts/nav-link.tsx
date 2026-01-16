// components/layout/header-parts/nav-link.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void; // Importante para fechar o menu mobile ao clicar
  className?: string; // Para ajustes finos de padding se necessário
}

export function NavLink({
  href,
  icon: Icon,
  children,
  onClick,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-2 rounded-lg text-sm font-medium transition-colors
        ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        }
        ${className}
      `}
    >
      <Icon className="w-4 h-4 md:w-4 md:h-4" />{" "}
      {/* Ajuste de tamanho responsivo se precisar */}
      {children}
    </Link>
  );
}
