const Button = ({ className, children, onClick, ...props }) => {
  return (
    <button
      type="button"
      className={`w-full rounded-2xl bg-orange-600 p-2 text-lg font-semibold text-neutral-200 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
