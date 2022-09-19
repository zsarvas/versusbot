// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
import { data } from 'cypress/types/jquery'
require('dotenv').config()
const envVariables = process.env;

// Read vars from envVariables object
    const {
        SUPABASE_URL,
        SUPABASE_KEY
} = envVariables;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Make a request
const { data: rocketleague, error } = await supabase.from('rocketleague').select('*')