import { NavLink } from "react-router";

const LinkButton = ({ children, to, className = "", onCLick, props }) => {
  return (
    <NavLink
      to={to}
      onCLick={onCLick}
      className={`p-2 transition-colors hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100 focus:ring focus:ring-offset-2 focus:outline-none lg:p-2.5 ${className} `}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default LinkButton;
