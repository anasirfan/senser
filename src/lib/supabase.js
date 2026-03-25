import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gyvpdisxomsikffhgazc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5dnBkaXN4b21zaWtmZmhnYXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNDg1MzMsImV4cCI6MjA4OTkyNDUzM30.diaB9FfmIu7qPibNitY5ltamRl-v_Sa5DGatKSmkBr0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
