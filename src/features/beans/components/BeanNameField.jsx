import { useDispatch, useSelector } from "react-redux";
import { updateBeanData } from "../beansSlice";
import InputWrapper from "../../../ui/InputWrapper";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";

const BeanNameField = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.beans.beanData);

  return (
    <InputWrapper>
      <Label htmlFor="bean-name">Name</Label>
      <Input
        required
        id="bean-name"
        type="text"
        value={name}
        onChange={(e) =>
          dispatch(updateBeanData({ key: "name", value: e.target.value }))
        }
      />
    </InputWrapper>
  );
};

export default BeanNameField;
