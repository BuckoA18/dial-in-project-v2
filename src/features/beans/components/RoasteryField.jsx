import { useDispatch, useSelector } from "react-redux";
import { updateBeanData } from "../beansSlice";
import Input from "../../../ui/Input";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";

const RoasteryField = () => {
  const dispatch = useDispatch();
  const { roastedBy } = useSelector((state) => state.beans.beanData);
  return (
    <InputWrapper>
      <Label htmlFor="roasted-by">Roaster by</Label>
      <Input
        required
        id="roasted-by"
        type="text"
        value={roastedBy}
        onChange={(e) =>
          dispatch(updateBeanData({ name: "roastedBy", value: e.target.value }))
        }
      />
    </InputWrapper>
  );
};

export default RoasteryField;
