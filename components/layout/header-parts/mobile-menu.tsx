// components/layout/header-parts/mobile-menu.tsx
import { headerRoutes } from "../Header";
import { NavLink } from "./nav-link";
import { LogoutButton } from "./logout-button";
import { Profile } from "@/types/tables";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: Profile | null;
}

export function MobileMenu({ isOpen, onClose, user }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-5 duration-200 shadow-xl">
      <div className="p-4 space-y-4">
        {user && (
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
              {user.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>{user.full_name?.charAt(0).toUpperCase()}</span>
              )}
            </div>
            <div>
              <p className="font-medium">{user.full_name}</p>
            </div>
          </div>
        )}

        <nav className="space-y-1">
          {headerRoutes.map((route) => (
            <NavLink
              key={route.href}
              href={route.href}
              icon={route.icon}
              onClick={onClose}
              className="px-4 py-3"
            >
              {route.name}
            </NavLink>
          ))}
        </nav>

        <div className="pt-2 border-t border-border">
          <LogoutButton
            user={user}
            className="w-full px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg justify-start"
          >
            Sair da conta
          </LogoutButton>
        </div>
      </div>
    </div>
  );
}
