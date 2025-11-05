// loadtest.js
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL; // e.g. https://abcd.supabase.co
const SUPABASE_KEY = process.env.SUPABASE_KEY; // anon key (keep secret)
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Please set SUPABASE_URL and SUPABASE_KEY environment variables.");
  process.exit(1);
}
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// test params
const QR_ID = process.env.QR_ID || 'loadtest-qr-001';
const SESSION_ID = process.env.SESSION_ID || 'loadtest-sess-001';
const LAT = parseFloat(process.env.LAT) || 28.6139;
const LNG = parseFloat(process.env.LNG) || 77.2090;
const CONCURRENT = parseInt(process.env.CONCURRENT) || 30;
const ROUNDS = parseInt(process.env.ROUNDS) || 1; // how many times to run the group of requests

function randomStudent(i) {
  // generate unique student emails/names
  const ts = Date.now();
  return {
    id: `loadtest_student_${ts}_${i}`,
    name: `Student ${i}`,
    email: `student${i}_${ts}@example.com`
  };
}

async function oneCall(i) {
  const s = randomStudent(i);
  const payload = {
    p_qr_id: QR_ID,
    p_session_id: SESSION_ID,
    p_student_name: s.name,
    p_student_email: s.email,
    p_student_phone: null,
    p_student_latitude: LAT,
    p_student_longitude: LNG,
    p_scan_timestamp: new Date().toISOString()
  };

  const start = Date.now();
  try {
    const { data, error } = await supabase.rpc('submit_attendance', payload);
    const took = Date.now() - start;
    return { i, s, data, error, took };
  } catch (err) {
    const took = Date.now() - start;
    return { i, s, data: null, error: err, took };
  }
}

async function runRound(round) {
  console.log(`Starting round ${round+1} with ${CONCURRENT} concurrent calls...`);
  const promises = [];
  for (let i = 0; i < CONCURRENT; i++) promises.push(oneCall(i));
  const results = await Promise.all(promises);
  console.log(`Round ${round+1} completed.`);
  return results;
}

(async () => {
  const allResults = [];
  for (let r = 0; r < ROUNDS; r++) {
    const res = await runRound(r);
    allResults.push(...res);
    // small pause between rounds (optional)
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // summarize
  let ok = 0, failed = 0, totalTime = 0;
  for (const r of allResults) {
    totalTime += r.took;
    const failedReq = r.error || (r.data && ((typeof r.data.success !== 'undefined' && r.data.success === false) || r.data.success === false));
    if (failedReq) failed++;
    else ok++;
    console.log(`#${r.i} ${r.s.email} => ${r.error ? ('ERROR: ' + (r.error.message || r.error)) : JSON.stringify(r.data)} (${r.took} ms)`);
  }
  console.log(`Summary: total ${allResults.length}, ok=${ok}, failed=${failed}, avg=${(totalTime/allResults.length).toFixed(1)} ms`);
  process.exit(0);
})();