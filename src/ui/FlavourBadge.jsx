const FlavourBadge = ({ label, isActive, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-full border-2 px-2 py-1 text-sm font-semibold transition-colors ${isActive && "border-orange-600 bg-orange-600"}`}
    >
      {label}
    </span>
  );
};

export default FlavourBadge;
