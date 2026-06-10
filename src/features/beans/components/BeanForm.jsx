import { useState } from "react";
import Input from "../../../ui/Input";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";
import Button from "../../../ui/Button";
import BeanFlavoursInput from "./BeanFlavoursInput";

const BeanForm = () => {
  const [beanData, setBeanData] = useState({
    name: "",
    roastery: "",
    roastedAt: "",
    roastLevel: "",
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

  console.log(beanData);

  const updateBeanData = (key, value) => {
    setBeanData((prev) => ({ ...prev, key: value }));
  };

  return (
    <form className="flex flex-col gap-2">
      <BeanNameField />
      <RoasteryField />
      <RoastDateField />
      <RoastLevelField />
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

const BeanNameField = () => {
  return (
    <InputWrapper>
      <Label htmlFor="bean-name">Name</Label>
      <Input id="bean-name" type="text" />
    </InputWrapper>
  );
};

const RoasteryField = () => {
  return (
    <InputWrapper>
      <Label htmlFor="roasted-by">Roaster by</Label>
      <Input id="roasted-by" type="text" />
    </InputWrapper>
  );
};

const RoastDateField = () => {
  return (
    <InputWrapper>
      <Label htmlFor="roasted-at">Roasted at</Label>
      <Input id="roasted-at" type="date" />
    </InputWrapper>
  );
};

const RoastLevelField = () => {
  return (
    <InputWrapper>
      <Label htmlFor="roast-level">Roast level</Label>
      <select
        id="roast-level"
        className="rounded-2xl border-2 border-neutral-400 p-2"
      >
        <option>Light</option>
        <option>Medium</option>
        <option>Dark</option>
      </select>
    </InputWrapper>
  );
};
