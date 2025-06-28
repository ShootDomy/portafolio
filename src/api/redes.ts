import { supabase } from "@/utils/supabase";

export const redesAPI = {
  listar: async () => {
    const res = await supabase.from("redes").select("*");
    return res;
  },
};
