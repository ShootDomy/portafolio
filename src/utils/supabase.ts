import { createClient } from "@supabase/supabase-js";
import { ANON_KEY, URL_SUPABASE } from "./constans";

// Create a single supabase client for interacting with your database
export const supabase = createClient(URL_SUPABASE, ANON_KEY);
