const { createClient } = require('@supabase/supabase-js')
require('dotenv').config();
//initialize db
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase