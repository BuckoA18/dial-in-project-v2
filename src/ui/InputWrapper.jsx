const InputWrapper = ({ className = "", children }) => {
  return (
    <span
      className={`flex flex-col gap-4 rounded-2xl border-neutral-950 text-neutral-400 transition-all focus-within:border-neutral-200 focus-within:text-neutral-200 ${className}`}
    >
      {children}
    </span>
  );
};

export default InputWrapper;
