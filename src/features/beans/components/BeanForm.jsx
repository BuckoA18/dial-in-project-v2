import Input from "../../../ui/Input";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";
import Button from "../../../ui/Button";
import { useState } from "react";

const BeanForm = () => {
  const [isFlavoursOpen, setIsFlavoursOpen] = useState(false);

  return (
    <form className="flex flex-col gap-2">
      {/* Bean name */}
      <InputWrapper>
        <Label htmlFor="bean-name">Name</Label>
        <Input id="bean-name" type="text" />
      </InputWrapper>

      {/* Roastery */}
      <InputWrapper>
        <Label htmlFor="bean-name">Roaster by</Label>
        <Input id="bean-name" type="text" />
      </InputWrapper>

      {/* Roast date */}
      <InputWrapper>
        <Label htmlFor="bean-name">Roasted at</Label>
        <Input id="bean-name" type="date" />
      </InputWrapper>

      {/* Roast level */}
      <InputWrapper>
        <Label htmlFor="bean-name">Roast level</Label>
        <select className="rounded-2xl border-2 border-neutral-400 p-2">
          <option>Light</option>
          <option>Medium</option>
          <option>dark</option>
        </select>
      </InputWrapper>

      {/* Bean flavours */}
      <InputWrapper>
        <button className="w-30 rounded-2xl border-2 p-2 text-xs text-neutral-400">
          Add flavours
        </button>
      </InputWrapper>

      <div className="fixed right-0 bottom-2 w-full px-2">
        <Button>Save</Button>
      </div>
      {/* Flavours badges */}
      {/* <div className="flex flex-wrap gap-1">
            {flavours.map((flavour) => (
              <Badge label={flavour.label} key={flavour.id} />
            ))}
          </div> */}
    </form>
  );
};

export default BeanForm;
