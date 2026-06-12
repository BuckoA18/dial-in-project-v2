import { useDispatch, useSelector } from "react-redux";
import { selectRoastLevel } from "../beansSlice";

const RoastLevelItem = ({ roastLevel }) => {
  const dispatch = useDispatch();
  const { roastLevel: selectedLevel } = useSelector(
    (state) => state.beans.beanData,
  );

  const isSelected = selectedLevel === roastLevel.toLowerCase();
  return (
    <label
      className={`flex h-20 w-20 grow cursor-pointer items-center justify-center rounded-2xl border-4 border-dashed text-neutral-400 transition-all has-checked:border-solid has-checked:border-orange-600 has-checked:text-orange-500`}
    >
      {roastLevel}
      <input
        type="radio"
        name="roast-level"
        value={roastLevel}
        checked={isSelected}
        onChange={() => dispatch(selectRoastLevel(roastLevel.toLowerCase()))}
        className="sr-only"
      />
    </label>
  );
};

export default RoastLevelItem;
