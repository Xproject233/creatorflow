import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

// Ensure that NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error("Missing environment variable NEXT_PUBLIC_SUPABASE_URL")
}
if (!supabaseAnonKey) {
  throw new Error("Missing environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

export const supabase = createPagesBrowserClient({
  supabaseUrl,
  supabaseKey: supabaseAnonKey,
})

// Also export the environment variables for use elsewhere if needed
export { supabaseUrl, supabaseAnonKey }
