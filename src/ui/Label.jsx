const Label = ({ className = "", children, ...props }) => {
  return (
    <label className={`text-md font-semibold ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
