import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../../../supabase";
import { resetBeanData } from "../beansSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const usePostBean = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (beanData) => {
      const { data, error } = await supabase
        .from("beanss")
        .insert(beanData)
        .select();

      if (error)
        throw new Error(`Error in uploading ${beanData.name}. Try again later`);

      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      dispatch(resetBeanData());
      navigate("/beans");
      toast.success(`${data[0].name} succesfully added!`);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });
};
