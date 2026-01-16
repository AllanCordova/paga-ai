// components/layout/header-parts/desktop-menu.tsx
import { headerRoutes } from "../Header"; // Ajuste imports
import { NavLink } from "./nav-link";
import { LogoutButton } from "./logout-button";
import { Profile } from "@/types/tables";

interface DesktopMenuProps {
  user: Profile | null;
}

export function DesktopMenu({ user }: DesktopMenuProps) {
  const getInitials = (name: string) => name.charAt(0).toUpperCase();

  return (
    <div className="hidden md:flex items-center gap-4">
      <nav className="flex items-center gap-1 mr-4">
        {headerRoutes.map((route) => (
          <NavLink
            key={route.href}
            href={route.href}
            icon={route.icon}
            className="px-4 py-2"
          >
            {route.name}
          </NavLink>
        ))}
      </nav>

      {user && (
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-medium leading-none">{user.full_name}</p>
          </div>

          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/10 overflow-hidden">
            {user.avatar_url ? (
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <span>{user.full_name ? getInitials(user.full_name) : "U"}</span>
            )}
          </div>

          <LogoutButton user={user} className="p-2 text-muted-foreground" />
        </div>
      )}
    </div>
  );
}
