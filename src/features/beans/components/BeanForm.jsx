import { usePostBean } from "../hooks/usePostBean";
import { useSelector } from "react-redux";
import Button from "../../../ui/Button";
import Loader from "../../../ui/Loader";
import BeanFlavoursField from "./BeanFlavoursField";
import BeanNameField from "./BeanNameField";
import RoasteryField from "./RoasteryField";
import RoastDateField from "./RoastDateField";
import RoastLevelField from "./RoastLevelField";

const BeanForm = () => {
  const { isPending: isPosting, mutate } = usePostBean();
  const { name, roastedAt, roastery, flavours, roastLevel } = useSelector(
    (state) => state.beans.beanData,
  );

  const handleSubmit = (e) => {
    console.log("dsds");
    e.preventDefault();

    const dataToSubmit = {
      name: name,
      roasted_at: roastedAt,
      roasted_by: roastery,
      roast_level: roastLevel,
      flavours: flavours,
    };

    mutate(dataToSubmit);
  };

  return (
    <form
      className="flex grow flex-col gap-2 rounded-2xl pb-20 sm:bg-neutral-900 sm:p-4"
      onSubmit={handleSubmit}
    >
      <BeanNameField />
      <RoasteryField />
      <RoastDateField />
      <RoastLevelField />
      <BeanFlavoursField />

      <span className="fixed right-0 bottom-2 w-full px-1 sm:static sm:mt-auto sm:flex sm:justify-end">
        <Button className="sm:max-w-60">Save</Button>
      </span>

      {isPosting && <Loader />}
    </form>
  );
};

export default BeanForm;
