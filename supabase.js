import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const URL = import.meta.env.VITE_SUPABASE_URL;
const PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(URL, PUBLISHABLE_KEY);
