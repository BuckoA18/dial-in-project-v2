import { BellRing, User2 } from "lucide-react";
import Logo from "./Logo";
import IconButton from "./IconButton";
import LinkButton from "./LinkButton";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`p-2 sm:block sm:h-14 sm:w-full sm:bg-neutral-950 sm:px-4 sm:text-neutral-300 ${className}`}
    >
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
