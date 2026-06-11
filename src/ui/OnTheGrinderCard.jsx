import { useState } from "react";
import { ChevronRight } from "lucide-react";
import LinkButton from "./LinkButton";
import StatCard from "./StatCard";
import DetailsItem from "./DetailsItem";
import IconButton from "./IconButton";

const stats = [
  {
    id: 0,
    label: "Pulled Shots",
    value: 3,
  },
  {
    id: 1,
    label: "Other stat",
    value: 6,
  },
];

const details = [
  {
    id: 0,
    label: "Altitude",
    value: 1600,
    unit: "m.a.s.l.",
  },
  {
    id: 1,
    label: "Processing",
    value: "Fully washed",
  },
  {
    id: 2,
    label: "Origin",
    value: "Brasil",
  },
  {
    id: 3,
    label: "Variety",
    value: "Catura",
  },
];

const OnTheGrinderCard = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleToggleCard = () => {
    setIsCardOpen((prev) => !prev);
  };
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl bg-neutral-900 bg-linear-to-b p-2">
      <OnTheGrinderCard.Header
        onToggle={handleToggleCard}
        isCardOpen={isCardOpen}
      />
      {isCardOpen && <OnTheGrinderCard.Details details={details} />}
      <OnTheGrinderCard.Stats stats={stats} />
      <OnTheGrinderCard.Actions>
        <LinkButton to="beans" className="rounded-2xl border-2 p-2">
          Change Beans
        </LinkButton>
        <button className="grow rounded-2xl bg-orange-600 p-2 font-semibold">
          Pull Shot
        </button>
      </OnTheGrinderCard.Actions>
    </div>
  );
};

OnTheGrinderCard.Header = ({ onToggle, isCardOpen }) => {
  return (
    <div className="flex items-center justify-between">
      <span>
        <h3 className="text-2xl font-bold">Brasil Santos</h3>
        <p className="text-xs font-semibold text-neutral-500">Caffee Montana</p>
      </span>
      <IconButton onClick={onToggle} aria-label="Toggle card">
        <ChevronRight className={`${isCardOpen && "rotate-90"}`} />
      </IconButton>
    </div>
  );
};

OnTheGrinderCard.Stats = ({ stats }) => {
  return (
    <div className="flex justify-center gap-2">
      {stats?.map((stat) => (
        <StatCard label={stat.label} value={stat.value} key={stat.id} />
      ))}
    </div>
  );
};

OnTheGrinderCard.Details = ({ details }) => {
  return (
    <div className="grid grid-cols-2 gap-y-2 border-y-2 border-neutral-600 py-4 text-sm">
      {details.map((detail) => (
        <DetailsItem
          label={detail.label}
          value={detail.value}
          key={detail.key}
          unit={detail.unit}
        />
      ))}
    </div>
  );
};

OnTheGrinderCard.Actions = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

const CountryFlag = ({ countryCode, origin }) => {
  return (
    <img
      src={`https://flagsapi.com/${countryCode}/flat/32.png`}
      alt={`${origin} flag`}
    />
  );
};

export default OnTheGrinderCard;
