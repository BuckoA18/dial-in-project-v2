const Card = ({ children }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl bg-neutral-900 p-2">
      {children}
    </div>
  );
};

export default Card;
