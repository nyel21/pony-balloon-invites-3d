// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xgzvtoavqhtfaddjzjml.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnenZ0b2F2cWh0ZmFkZGp6am1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMTczNjksImV4cCI6MjA2NDg5MzM2OX0.Cw1SNQD2pyzltQOVd4z8HLskJ6C924rUs2eyqOBHmXk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);