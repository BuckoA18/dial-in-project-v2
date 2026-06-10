import { useState } from "react";
import Input from "../../../ui/Input";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";
import Button from "../../../ui/Button";
import BeanFlavoursInput from "./BeanFlavoursInput";
import { getCurrentDate } from "../../../utils";

const BeanForm = () => {
  const [beanData, setBeanData] = useState({
    name: "",
    roastery: "",
    roastedAt: getCurrentDate(),
    roastLevel: "medium",
    flavours: [],
  });

  const handleToggleSelectFlavour = (flavour) => {
    setBeanData((prev) => {
      return {
        ...prev,
        flavours: prev.flavours.includes(flavour)
          ? prev.flavours.filter((f) => f !== flavour)
          : [...prev.flavours, flavour],
      };
    });
  };

  const updateBeanData = (key, value) => {
    setBeanData((prev) => ({ ...prev, [key]: value }));
  };

  const now = Temporal.Now.plainDateTimeISO();
  console.log(now.toString());

  console.log(beanData);
  return (
    <form className="flex flex-col gap-2">
      <BeanNameField value={beanData.name} updateBeanData={updateBeanData} />
      <RoasteryField
        value={beanData.roastery}
        updateBeanData={updateBeanData}
      />
      <RoastDateField
        value={beanData.roastedAt}
        updateBeanData={updateBeanData}
      />
      <RoastLevelField
        value={beanData.roastLevel}
        updateBeanData={updateBeanData}
      />
      <BeanFlavoursInput
        selectedFlavours={beanData?.flavours}
        onToggleFlavours={handleToggleSelectFlavour}
      />

      <div className="fixed right-0 bottom-2 w-full px-2">
        <Button>Save</Button>
      </div>
    </form>
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
        onChange={(e) => updateBeanData("roastedAt", e.target.value)}
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
