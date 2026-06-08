const InputWrapper = ({ className = "", children }) => {
  return <span className={`flex flex-col gap-2 ${className}`}>{children}</span>;
};

export default InputWrapper;
