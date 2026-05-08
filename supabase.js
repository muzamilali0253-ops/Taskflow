import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ufddjoxpxbwbhpjsyvue.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZGRqb3hweGJ3YmhwanN5dnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTY5NjAsImV4cCI6MjA5MzgzMjk2MH0.TkpP0QUKH-3zPm7Hrp85mg3ueAb7GNkIvi0BQkUNZ6Q";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
