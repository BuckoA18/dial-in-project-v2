import { ArrowLeft, BellRing, Settings } from "lucide-react";
import IconButton from "./IconButton";
import LinkButton from "./LinkButton";

const Header = ({ className = "", children }) => {
  return (
    <header
      className={`p-2 sm:block sm:h-14 sm:w-full sm:bg-neutral-950 sm:px-4 sm:text-neutral-300 ${className}`}
    >
      <div className="flex h-full items-center justify-between">{children}</div>
    </header>
  );
};
export default Header;

Header.Logo = () => {
  return <h1 className="text-2xl font-bold">SICK ASS LOGO</h1>;
};

Header.Actions = () => {
  return (
    <div className="item-center flex gap-2">
      <IconButton aria-label="notifications">
        <BellRing />
      </IconButton>
      <LinkButton to="settings" aria-label="settings">
        <Settings />
      </LinkButton>
    </div>
  );
};

Header.BackButton = ({ onClick }) => {
  return (
    <LinkButton onClick={onClick} aria-label="go back">
      <ArrowLeft />
    </LinkButton>
  );
};
