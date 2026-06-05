import { NavLink } from "react-router";

const NavItem = ({ to, className = "", children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex h-full min-w-14 flex-col items-center justify-center rounded-2xl focus:text-neutral-200 focus:ring-2 focus:ring-neutral-200 focus:outline-none sm:size-15.5 ${isActive ? " text-neutral-200 sm:bg-neutral-800" : " text-neutral-600 sm:bg-neutral-900"} ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export const NavItemText = ({ children }) => {
  return <p className="text-xs font-semibold">{children}</p>;
};

export const NavItemIcon = ({ children }) => {
  return children;
};

export default NavItem;
