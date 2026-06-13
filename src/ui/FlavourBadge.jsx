import { useDispatch, useSelector } from "react-redux";
import { addFlavour, deleteFlavour } from "../features/beans/beansSlice";

const FlavourBadge = ({ flavour }) => {
  const { flavours } = useSelector((state) => state.beans.beanData);
  const dispatch = useDispatch();

  const isSelected = flavours.includes(flavour);

  return (
    <label
      className={`text-md rounded-full border-2 px-2 py-1 font-semibold text-neutral-400 transition-colors focus-within:outline-none has-checked:border-orange-600 has-checked:text-orange-600 focus-within:has-focus-visible:ring-4 focus-within:has-focus-visible:ring-orange-600`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={isSelected}
        onChange={() =>
          dispatch(isSelected ? deleteFlavour(flavour) : addFlavour(flavour))
        }
      />
      {flavour.label}
    </label>
  );
};

export default FlavourBadge;
