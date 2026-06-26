const SUPABASE_URL = SUPABASE_CONFIG.url;
const SUPABASE_KEY = SUPABASE_CONFIG.anonKey;

const RESPONSE_COLS = [
  'id','age_bracket','age_eligible','headache_eligible','completed_at','started_at',
  'gender','country','education_level','work_situation',
  'headache_types','migraine_subtypes','functional_impact',
  'qol_severe_pain','qol_limit_activities','qol_wish_lie_down',
  'qol_tired_from_headaches','qol_irritated_from_headaches','qol_limit_concentration',
  'diagnosis_status','doctor_diagnosed_by','time_to_diagnosis',
  'satisfaction_rating','diagnosis_barriers','reasons_no_diagnosis',
  'treatments','treatments_not_working','treatment_details',
  'confidence_understanding','confidence_management',
  'journey_stage','challenges_in_care','felt_dismissed','unmet_needs',
  'comorbidities','ethnic_background_categories','device_type',
  'duration_onset','frequency_count','frequency_period','days_in_last_month'
].join(',');

async function fetchTable(table, select) {
  const cols = select || (table === 'survey_responses' ? RESPONSE_COLS : 'session_id,completed,started_at');
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=${cols}&limit=2000`, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

async function init() {
  try {
    const [sessions, responses] = await Promise.all([
      fetchTable('survey_sessions'),
      fetchTable('survey_responses')
    ]);

    const eligible = responses.filter(r => r.age_eligible === true && r.headache_eligible === 'Yes');
    const completed = eligible.filter(r => r.completed_at);
    const N = completed.length;
    const totalSessions = sessions.length;

    const journeyStageRaw = countField(completed, 'journey_stage');
    const journeyStages = journeyStageRaw.map(([label, count]) => ({
      label: label.trim(),
      count,
      pct: pct(count, N)
    }));

    const diagCounts = countField(completed, 'diagnosis_status');
    const doctorDx = completed.filter(r => r.diagnosis_status?.includes('doctor'));
    const noDx = completed.filter(r => r.diagnosis_status === 'No diagnosis');
    const selfDx = completed.filter(r => r.diagnosis_status?.toLowerCase().includes('self'));

    const dismissed = completed.filter(r => r.felt_dismissed === 'Yes').length;
    const dismissedPct = pct(dismissed, N);

    const avgRating = completed.filter(r=>r.satisfaction_rating).reduce((s,r,i,a)=>{
      return s + parseFloat(r.satisfaction_rating)/(a.length);
    }, 0);

    const confUnderstanding = countField(completed, 'confidence_understanding');
    const confManagement = countField(completed, 'confidence_management');

    const treatmentCounts = countField(completed, 'treatments');
    const headacheTypes = countField(completed, 'headache_types');
    const barriers = countField(completed, 'diagnosis_barriers');
    const challenges = countField(completed, 'challenges_in_care');

    const qolFields = [
      { key: 'qol_severe_pain', label: 'Severe pain' },
      { key: 'qol_limit_activities', label: 'Activity limits' },
      { key: 'qol_wish_lie_down', label: 'Needing to rest' },
      { key: 'qol_tired_from_headaches', label: 'Fatigue' },
      { key: 'qol_irritated_from_headaches', label: 'Irritability' },
      { key: 'qol_limit_concentration', label: 'Concentration' },
    ];
    const qolScores = qolFields.map(f => ({ ...f, score: qolScore(completed, f.key) }));

    const ageCounts = countField(eligible, 'age_bracket');
    const genderCounts = countField(completed, 'gender');
    const countryCounts = countField(completed, 'country');

    // Duration onset: parse "n years" / "n months" → months
    function parseDurationMonths(v) {
      if (!v) return null;
      const s = String(v).toLowerCase().trim();
      const m = s.match(/(\d+(?:\.\d+)?)/);
      if (!m) return null;
      const num = parseFloat(m[1]);
      if (!isFinite(num) || num <= 0) return null;
      return s.includes('month') ? num : num * 12;
    }
    const durationMonths = completed.map(r => parseDurationMonths(r.duration_onset)).filter(v => v !== null);
    const durationBucketCounts = [
      ['Less than 1 year',  durationMonths.filter(m => m < 12).length],
      ['1–5 years',         durationMonths.filter(m => m >= 12  && m < 60).length],
      ['5–10 years',        durationMonths.filter(m => m >= 60  && m < 120).length],
      ['10–20 years',       durationMonths.filter(m => m >= 120 && m < 240).length],
      ['20+ years',         durationMonths.filter(m => m >= 240).length],
    ].filter(([, c]) => c > 0);
    const sortedDurYears = [...durationMonths].sort((a,b)=>a-b).map(m => m/12);
    const medianDurYears = sortedDurYears.length ? +sortedDurYears[Math.floor(sortedDurYears.length/2)].toFixed(1) : 0;

    // Frequency: normalize to per-month
    const freqData = completed.map(r => {
      const n = parseFloat(r.frequency_count);
      if (!isFinite(n) || n <= 0) return null;
      const p = (r.frequency_period || '').toLowerCase();
      return p.includes('year') ? n / 12 : n;
    }).filter(v => v !== null);
    const freqBucketCounts = [
      ['Less than 1/month',     freqData.filter(f => f < 1).length],
      ['1–4 days/month',        freqData.filter(f => f >= 1  && f < 5).length],
      ['5–14 days/month',       freqData.filter(f => f >= 5  && f < 15).length],
      ['15–24 days/month',      freqData.filter(f => f >= 15 && f < 25).length],
      ['25+ days/month (daily)',freqData.filter(f => f >= 25).length],
    ].filter(([, c]) => c > 0);
    const sortedFreq = [...freqData].sort((a,b)=>a-b);
    const medianFreq = sortedFreq.length ? +sortedFreq[Math.floor(sortedFreq.length/2)].toFixed(1) : 0;

    // Days in last month
    const daysData = completed.map(r => parseFloat(r.days_in_last_month)).filter(v => isFinite(v) && v >= 0);
    const sortedDays = [...daysData].sort((a,b)=>a-b);
    const medianDays = sortedDays.length ? sortedDays[Math.floor(sortedDays.length/2)] : 0;
    const chronicCount = daysData.filter(d => d >= 15).length;

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="k-hero">
        <img src="../../images/Kokun-logo_WhiteSage_RGB.svg" alt="Kokun" class="k-logo">
        <div class="k-brand">Understanding Headaches and Migraine Analysis</div>
        <p>Anonymous research findings from ${eligible.length} eligible participants. Explore how people experience, seek care for, and live with migraine and headache conditions.</p>
        <div class="k-status"><div class="k-dot"></div> Live data · ${completed.length} completed responses</div>
      </div>

      <nav class="k-nav">
        <button class="k-nav-btn active" onclick="showSection('overview', this)">Overview</button>
        <button class="k-nav-btn" onclick="showSection('condition', this)">The condition</button>
        <button class="k-nav-btn" onclick="showSection('diagnosis', this)">Diagnosis</button>
        <button class="k-nav-btn" onclick="showSection('treatment', this)">Treatment</button>
        <button class="k-nav-btn" onclick="showSection('living', this)">Living with it</button>
        <button class="k-nav-btn" onclick="showSection('who', this)">Who responded</button>
      </nav>

      <div class="k-body">

        <div id="sec-overview" class="k-section active">
          <div class="k-stat-grid">
            <div class="k-stat">
              <div class="k-stat-label">Completed</div>
              <div class="k-stat-value">${N}</div>
              <div class="k-stat-sub">of ${totalSessions} sessions started</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">Felt dismissed</div>
              <div class="k-stat-value">${dismissedPct}%</div>
              <div class="k-stat-sub">by a provider</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">Have a diagnosis</div>
              <div class="k-stat-value">${pct(doctorDx.length + selfDx.length, N)}%</div>
              <div class="k-stat-sub">doctor or self-diagnosed</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">Dx satisfaction</div>
              <div class="k-stat-value">${avgRating.toFixed(1)}<span style="font-size:16px;font-weight:400;color:#81A487">/5</span></div>
              <div class="k-stat-sub">avg rating</div>
            </div>
          </div>

          <div class="k-card">
            <div class="k-card-title">Where people are in their care journey</div>
            <div class="k-card-sub">Click a stage to explore</div>
            <div class="k-journey-stages" id="journey-stage-cards">
              ${journeyStages.map((s,i) => `
                <div class="k-stage-card" onclick="highlightStage(${i})" data-stage="${i}">
                  <div class="k-stage-pct">${s.pct}%</div>
                  <div class="k-stage-name">${s.label}</div>
                </div>`).join('')}
            </div>
            <div id="stage-detail" style="display:none;" class="k-card" style="margin-bottom:0;">
              <div id="stage-detail-inner"></div>
            </div>
          </div>

          <div class="k-two-col">
            <div class="k-card">
              <div class="k-card-title">Diagnosis status</div>
              <div class="k-card-sub">How participants arrived at (or without) a diagnosis</div>
              ${barRows(diagCounts, N)}
            </div>
            <div class="k-card">
              <div class="k-card-title">Felt dismissed by a provider</div>
              <div class="k-card-sub">${dismissed} of ${N} completed respondents</div>
              <div class="k-dismissed-banner">
                <div class="k-dismissed-pct">${dismissedPct}%</div>
                <div class="k-dismissed-text">said they felt dismissed or not taken seriously by a healthcare provider during their migraine care journey.</div>
              </div>
            </div>
          </div>
        </div>

        <div id="sec-condition" class="k-section">
          <div class="k-card">
            <div class="k-card-title">Headache & migraine types</div>
            <div class="k-card-sub">Among completed respondents</div>
            ${barRows(headacheTypes, N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Functional impact</div>
            <div class="k-card-sub">How headaches affect day-to-day ability to function</div>
            ${barRows(countField(completed, 'functional_impact'), N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Quality of life impact</div>
            <div class="k-card-sub">Frequency of impact across six dimensions (higher = more frequent impact)</div>
            <div class="k-qol-grid">
              ${qolScores.map(q => `
                <div class="k-qol-item">
                  <div class="k-qol-label">${q.label}</div>
                  <div class="k-qol-bar-track"><div class="k-qol-bar-fill" style="width:${q.score}%"></div></div>
                  <div class="k-qol-val">${q.score}%</div>
                </div>`).join('')}
            </div>
          </div>

          <div class="k-card">
            <div class="k-card-title">Comorbidities</div>
            <div class="k-card-sub">Other conditions reported alongside migraine</div>
            ${barRows(countField(completed, 'comorbidities'), N)}
          </div>
        </div>

        <div id="sec-diagnosis" class="k-section">
          <div class="k-stat-grid">
            <div class="k-stat">
              <div class="k-stat-label">Doctor diagnosed</div>
              <div class="k-stat-value">${pct(doctorDx.length, N)}%</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">Self-diagnosed</div>
              <div class="k-stat-value">${pct(selfDx.length, N)}%</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">No diagnosis</div>
              <div class="k-stat-value">${pct(noDx.length, N)}%</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">Avg satisfaction</div>
              <div class="k-stat-value">${avgRating.toFixed(1)}<span style="font-size:14px;color:#81A487">/5</span></div>
            </div>
          </div>

          <div class="k-two-col">
            <div class="k-card">
              <div class="k-card-title">Who diagnosed them</div>
              <div class="k-card-sub">Among those with a doctor diagnosis</div>
              ${barRows(countField(doctorDx, 'doctor_diagnosed_by'), doctorDx.length)}
            </div>
            <div class="k-card">
              <div class="k-card-title">Time to diagnosis</div>
              <div class="k-card-sub">How long it took to receive a diagnosis</div>
              ${barRows(countField(doctorDx, 'time_to_diagnosis'), doctorDx.length)}
            </div>
          </div>

          <div class="k-card">
            <div class="k-card-title">Barriers to diagnosis</div>
            <div class="k-card-sub">What got in the way — select all that apply</div>
            ${barRows(barriers, N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Reasons for not seeking a diagnosis</div>
            <div class="k-card-sub">Among those without a formal diagnosis</div>
            ${barRows(countField(noDx, 'reasons_no_diagnosis'), noDx.length)}
          </div>
        </div>

        <div id="sec-treatment" class="k-section">
          <div class="k-card">
            <div class="k-card-title">Treatments being used</div>
            <div class="k-card-sub">Select all that apply</div>
            ${barRows(treatmentCounts, N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Treatments not working</div>
            <div class="k-card-sub">What respondents have tried without success</div>
            ${barRows(countField(completed, 'treatments_not_working'), N)}
          </div>

          <div class="k-two-col">
            <div class="k-card">
              <div class="k-card-title">Confidence understanding condition</div>
              ${barRows(confUnderstanding, N)}
            </div>
            <div class="k-card">
              <div class="k-card-title">Confidence managing condition</div>
              ${barRows(confManagement, N)}
            </div>
          </div>
        </div>

        <div id="sec-living" class="k-section">
          <div class="k-dismissed-banner" style="background:#3D4D3F; border-radius:12px; padding:20px; margin-bottom:16px; display:flex; align-items:center; gap:16px;">
            <div class="k-dismissed-pct" style="font-size:40px;font-weight:600;color:#F0F3F1;flex-shrink:0;">${dismissedPct}%</div>
            <div class="k-dismissed-text" style="font-size:14px;color:rgba(240,243,241,0.75);line-height:1.5;">of respondents felt dismissed or not taken seriously by a provider. This was the most common care challenge reported.</div>
          </div>

          <div class="k-card">
            <div class="k-card-title">Challenges in care</div>
            <div class="k-card-sub">What respondents continue to face — select all that apply</div>
            ${barRows(challenges, N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Journey stage</div>
            <div class="k-card-sub">Where people describe themselves being right now</div>
            ${barRows(journeyStageRaw.map(([l,c])=>[l.trim(),c]), N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Unmet needs</div>
            <div class="k-card-sub">What respondents say they still need</div>
            ${barRows(countField(completed, 'unmet_needs'), N)}
          </div>

          ${daysData.length || durationMonths.length ? `
          <div class="k-stat-grid">
            ${durationMonths.length ? `
            <div class="k-stat">
              <div class="k-stat-label">Median duration</div>
              <div class="k-stat-value">${medianDurYears}<span style="font-size:16px;font-weight:400;color:#81A487">yr</span></div>
              <div class="k-stat-sub">living with headaches</div>
            </div>` : ''}
            ${freqData.length ? `
            <div class="k-stat">
              <div class="k-stat-label">Median frequency</div>
              <div class="k-stat-value">${medianFreq}<span style="font-size:16px;font-weight:400;color:#81A487">/mo</span></div>
              <div class="k-stat-sub">headache days per month</div>
            </div>` : ''}
            ${daysData.length ? `
            <div class="k-stat">
              <div class="k-stat-label">Median last month</div>
              <div class="k-stat-value">${medianDays}<span style="font-size:16px;font-weight:400;color:#81A487">d</span></div>
              <div class="k-stat-sub">headache days reported</div>
            </div>
            <div class="k-stat">
              <div class="k-stat-label">Chronic (≥15 days)</div>
              <div class="k-stat-value">${pct(chronicCount, daysData.length)}%</div>
              <div class="k-stat-sub">of respondents with data</div>
            </div>` : ''}
          </div>

          <div class="k-two-col">
            ${durationMonths.length ? `
            <div class="k-card">
              <div class="k-card-title">How long they've had headaches</div>
              <div class="k-card-sub">Parsed from free-text entry · n=${durationMonths.length}</div>
              ${barRows(durationBucketCounts, durationMonths.length)}
            </div>` : ''}
            ${freqData.length ? `
            <div class="k-card">
              <div class="k-card-title">Headache frequency</div>
              <div class="k-card-sub">Normalized to days/month · n=${freqData.length}</div>
              ${barRows(freqBucketCounts, freqData.length)}
            </div>` : ''}
          </div>

          ${daysData.length ? `
          <div class="k-card">
            <div class="k-card-title">Days with headache last month</div>
            <div class="k-card-sub">Distribution across ${daysData.length} respondents · median ${medianDays} days · ${pct(chronicCount, daysData.length)}% at chronic threshold (≥15)</div>
            <div style="height:180px;position:relative;margin-top:16px;">
              <canvas id="chart-days-density"></canvas>
            </div>
          </div>` : ''}
          ` : ''}
        </div>

        <div id="sec-who" class="k-section">
          <div class="k-card">
            <div class="k-card-title">Age brackets</div>
            <div class="k-card-sub">Among all eligible respondents (n=${eligible.length})</div>
            ${barRows(ageCounts, eligible.length)}
          </div>

          <div class="k-two-col">
            <div class="k-card">
              <div class="k-card-title">Gender</div>
              ${barRows(genderCounts, N)}
            </div>
            <div class="k-card">
              <div class="k-card-title">Education</div>
              ${barRows(countField(completed, 'education_level'), N)}
            </div>
          </div>

          <div class="k-card">
            <div class="k-card-title">Work situation</div>
            ${barRows(countField(completed, 'work_situation'), N)}
          </div>

          <div class="k-card">
            <div class="k-card-title">Geographic distribution</div>
            <div class="k-card-sub">Bubble size = respondent count &middot; Color intensity = % of total sample</div>
            <div id="country-map" style="position:relative;margin:12px 0 16px;"></div>
            <div style="border-top:1px solid #D6DAD7;padding-top:12px;">
              <div class="k-card-sub" style="margin-bottom:8px;">Top countries</div>
              ${barRows(countryCounts, N, 10)}
            </div>
          </div>
        </div>

      </div>
    `;

    renderBubbleMap('country-map', countryCounts, N);
    if (daysData.length) renderDensityChart('chart-days-density', daysData);

  } catch(e) {
    document.getElementById('app').innerHTML = `
      <div style="padding:32px;">
        <div class="k-error">Could not load survey data: ${e.message}</div>
      </div>`;
  }
}

function showSection(id, btn) {
  document.querySelectorAll('.k-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.k-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  btn.classList.add('active');
}

function highlightStage(i) {
  document.querySelectorAll('.k-stage-card').forEach((c,j) => {
    c.classList.toggle('selected', i === j);
  });
  const detail = document.getElementById('stage-detail');
  const inner = document.getElementById('stage-detail-inner');
  const card = document.querySelectorAll('.k-stage-card')[i];
  if (card) {
    const name = card.querySelector('.k-stage-name').textContent;
    const p = card.querySelector('.k-stage-pct').textContent;
    inner.innerHTML = `<p style="font-size:14px;color:#3D4D3F;line-height:1.6;"><strong style="color:#253027">${p} of respondents</strong> describe themselves as: <em>"${name}"</em>. Use the <strong>Diagnosis</strong>, <strong>Treatment</strong>, and <strong>Living with it</strong> tabs to explore patterns for this group.</p>`;
    detail.style.display = 'block';
  }
}

init();
