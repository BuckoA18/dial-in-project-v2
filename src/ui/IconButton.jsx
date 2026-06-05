const IconButton = ({ children, onClick, className = "", props }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-2 focus:ring focus:ring-offset-2 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
