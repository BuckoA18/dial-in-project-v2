const Label = ({ className = "", children, ...props }) => {
  return (
    <label
      className={`sm:flex sm:max-w-20 sm:grow sm:items-center sm:justify-end sm:text-right ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
