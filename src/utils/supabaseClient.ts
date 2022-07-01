import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.SUPABASE_ANON ?? "";

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
);
