import { NavLink } from "react-router";

const AsideNav = () => {
  return (
    <nav className="mt-18 flex flex-col gap-2 text-neutral-200">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `md:hover-bg-neutral-900 w-34 rounded-r-2xl p-2 text-lg font-semibold hover:bg-neutral-800 ${isActive ? "bg-neutral-800" : "bg-neutral-900"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="settings"
        className={({ isActive }) =>
          `w-34 rounded-r-2xl p-2 text-lg font-semibold hover:bg-neutral-800 ${isActive ? "bg-neutral-800" : "bg-neutral-900"}`
        }
      >
        settings
      </NavLink>
    </nav>
  );
};

export default AsideNav;
