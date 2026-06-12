import { useDispatch } from "react-redux";
import { selectRoastLevel } from "../beansSlice";

const ROAST_LEVELS = ["Light", "Medium", "Dark"];

const RoastLevelInput = ({ selectedValue = "" }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-2" aria-label="Select roast level">
      {ROAST_LEVELS.map((level) => {
        const isSelected = level.toLowerCase() === selectedValue?.toLowerCase();

        return (
          <RoastLevelItem
            key={level}
            roastLevel={level}
            isActive={isSelected}
            onClick={() => dispatch(selectRoastLevel(level.toLowerCase()))}
          />
        );
      })}
    </div>
  );
};

const RoastLevelItem = ({ roastLevel, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      role="radio"
      aria-checked={isActive}
      className={`flex size-20 grow items-center justify-center rounded-2xl border-4 transition-all focus:outline-none focus-visible:border-neutral-200 focus-visible:text-neutral-200 ${
        isActive
          ? "border-static border-orange-500 text-orange-500"
          : "border-dashed text-neutral-400 hover:text-neutral-300"
      } `}
    >
      <span className="text-lg font-semibold">{roastLevel}</span>
    </button>
  );
};

export default RoastLevelInput;
