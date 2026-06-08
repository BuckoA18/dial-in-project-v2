import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../supabase";

export const useGetBeans = () => {
  return useQuery({
    queryKey: ["beans"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase.from("beans").select("*");

        if (error) throw new Error("failed to fetch");

        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
};
