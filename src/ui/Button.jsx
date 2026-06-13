const Button = ({ className, children, onClick, ...props }) => {
  return (
    <button
      className={`h-14 w-full rounded-2xl border-b-4 border-orange-900 bg-orange-600 p-2 text-lg font-semibold text-neutral-200 active:border-none ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
