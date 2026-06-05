import { NavLink } from "react-router";

const LinkButton = ({ children, className = "", onCLick, props }) => {
  return (
    <NavLink
      onCLick={onCLick}
      className={`rounded-full p-2 focus:ring focus:ring-offset-2 focus:outline-none ${className} `}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default LinkButton;
