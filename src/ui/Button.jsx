import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`size-14 rounded-2xl bg-pink-700 text-xl font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
