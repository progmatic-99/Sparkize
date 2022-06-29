import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_SUPABASE_ANON ?? "";

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
);
