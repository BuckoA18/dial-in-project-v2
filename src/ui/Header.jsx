import { ArrowLeft } from "lucide-react";
import IconButton from "./IconButton";

const Header = ({ children }) => {
  return (
    <header>
      <div className="flex w-full items-center justify-between p-2">
        {children}
      </div>
    </header>
  );
};

Header.PageTitle = ({ children }) => {
  return <h1 className="font-mono text-2xl font-bold">{children}</h1>;
};

Header.BackButton = ({ onNavigate }) => {
  return (
    <IconButton className="lg:hidden" onClick={onNavigate}>
      <ArrowLeft />
    </IconButton>
  );
};

export default Header;
