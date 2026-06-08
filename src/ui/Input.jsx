const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`rounded-2xl border-2 border-neutral-400 p-2 ${className}`}
      {...props}
    />
  );
};

export default Input;
