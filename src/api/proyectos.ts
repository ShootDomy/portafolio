import { supabase } from "@/utils/supabase";

export const proyectosAPI = {
  listar: async () => {
    const res = await supabase
      .from("proyectos")
      .select("*")
      .eq("tipo", 1)
      .order("created_at", { ascending: false });
    return res;
  },
};
