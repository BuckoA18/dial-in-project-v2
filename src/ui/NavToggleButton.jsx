import { ArrowLeft } from "lucide-react";
import React from "react";

const NavToggleButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute right-0 bottom-2 h-10 w-12 px-1 text-neutral-600 ${!isOpen && "translate-x-1/2 rotate-180 rounded-full bg-neutral-900"} md:hidden`}
    >
      <ArrowLeft size={22} />
    </button>
  );
};

export default NavToggleButton;
