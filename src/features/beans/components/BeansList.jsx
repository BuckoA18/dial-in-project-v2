const BeansList = ({ children, isPending }) => {
  return (
    <ul className="flex flex-col gap-2">
      {isPending ? <p className="text-neutral-200">Loading...</p> : children}
    </ul>
  );
};

export default BeansList;
