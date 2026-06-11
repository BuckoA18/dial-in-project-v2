const Error = ({ children }) => {
  return (
    <div className="w-full rounded-2xl bg-neutral-950 p-2 text-red-600 shadow-sm">
      {children}
    </div>
  );
};

Error.Message = ({ children }) => {
  return <p className="font-semibold">{children}</p>;
};

export default Error;
