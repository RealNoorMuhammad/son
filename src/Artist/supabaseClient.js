import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtqdpwkkyzsgfkzmpeha.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0cWRwd2treXpzZ2Zrem1wZWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1OTYyNDEsImV4cCI6MjA3MDE3MjI0MX0.Dlt_P255ROTvp-9bn_bmc0ehWeFurYE2ZA5Crpm2Ivg';
export const supabase = createClient(supabaseUrl, supabaseKey);
