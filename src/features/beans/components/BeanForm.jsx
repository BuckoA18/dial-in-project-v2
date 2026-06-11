import { getIsDateInFuture } from "../../../utils";
import { usePostBean } from "../hooks/usePostBean";
import { useDispatch, useSelector } from "react-redux";

import { updateBeanData } from "../beansSlice";
import Input from "../../../ui/Input";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";
import Button from "../../../ui/Button";
import BeanFlavoursInput from "./BeanFlavoursInput";
import Loader from "../../../ui/Loader";

const BeanForm = () => {
  const dispatch = useDispatch();
  const { isPending, isError, mutate, error } = usePostBean();
  const { beanData } = useSelector((state) => state.beans);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name: beanData.name,
      roasted_at: beanData.roastedAt,
      roasted_by: beanData.roastery,
      roast_level: beanData.roastLevel,
      flavours: beanData.flavours,
    };

    mutate(dataToSubmit);
  };

  const handleUpdateBeanData = (key, value) => {
    dispatch(updateBeanData({ key: key, value: value }));
  };

  return (
    <>
      {isPending && <Loader />}
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <BeanNameField
          value={beanData.name}
          updateBeanData={handleUpdateBeanData}
        />
        <RoasteryField
          value={beanData.roastery}
          updateBeanData={handleUpdateBeanData}
        />
        <RoastDateField
          value={beanData.roastedAt}
          updateBeanData={handleUpdateBeanData}
        />
        <RoastLevelField
          value={beanData.roastLevel}
          updateBeanData={handleUpdateBeanData}
        />
        <BeanFlavoursInput selectedFlavours={beanData.flavours} />

        {isError && <p className="text-red-300">{error.message}</p>}

        <div className="fixed right-0 bottom-2 w-full px-2">
          <Button>Save</Button>
        </div>
      </form>
    </>
  );
};

export default BeanForm;

const BeanNameField = ({ value, updateBeanData }) => {
  return (
    <InputWrapper>
      <Label htmlFor="bean-name">Name</Label>
      <Input
        required
        id="bean-name"
        type="text"
        value={value}
        onChange={(e) => updateBeanData("name", e.target.value)}
      />
    </InputWrapper>
  );
};

const RoasteryField = ({ value, updateBeanData }) => {
  return (
    <InputWrapper>
      <Label htmlFor="roasted-by">Roaster by</Label>
      <Input
        required
        id="roasted-by"
        type="text"
        value={value}
        onChange={(e) => updateBeanData("roastery", e.target.value)}
      />
    </InputWrapper>
  );
};

const RoastDateField = ({ value, updateBeanData }) => {
  return (
    <InputWrapper>
      <Label htmlFor="roasted-at">Roasted at</Label>
      <Input
        required
        id="roasted-at"
        type="date"
        value={value}
        onChange={(e) => {
          if (getIsDateInFuture(e.target.value)) return;
          updateBeanData("roastedAt", e.target.value);
        }}
      />
    </InputWrapper>
  );
};

const RoastLevelField = ({ value, updateBeanData }) => {
  return (
    <InputWrapper>
      <Label htmlFor="roast-level">Roast level</Label>
      <select
        required
        id="roast-level"
        className="rounded-2xl border-2 border-neutral-400 p-2"
        value={value}
        onChange={(e) => updateBeanData("roastLevel", e.target.value)}
      >
        <option value="light">Light</option>
        <option value="medium">Medium</option>
        <option value="dark">Dark</option>
      </select>
    </InputWrapper>
  );
};
