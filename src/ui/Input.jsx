const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`border-b-4 border-dashed p-2 text-lg font-semibold focus:border-solid focus:outline-none ${className} transition-all`}
      {...props}
    />
  );
};

export default Input;
