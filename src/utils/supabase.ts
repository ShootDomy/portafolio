import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://gqtcjoehbteqyaofqbpt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdGNqb2VoYnRlcXlhb2ZxYnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODQ2NjgsImV4cCI6MjA2NjU2MDY2OH0.T87NYYnz5lpWqZc2ambbuvRAKmJ9Pb6r36vXNdDXnsI"
);
