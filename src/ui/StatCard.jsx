const StatCard = ({ label, value }) => {
  return (
    <div className="flex min-h-28 min-w-20 grow flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-800 p-2">
      <h4 className="text-lg font-semibold text-neutral-400">{label}</h4>
      <span className="font-mono text-2xl font-semibold text-neutral-400">
        {value}
      </span>
    </div>
  );
};

export default StatCard;
