// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Replace with your actual Supabase credentials
const supabaseUrl = 'https://zpsexwlosrwlrelrrwls.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwc2V4d2xvc3J3bHJlbHJyd2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MzExNjEsImV4cCI6MjA3NzMwNzE2MX0.aR1tdJpvZ7hVS0zq493KbUom_KroL_eH29IgFLgwfIE'

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)