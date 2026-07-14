import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://efqqtvmxrdzccvrbdklv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmcXF0dm14cmR6Y2N2cmJka2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MzcwNzIsImV4cCI6MjA5OTUxMzA3Mn0.j8UJPwRfoPvXaqR6XO343vXftu5P8AmthJ9_lhMJxKk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
