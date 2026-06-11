const IconButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-2 transition-colors hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100 focus:ring focus:ring-offset-2 focus:outline-none lg:p-2.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
