import { Home, Icon, Settings } from "lucide-react";
import NavItem, { NavItemIcon } from "./NavItem";
import { coffeeBean, planet } from "@lucide/lab";

const AsideNav = () => {
  return (
    <nav className="flex w-full flex-col justify-center gap-2 text-neutral-200">
      <NavItem to="/">
        <NavItemIcon>
          <Home />
        </NavItemIcon>
      </NavItem>

      <NavItem to="beans">
        <NavItemIcon>
          <Icon iconNode={coffeeBean} />
        </NavItemIcon>
      </NavItem>

      <NavItem to="whateer">
        <NavItemIcon>
          <Icon iconNode={planet} />
        </NavItemIcon>
      </NavItem>

      <NavItem to="settings" className="mt-auto">
        <NavItemIcon>
          <Settings />
        </NavItemIcon>
      </NavItem>
    </nav>
  );
};

export default AsideNav;
