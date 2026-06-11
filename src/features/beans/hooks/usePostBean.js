import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../../../supabase";
import { resetBeanData } from "../beansSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const usePostBean = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (beanData) => {
      const { data, error } = await supabase
        .from("beans")
        .insert(beanData)
        .select();

      if (error) throw new Error(error.message);

      return data;
    },
    onSuccess: () => {
      dispatch(resetBeanData());
      navigate("/beans");
    },
    onError: (error) => {
      console.log("Caught in onError: ", error);
    },
  });
};
