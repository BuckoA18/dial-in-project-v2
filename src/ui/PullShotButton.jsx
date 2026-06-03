import React from "react";

const PullShotButton = ({ children, className }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-2xl border-3 border-pink-700 bg-neutral-800 p-4 text-xl font-semibold text-pink-600 shadow-2xl ${className} cursor-pointer gap-2 shadow-xs shadow-pink-700 transition-transform duration-75 hover:scale-98 active:scale-90 sm:justify-between sm:bg-neutral-900 sm:px-4 sm:py-2`}
    >
      {children}
    </button>
  );
};

export default PullShotButton;
