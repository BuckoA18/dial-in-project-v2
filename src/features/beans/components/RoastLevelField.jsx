import InputWrapper from "../../../ui/InputWrapper";

import RoastLevelItem from "./RoastLevelItem";
import RoastLevelSelector from "./RoastLevelSelector";

const ROAST_LEVELS = ["Light", "Medium", "Dark"];

const RoastLevelField = () => {
  return (
    <InputWrapper>
      <legend>Roast level</legend>
      <RoastLevelSelector>
        {ROAST_LEVELS.map((level) => {
          return <RoastLevelItem key={level} roastLevel={level} />;
        })}
      </RoastLevelSelector>
    </InputWrapper>
  );
};
export default RoastLevelField;
