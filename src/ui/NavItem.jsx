import { NavLink } from "react-router";

const NavItem = ({ to, className = "", children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex h-full min-w-14 flex-col items-center justify-center ${isActive ? " text-neutral-200" : " text-neutral-600"} ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export const NavItemText = ({ children }) => {
  console.log(children);
  return <p className="text-xs font-semibold">{children}</p>;
};

export const NavItemIcon = ({ children }) => {
  return children;
};

export default NavItem;
