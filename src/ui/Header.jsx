import { BellRing, User2 } from "lucide-react";
import Logo from "../pages/Logo";
import IconButton from "./IconButton";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header className="fixed z-99 h-16 w-full bg-neutral-950 p-2 text-neutral-300 sm:static sm:h-14 sm:px-4">
      <div className="flex h-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <IconButton aria-label="Notifications">
            <BellRing />
          </IconButton>
          <LinkButton aria-label="Settings">
            <User2 />
          </LinkButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
