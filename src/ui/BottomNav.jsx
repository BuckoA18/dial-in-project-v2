import PullShotButton from "./PullShotButton";
import { Coffee, Goal, Home, Icon, Settings } from "lucide-react";
import NavItem, { NavItemText, NavItemIcon } from "./NavItem";
import { coffeeBean } from "@lucide/lab";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 flex h-16 w-full justify-center rounded-t-2xl bg-neutral-900 sm:hidden">
      {/* Left part */}
      <div className="mr-8 flex min-w-32.5 grow justify-around">
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
      </div>

      {/* Middle part */}
      <PullShotButton className="absolute right-1/2 bottom-8 translate-x-1/2">
        <Coffee />
      </PullShotButton>

      {/* Right part */}
      <div className="ml-8 flex min-w-32.5 grow justify-around">
        <NavItem to="ggg">
          <NavItemIcon>
            <Goal />
          </NavItemIcon>
          <NavItemText>place</NavItemText>
        </NavItem>
        <NavItem to="settings">
          <NavItemIcon>
            <Settings />
          </NavItemIcon>
          <NavItemText>Settings</NavItemText>
        </NavItem>
      </div>
    </nav>
  );
};

export default BottomNav;
