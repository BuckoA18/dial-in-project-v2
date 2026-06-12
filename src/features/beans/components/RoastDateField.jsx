import { useDispatch, useSelector } from "react-redux";
import { updateBeanData } from "../beansSlice";
import { getIsDateInFuture } from "../../../utils";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";

const RoastDateField = () => {
  const dispatch = useDispatch();
  const { roastedAt } = useSelector((state) => state.beans.beanData);
  return (
    <InputWrapper>
      <Label htmlFor="roasted-at">Roasted at</Label>
      <Input
        required
        id="roasted-at"
        type="date"
        value={roastedAt}
        onChange={(e) => {
          if (getIsDateInFuture(e.target.value)) return;
          dispatch(updateBeanData({ key: "roastedAt", value: e.target.value }));
        }}
      />
    </InputWrapper>
  );
};

export default RoastDateField;
