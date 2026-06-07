import { NavLink } from "react-router";

const LinkButton = ({ children, to, className = "", onClick, props }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`p-2 text-neutral-200 transition-colors hover:cursor-pointer hover:bg-neutral-200 hover:text-neutral-100 focus:ring focus:ring-offset-2 focus:outline-none lg:p-2.5 ${className} `}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default LinkButton;
