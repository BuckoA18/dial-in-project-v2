import { Link } from "react-router";
import { UserCircle2 } from "lucide-react";
import Logo from "../pages/Logo";

// Could have some "Whats new" icon
// Updates can be implemented this way so users can see the updates only if they
// want to

const Header = () => {
  return (
    <header className="fixed z-99 h-16 w-full bg-neutral-900 p-2 text-neutral-300 sm:static sm:h-14 sm:rounded-2xl sm:px-4">
      <div className="flex h-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <button className="rounded-2xl border-2 px-2">What's new?</button>
          <Link to="settings">
            <UserCircle2 size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
