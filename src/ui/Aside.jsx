import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside
      className={`hidden ${isOpen ? "w-36" : "w-1"} rounded-br-2xl transition-all duration-75 sm:fixed sm:top-0 sm:left-0 sm:z-99 sm:flex sm:h-dvh sm:bg-neutral-900 md:static md:min-w-40 md:rounded-2xl md:bg-neutral-800`}
    >
      <nav></nav>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`absolute right-0 bottom-2 h-10 w-12 px-1 text-neutral-600 ${!isOpen && "translate-x-1/2 rotate-180 rounded-full bg-neutral-900"} md:hidden`}
      >
        <ArrowLeft size={22} />
      </button>
    </aside>
  );
};

export default Aside;
