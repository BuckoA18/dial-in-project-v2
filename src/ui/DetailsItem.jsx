const DetailsItem = ({ label, value, unit = "" }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[10px] font-bold tracking-wide text-neutral-400 uppercase">
        {label}
      </p>
      <span className="font-medium text-neutral-600">
        {value} {unit}
      </span>
    </div>
  );
};

export default DetailsItem;
