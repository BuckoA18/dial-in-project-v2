import { useState } from "react";

import NavToggleButton from "./NavToggleButton";
import AsideNav from "./AsideNav";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside
      className={`hidden ${isOpen ? "left-0" : "-left-36"} w-36 rounded-br-2xl transition-all duration-75 sm:fixed sm:top-0 sm:z-99 sm:flex sm:h-dvh sm:bg-neutral-900 md:static md:min-w-40 md:rounded-2xl md:bg-neutral-800`}
    >
      <AsideNav />
      <NavToggleButton
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
    </aside>
  );
};

export default Aside;
