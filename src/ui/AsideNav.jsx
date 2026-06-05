import { Home, Icon, Settings } from "lucide-react";
import NavItem, { NavItemIcon, NavItemText } from "./NavItem";
import { coffeeBean, planet } from "@lucide/lab";

const AsideNav = () => {
  return (
    <nav className="flex w-full flex-col justify-center gap-2 text-neutral-200">
      <NavItem to="/">
        <NavItemIcon>
          <Home />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>

      <NavItem to="beans">
        <NavItemIcon>
          <Icon iconNode={coffeeBean} />
        </NavItemIcon>
        <NavItemText>Beans</NavItemText>
      </NavItem>

      <NavItem to="whateer">
        <NavItemIcon>
          <Icon iconNode={planet} />
        </NavItemIcon>
        <NavItemText>Planet!</NavItemText>
      </NavItem>

      <NavItem to="settings" className="sm:mt-auto lg:mt-0">
        <NavItemIcon>
          <Settings />
        </NavItemIcon>
        <NavItemText>Settings</NavItemText>
      </NavItem>
    </nav>
  );
};

export default AsideNav;
