const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`rounded-full border-2 px-2 py-1 text-sm font-semibold ${className}`}
    >
      {children}
    </span>
  );
};
export default Badge;
