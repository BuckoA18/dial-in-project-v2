const IconButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`focus-visible::ring-offset-2 rounded-full p-2 transition-colors hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100 focus:outline-none focus-visible:ring-2 lg:p-2.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
