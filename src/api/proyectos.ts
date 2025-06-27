import { supabase } from "@/utils/supabase";

export const proyectosAPI = {
  listar: async () => {
    const res = await supabase.from("proyectos").select("*");
    return res;
  },
};
