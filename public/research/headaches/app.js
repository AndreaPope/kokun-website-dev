// State and Navigation for Kokun Care Journey Survey

// Tracks user answers
const surveyData = {
  age_bracket: null,
  age_eligible: null,
  headache_eligible: null,
  gender: null,
  gender_self_describe: "",
  assigned_female_at_birth: null,
  ethnic_background_categories: [],
  ethnic_background_another: "",
  ethnic_background_selfdesc: "",
  cultural_identity_detail: "",
  country: "",
  city: "",
  postal_code: "",
  education_level: null,
  education_other: "",
  work_situation: [],
  work_situation_other: "",
  work_type_multi: [],
  work_type_multi_other: "",
  headache_types: [],
  headache_type_other: "",
  migraine_subtypes: [],
  migraine_subtype_other: "",
  duration_onset: "",
  frequency_count: null,
  frequency_period: "Month",
  days_in_last_month: null,
  functional_impact: null,
  qol_severe_pain: null,
  qol_limit_activities: null,
  qol_wish_lie_down: null,
  qol_tired_from_headaches: null,
  qol_irritated_from_headaches: null,
  qol_limit_concentration: null,
  diagnosis_status: null,
  doctor_diagnosed_by: null,
  doctor_diagnosed_by_other: "",
  time_to_diagnosis: "",
  satisfaction_rating: null,
  satisfaction_reason: "",
  diagnosis_barriers: {},
  diagnosis_barriers_other: "",
  overcoming_barriers_text: "",
  reasons_no_diagnosis: {},
  reasons_no_diagnosis_other: "",
  comorbidities: {},
  path_to_diagnosis_changes: "",
  treatments: [],
  treatment_details: {},
  treatments_not_working: [],
  treatment_not_working_details: {},
  confidence_understanding: null,
  confidence_management: null,
  journey_stage: null,
  journey_stage_other: "",
  challenges_in_care: {},
  challenges_in_care_other: "",
  felt_dismissed: null,
  felt_dismissed_details: "",
  unmet_needs: "",
  email: "",
  subscribed_to_updates: false
};

// Navigation History Stack
let slideHistory = [];
let currentSlideId = "slide-intro";
let partialRowCreated = false;

// Session metadata — captured once at page load
const sessionMeta = (() => {
  const ua = navigator.userAgent;

  const getOS = () => {
    if (/iP(hone|ad|od)/.test(ua)) return "iOS";
    if (/Android/.test(ua)) return "Android";
    if (/Mac OS X/.test(ua) && !/iP/.test(ua)) return "macOS";
    if (/Windows/.test(ua)) return "Windows";
    if (/Linux/.test(ua)) return "Linux";
    return "Unknown";
  };

  const getBrowser = () => {
    if (/Edg\/(\d+)/.test(ua)) return `Edge ${ua.match(/Edg\/(\d+)/)[1]}`;
    if (/OPR\/(\d+)/.test(ua)) return `Opera ${ua.match(/OPR\/(\d+)/)[1]}`;
    if (/Chrome\/(\d+)/.test(ua) && !/Chromium/.test(ua)) return `Chrome ${ua.match(/Chrome\/(\d+)/)[1]}`;
    if (/Firefox\/(\d+)/.test(ua)) return `Firefox ${ua.match(/Firefox\/(\d+)/)[1]}`;
    if (/Safari\/(\d+)/.test(ua) && !/Chrome/.test(ua)) {
      const v = ua.match(/Version\/(\d+)/);
      return `Safari ${v ? v[1] : ""}`;
    }
    return "Unknown";
  };

  const getDeviceType = () => {
    if (/Mobi|Android|iP(hone|od)/.test(ua)) return "Mobile";
    if (/iPad|Tablet/.test(ua) || (navigator.maxTouchPoints > 1 && /Mac/.test(ua))) return "Tablet";
    return "Desktop";
  };

  const sessionId = crypto.randomUUID();

  return {
    sessionId,
    startedAt: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    browser: getBrowser(),
    deviceType: getDeviceType(),
    os: getOS(),
  };
})();

// Maps each slide to a named stage (null = no stage shown)
const stageMap = {
  "slide-intro": null,
  "slide-q1-1": null,
  "slide-q1-2": null,
  "slide-ineligible": null,
  "slide-section-profile": null,
  "slide-q2-1": "profile",
  "slide-q2-2": "profile",
  "slide-q2-3a": "profile",
  "slide-q2-3b": "profile",
  "slide-q2-4": "profile",
  "slide-q2-5": "profile",
  "slide-q2-6a": "profile",
  "slide-q2-6b": "profile",
  "slide-q3-1": "symptoms",
  "slide-q3-2": "symptoms",
  "slide-q3-3": "symptoms",
  "slide-q3-4": "symptoms",
  "slide-q3-5": "symptoms",
  "slide-q3-6": "symptoms",
  "slide-q3-7": "symptoms",
  "slide-q3-8": "symptoms",
  "slide-q4-1": "diagnosis",
  "slide-q4-2a": "diagnosis",
  "slide-q4-2b": "diagnosis",
  "slide-q4-2c": "diagnosis",
  "slide-q4-2d": "diagnosis",
  "slide-q4-2e": "diagnosis",
  "slide-q4-3a": "diagnosis",
  "slide-q4-3b": "diagnosis",
  "slide-q5": "treatment",
  "slide-q5b": "treatment",
  "slide-q6-1": "experience",
  "slide-q6-2": "experience",
  "slide-q6-3": "experience",
  "slide-q6-4": "experience",
  "slide-q6-5": "experience",
  "slide-q7": "experience",
  "slide-end": null
};

const stageOrder = ["profile", "symptoms", "diagnosis", "treatment", "experience"];

const Q7_MIGRAINE_TYPES = [
  'Migraine without aura',
  'Migraine with aura',
  'Migraine with brainstem aura',
  'Hemiplegic migraine',
  'Vestibular migraine',
  'Chronic migraine',
  'Hormonal or Menstrual migraine',
  'Abdominal migraine',
  'Cyclical Vomiting Syndrome',
  'I do not experience migraine',
  'I do not know the type',
  'Other',
  'Prefer not to share',
];

// Map of country list
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo (DRC)", "Congo (Republic)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe",
  "Other"
];

// Initialize application on load
document.addEventListener("DOMContentLoaded", () => {
  setupCountryDropdown();
  setupEventListeners();
  setupEthnicBackgroundOptions();
  populateQ7Fields();
  updateProgress();
  setupDynamicWordingEngine();
  createSessionRecord();
  setupDevJump();
});

function setupDevJump() {
  const panel = document.getElementById("dev-jump");
  const select = document.getElementById("dev-jump-select");
  if (!panel || !select) return;

  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "D") {
      panel.style.display = panel.style.display === "flex" ? "none" : "flex";
    }
  });

  select.addEventListener("change", () => {
    const target = select.value;
    if (!target) return;
    document.querySelectorAll(".survey-slide").forEach(s => s.classList.remove("active"));
    const slide = document.getElementById(target);
    if (slide) {
      slide.classList.add("active");
      currentSlideId = target;
      slideHistory = [];
      updateProgress();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    select.value = "";
  });
}

function getSupabaseHeaders() {
  const anonKey = SUPABASE_CONFIG.anonKey;
  return {
    "apikey": anonKey,
    "Authorization": `Bearer ${anonKey}`,
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
  };
}

function isSupabaseConfigured() {
  const { url, anonKey } = SUPABASE_CONFIG;
  return url && !url.includes("YOUR_SUPABASE") && anonKey && !anonKey.includes("YOUR_SUPABASE");
}

function createSessionRecord() {
  if (!isSupabaseConfigured()) return;
  const now = new Date().toISOString();
  fetch(`${SUPABASE_CONFIG.url}/rest/v1/survey_sessions`, {
    method: "POST",
    headers: getSupabaseHeaders(),
    body: JSON.stringify({
      session_id: sessionMeta.sessionId,
      started_at: now,
      last_slide_seen: "slide-intro",
      last_slide_at: now,
      timezone: sessionMeta.timezone,
      browser: sessionMeta.browser,
      device_type: sessionMeta.deviceType,
      os: sessionMeta.os,
      completed: false
    })
  })
  .then(async res => {
    if (!res.ok && res.status !== 409) {
      const text = await res.text();
      console.error("createSessionRecord error", res.status, text);
    }
  })
  .catch(err => console.error("createSessionRecord failed:", err));
}

function updateSessionSlide(slideId) {
  if (!isSupabaseConfigured()) return;
  fetch(`${SUPABASE_CONFIG.url}/rest/v1/rpc/update_session_slide`, {
    method: "POST",
    headers: getSupabaseHeaders(),
    body: JSON.stringify({ p_session_id: sessionMeta.sessionId, p_slide_id: slideId })
  }).catch(() => {});
}

function markSessionComplete() {
  if (!isSupabaseConfigured()) return;
  fetch(`${SUPABASE_CONFIG.url}/rest/v1/rpc/mark_session_complete`, {
    method: "POST",
    headers: getSupabaseHeaders(),
    body: JSON.stringify({ p_session_id: sessionMeta.sessionId })
  }).catch(() => {});
}

function autoSaveProgress() {
  if (!isSupabaseConfigured()) return;
  const payload = {
    ...surveyData,
    age_eligible: (surveyData.age_bracket !== "Under 18" && surveyData.age_bracket !== null),
    started_at: sessionMeta.startedAt,
    timezone: sessionMeta.timezone,
    browser: sessionMeta.browser,
    device_type: sessionMeta.deviceType,
    os: sessionMeta.os,
    session_id: sessionMeta.sessionId
  };

  if (!partialRowCreated) {
    // First save: plain INSERT (requires only INSERT policy)
    fetch(`${SUPABASE_CONFIG.url}/rest/v1/survey_responses`, {
      method: "POST",
      headers: getSupabaseHeaders(),
      body: JSON.stringify(payload)
    })
    .then(async res => {
      if (res.ok) {
        partialRowCreated = true;
      } else {
        const text = await res.text();
        console.error("autoSaveProgress INSERT error", res.status, text);
      }
    })
    .catch(err => console.error("autoSaveProgress failed:", err));
  } else {
    // Subsequent saves: call SECURITY DEFINER function (bypasses SELECT policy requirement)
    fetch(`${SUPABASE_CONFIG.url}/rest/v1/rpc/save_survey_progress`, {
      method: "POST",
      headers: getSupabaseHeaders(),
      body: JSON.stringify({ p_session_id: sessionMeta.sessionId, p_data: payload })
    })
    .then(async res => {
      if (!res.ok) {
        const text = await res.text();
        console.error("autoSaveProgress error", res.status, text);
      }
    })
    .catch(err => console.error("autoSaveProgress failed:", err));
  }
}

const EU_POSTAL_HIDDEN = new Set(["France", "Cyprus"]);

function getPostalConfig(country) {
  if (EU_POSTAL_HIDDEN.has(country)) return { show: false };
  return { show: true };
}

function updatePostalField(country) {
  const cityWrapper = document.getElementById("q2-4-city-wrapper");
  const wrapper = document.getElementById("q2-4-postal-wrapper");
  const input = document.getElementById("q2-4-postal");
  const cityInput = document.getElementById("q2-4-city");
  if (!wrapper) return;
  const showCityAndPostal = !!country && !EU_POSTAL_HIDDEN.has(country);
  if (cityWrapper) {
    cityWrapper.style.display = showCityAndPostal ? "" : "none";
    if (!showCityAndPostal && cityInput) cityInput.value = "";
  }
  if (showCityAndPostal) {
    wrapper.style.display = "";
    if (input) input.value = "";
  } else {
    wrapper.style.display = "none";
    if (input) input.value = "";
  }
}

function setupEthnicBackgroundOptions() {
  const container = document.getElementById("q2-3a-options");
  if (!container) return;

  const pntaOpt = document.getElementById("q2-3a-pnta");
  if (!pntaOpt) return;

  pntaOpt.querySelector(".multi-option-header").addEventListener("click", () => {
    if (pntaOpt.classList.contains("selected")) {
      container.querySelectorAll(".multi-option").forEach(el => {
        if (el !== pntaOpt) el.classList.remove("selected");
      });
      surveyData.ethnic_background_categories = ["Prefer not to answer"];
    }
  });

  container.querySelectorAll(".multi-option:not(#q2-3a-pnta)").forEach(opt => {
    opt.querySelector(".multi-option-header").addEventListener("click", () => {
      if (pntaOpt.classList.contains("selected")) {
        pntaOpt.classList.remove("selected");
        surveyData.ethnic_background_categories = surveyData.ethnic_background_categories.filter(v => v !== "Prefer not to answer");
      }
    });
  });
}

// Setup the country drop-down list
function setupCountryDropdown() {
  const select = document.getElementById("q2-4-country");
  if (!select) return;
  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => {
    updatePostalField(select.value);
    const slide = select.closest(".survey-slide");
    if (slide) slide.querySelectorAll(".validation-error.active").forEach(el => el.classList.remove("active"));
  });
}

// Global Wording Engine to substitute headache with migraine if Q3.1 has migraine selected
function hasMigraine() {
  return surveyData.headache_types && surveyData.headache_types.includes("Migraine");
}

function updateDynamicWording() {
  const targetWord = hasMigraine() ? "migraine" : "headache";
  const targetWordPlural = hasMigraine() ? "migraine" : "headache"; // Survey text uses singular/plural accordingly
  
  document.querySelectorAll("[data-dynamic-word]").forEach(el => {
    const originalText = el.getAttribute("data-dynamic-word-orig") || el.innerHTML;
    if (!el.getAttribute("data-dynamic-word-orig")) {
      el.setAttribute("data-dynamic-word-orig", originalText);
    }
    
    // Replace terms
    let newText = originalText
      .replace(/headaches/g, hasMigraine() ? "migraine" : "headaches")
      .replace(/headache/g, hasMigraine() ? "migraine" : "headache")
      .replace(/Headaches/g, hasMigraine() ? "Migraine" : "Headaches")
      .replace(/Headache/g, hasMigraine() ? "Migraine" : "Headache");
      
    el.innerHTML = newText;
  });
}

function setupDynamicWordingEngine() {
  // Save initial texts
  document.querySelectorAll("[data-dynamic-word]").forEach(el => {
    el.setAttribute("data-dynamic-word-orig", el.innerHTML);
  });
}

// Progress computation and DOM updates
function updateProgress() {
  const currentStage = stageMap[currentSlideId] || null;
  const currentIndex = stageOrder.indexOf(currentStage);

  document.querySelectorAll(".stage-pill").forEach(el => {
    const stage = el.dataset.stage;
    const idx = stageOrder.indexOf(stage);
    if (currentStage === null) {
      el.removeAttribute("data-state");
    } else if (idx < currentIndex) {
      el.dataset.state = "completed";
    } else if (idx === currentIndex) {
      el.dataset.state = "active";
    } else {
      el.removeAttribute("data-state");
    }
  });
}

// Navigate to a slide (Forward)
function navigateTo(targetId) {
  const currentSlide = document.getElementById(currentSlideId);
  const targetSlide = document.getElementById(targetId);

  if (!targetSlide) return;

  if (currentSlide) {
    currentSlide.classList.remove("active");
  }

  slideHistory.push(currentSlideId);
  currentSlideId = targetId;
  targetSlide.classList.add("active");
  if (targetId === "slide-end") targetSlide.classList.remove("show-confirmation");

  updateSessionSlide(targetId);
  autoSaveProgress();
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigate Back
function navigateBack() {
  if (slideHistory.length === 0) return;
  
  const currentSlide = document.getElementById(currentSlideId);
  const prevSlideId = slideHistory.pop();
  const prevSlide = document.getElementById(prevSlideId);
  
  if (!prevSlide) return;
  
  if (currentSlide) {
    currentSlide.classList.remove("active");
  }
  
  currentSlideId = prevSlideId;
  prevSlide.classList.add("active");
  
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset the entire survey data
function resetSurvey() {
  slideHistory = [];
  currentSlideId = "slide-intro";
  partialRowCreated = false;
  
  // Reset all DOM input values
  document.querySelectorAll("input[type='text'], input[type='email']").forEach(i => i.value = "");
  document.querySelectorAll("select").forEach(s => s.selectedIndex = 0);
  document.querySelectorAll(".option-btn.selected, .multi-option.selected, .sub-option.selected, .multi-option.expanded-group").forEach(el => {
    el.classList.remove("selected");
    el.classList.remove("expanded-group");
  });
  document.querySelectorAll(".nested-subcategories").forEach(el => {
    el.classList.remove("expanded");
  });
  
  // Reset data structure
  for (let key in surveyData) {
    if (Array.isArray(surveyData[key])) {
      surveyData[key] = [];
    } else if (typeof surveyData[key] === 'object' && surveyData[key] !== null) {
      surveyData[key] = {};
    } else if (typeof surveyData[key] === 'boolean') {
      surveyData[key] = false;
    } else {
      surveyData[key] = null;
    }
  }
  
  // Show intro
  document.querySelectorAll(".survey-slide").forEach(s => s.classList.remove("active"));
  document.getElementById("slide-intro").classList.add("active");
  updateProgress();
  createSessionRecord();
}

// Form validation before proceeding
function validateCurrentSlide() {
  hideAllErrors();
  
  switch(currentSlideId) {
    case "slide-q1-1":
      if (surveyData.age_bracket === null) {
        showError("q1-1-err");
        return false;
      }
      return true;
      
    case "slide-q1-2":
      if (surveyData.headache_eligible === null) {
        showError("q1-2-err");
        return false;
      }
      return true;
      
    case "slide-q2-1":
      if (!surveyData.gender) {
        showError("q2-1-err");
        return false;
      }
      if (surveyData.gender === "Prefer to self-describe" && !document.getElementById("q2-1-self").value.trim()) {
        showError("q2-1-self-err");
        return false;
      }
      // Save self-describe text
      surveyData.gender_self_describe = document.getElementById("q2-1-self").value.trim();
      return true;
      
    case "slide-q2-2":
      if (!surveyData.assigned_female_at_birth) {
        showError("q2-2-err");
        return false;
      }
      return true;
      
    case "slide-q2-3a":
      if (surveyData.ethnic_background_categories.length === 0) {
        showError("q2-3a-err");
        return false;
      }
      return true;

    case "slide-q2-3b": {
      const detail = document.getElementById("q2-3-eth").value.trim();
      if (surveyData.ethnic_background_categories.includes("Prefer to self-describe") && !detail) {
        showError("q2-3b-err");
        return false;
      }
      surveyData.cultural_identity_detail = detail;
      return true;
    }

    case "slide-q2-4": {
      const countryVal = document.getElementById("q2-4-country").value;
      const postalEl = document.getElementById("q2-4-postal");
      const cityEl = document.getElementById("q2-4-city");
      const postalVal = postalEl ? postalEl.value.trim() : "";
      const cityVal = cityEl ? cityEl.value.trim() : "";
      if (!countryVal) {
        showError("q2-4-country-err");
        return false;
      }
      const needsCityAndPostal = !EU_POSTAL_HIDDEN.has(countryVal);
      if (needsCityAndPostal && !cityVal) {
        showError("q2-4-city-err");
        return false;
      }
      if (needsCityAndPostal && getPostalConfig(countryVal).show && !postalVal) {
        showError("q2-4-postal-err");
        return false;
      }
      surveyData.country = countryVal;
      surveyData.city = needsCityAndPostal ? cityVal : "";
      surveyData.postal_code = needsCityAndPostal && getPostalConfig(countryVal).show ? postalVal : "";
      return true;
    }
      
    case "slide-q2-5":
      if (!surveyData.education_level) {
        showError("q2-5-err");
        return false;
      }
      if (surveyData.education_level === "Other" && !document.getElementById("q2-5-other").value.trim()) {
        showError("q2-5-other-err");
        return false;
      }
      surveyData.education_other = document.getElementById("q2-5-other").value.trim();
      return true;
      
    case "slide-q2-6a":
      if (surveyData.work_situation.length === 0) {
        showError("q2-6a-err");
        return false;
      }
      if (surveyData.work_situation.includes("Other") && !document.getElementById("q2-6a-other").value.trim()) {
        showError("q2-6a-other-err");
        return false;
      }
      surveyData.work_situation_other = document.getElementById("q2-6a-other").value.trim();
      return true;

    case "slide-q2-6b":
      if (surveyData.work_type_multi.length === 0) {
        showError("q2-6b-err");
        return false;
      }
      if (surveyData.work_type_multi.includes("Other") && !document.getElementById("q2-6b-other").value.trim()) {
        showError("q2-6b-other-err");
        return false;
      }
      surveyData.work_type_multi_other = document.getElementById("q2-6b-other").value.trim();
      return true;
      
    case "slide-q3-1":
      if (surveyData.headache_types.length === 0) {
        showError("q3-1-err");
        return false;
      }
      if (surveyData.headache_types.includes("Other") && !document.getElementById("q3-1-other").value.trim()) {
        showError("q3-1-other-err");
        return false;
      }
      surveyData.headache_type_other = document.getElementById("q3-1-other").value.trim();
      return true;
      
    case "slide-q3-2":
      if (surveyData.migraine_subtypes.length === 0) {
        showError("q3-2-err");
        return false;
      }
      if (surveyData.migraine_subtypes.includes("Other") && !document.getElementById("q3-2-other").value.trim()) {
        showError("q3-2-other-err");
        return false;
      }
      surveyData.migraine_subtype_other = document.getElementById("q3-2-other").value.trim();
      return true;
      
    case "slide-q3-3":
      const yearsVal = document.getElementById("q3-3-years").value.trim();
      const monthsVal = document.getElementById("q3-3-months").value.trim();
      if (!yearsVal && !monthsVal) {
        showError("q3-3-err");
        return false;
      }
      const years = parseInt(yearsVal, 10);
      const months = parseInt(monthsVal, 10);
      if ((yearsVal && (isNaN(years) || years < 0)) || (monthsVal && (isNaN(months) || months < 0 || months > 11))) {
        showError("q3-3-err");
        return false;
      }
      let durationStr = "";
      if (yearsVal && monthsVal) {
        durationStr = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
      } else if (yearsVal) {
        durationStr = `${years} year${years !== 1 ? 's' : ''}`;
      } else {
        durationStr = `${months} month${months !== 1 ? 's' : ''}`;
      }
      surveyData.duration_onset = durationStr;
      return true;
      
    case "slide-q3-4":
      const freqCount = parseInt(document.getElementById("q3-4-count").value, 10);
      const freqPeriod = document.getElementById("q3-4-period").value;
      
      if (isNaN(freqCount) || freqCount <= 0) {
        showError("q3-4-err");
        return false;
      }
      
      // Basic logic validations matching instruction notes
      if (freqPeriod === "Week" && freqCount > 7) {
        showError("q3-4-val-err");
        return false;
      }
      if (freqPeriod === "Month" && freqCount > 31) {
        showError("q3-4-val-err");
        return false;
      }
      if (freqPeriod === "Year" && freqCount > 365) {
        showError("q3-4-val-err");
        return false;
      }
      
      surveyData.frequency_count = freqCount;
      surveyData.frequency_period = freqPeriod;
      return true;
      
    case "slide-q3-5":
      const daysCount = parseInt(document.getElementById("q3-5-count").value, 10);
      if (isNaN(daysCount) || daysCount < 0 || daysCount > 31) {
        showError("q3-5-err");
        return false;
      }
      surveyData.days_in_last_month = daysCount;
      return true;
      
    case "slide-q3-6":
      if (!surveyData.functional_impact) {
        showError("q3-6-err");
        return false;
      }
      return true;
      
    case "slide-q3-7":
      const qolFields = ["pain", "limit", "lie", "tired", "irritated", "concentrate"];
      for (let f of qolFields) {
        const checkedRadio = document.querySelector(`input[name="qol-${f}"]:checked`);
        if (!checkedRadio) {
          showError(`q3-7-${f}-err`);
          return false;
        }
      }
      
      // Assign data
      surveyData.qol_severe_pain = document.querySelector(`input[name="qol-pain"]:checked`).value;
      surveyData.qol_limit_activities = document.querySelector(`input[name="qol-limit"]:checked`).value;
      surveyData.qol_wish_lie_down = document.querySelector(`input[name="qol-lie"]:checked`).value;
      surveyData.qol_tired_from_headaches = document.querySelector(`input[name="qol-tired"]:checked`).value;
      surveyData.qol_irritated_from_headaches = document.querySelector(`input[name="qol-irritated"]:checked`).value;
      surveyData.qol_limit_concentration = document.querySelector(`input[name="qol-concentrate"]:checked`).value;
      return true;

    case "slide-q3-8": {
      if (Object.keys(surveyData.comorbidities).length === 0) {
        showError("q3-8-err");
        return false;
      }
      if ("Autoimmune Disorders - (please specify)" in surveyData.comorbidities) {
        const v = document.getElementById("q3-8-autoimmune-other")?.value.trim();
        if (!v) { showError("q3-8-autoimmune-other-err"); return false; }
        surveyData.comorbidities["Autoimmune Disorders - (please specify)"] = [v];
      }
      if ("Cancer - (please specify)" in surveyData.comorbidities) {
        const v = document.getElementById("q3-8-cancer-other")?.value.trim();
        if (!v) { showError("q3-8-cancer-other-err"); return false; }
        surveyData.comorbidities["Cancer - (please specify)"] = [v];
      }
      if ("Other (please specify)" in surveyData.comorbidities) {
        const v = document.getElementById("q3-8-other-other")?.value.trim();
        if (!v) { showError("q3-8-other-other-err"); return false; }
        surveyData.comorbidities["Other (please specify)"] = [v];
      }
      return true;
    }

    case "slide-q4-1":
      if (!surveyData.diagnosis_status) {
        showError("q4-1-err");
        return false;
      }
      return true;
      
    // Path 1
    case "slide-q4-2a":
      if (!surveyData.doctor_diagnosed_by) {
        showError("q4-2a-err");
        return false;
      }
      if (surveyData.doctor_diagnosed_by === "Other" && !document.getElementById("q4-2a-other").value.trim()) {
        showError("q4-2a-other-err");
        return false;
      }
      surveyData.doctor_diagnosed_by_other = document.getElementById("q4-2a-other").value.trim();
      return true;
      
    case "slide-q4-2b":
      const dxTimeVal = document.getElementById("q4-2b-time").value.trim();
      const dxTimePeriod = document.getElementById("q4-2b-period").value;
      if (!dxTimeVal || isNaN(parseInt(dxTimeVal))) {
        showError("q4-2b-err");
        return false;
      }
      surveyData.time_to_diagnosis = `${dxTimeVal} ${dxTimePeriod}`;
      return true;
      
    case "slide-q4-2c": {
      if (!surveyData.satisfaction_rating) {
        showError("q4-2c-err");
        return false;
      }
      const reasonVal = document.getElementById("q4-2c-reason").value.trim();
      if (!reasonVal) {
        showError("q4-2c-reason-err");
        return false;
      }
      surveyData.satisfaction_reason = reasonVal;
      return true;
    }
      
    case "slide-q4-2d":
      const hasBarriers = Object.keys(surveyData.diagnosis_barriers).length > 0;
      if (!hasBarriers) {
        showError("q4-2d-err");
        return false;
      }
      if (surveyData.diagnosis_barriers["Other"] && !document.getElementById("q4-2d-other").value.trim()) {
        showError("q4-2d-other-err");
        return false;
      }
      surveyData.diagnosis_barriers_other = document.getElementById("q4-2d-other").value.trim();
      return true;
      
    case "slide-q4-2e":
      surveyData.overcoming_barriers_text = document.getElementById("q4-2e-text").value.trim();
      return true;
      
    // Path 2
    case "slide-q4-3a":
      const hasNoDxReasons = Object.keys(surveyData.reasons_no_diagnosis).length > 0;
      if (!hasNoDxReasons) {
        showError("q4-3a-err");
        return false;
      }
      if (surveyData.reasons_no_diagnosis["Other"] && !document.getElementById("q4-3a-other").value.trim()) {
        showError("q4-3a-other-err");
        return false;
      }
      surveyData.reasons_no_diagnosis_other = document.getElementById("q4-3a-other").value.trim();
      return true;
      
    case "slide-q4-3b": {
      const q43bVal = document.getElementById("q4-3b-text").value.trim();
      if (!q43bVal) {
        showError("q4-3b-err");
        return false;
      }
      surveyData.path_to_diagnosis_changes = q43bVal;
      return true;
    }
      
    // Section 5
    case "slide-q5":
      if (surveyData.treatments.length === 0) {
        showError("q5-err");
        return false;
      }
      if (surveyData.treatments.includes("Other") && !document.getElementById("q5-other-specify").value.trim()) {
        showError("q5-other-err");
        return false;
      }
      // Populate treatment details from text values
      surveyData.treatment_details = {};
      surveyData.treatments.forEach(t => {
        const inp = document.getElementById(`q5-${t.toLowerCase().replace(/[^a-z]/g, '')}-specify`);
        if (inp) {
          surveyData.treatment_details[t] = inp.value.trim();
        }
      });
      return true;

    case "slide-q5b":
      if (surveyData.treatments_not_working.length === 0) {
        showError("q5b-err");
        return false;
      }
      if (surveyData.treatments_not_working.includes("Other") && !document.getElementById("q5b-other-specify").value.trim()) {
        showError("q5b-other-err");
        return false;
      }
      surveyData.treatment_not_working_details = {};
      surveyData.treatments_not_working.forEach(t => {
        const inp = document.getElementById(`q5b-${t.toLowerCase().replace(/[^a-z]/g, '')}-specify`);
        if (inp) {
          surveyData.treatment_not_working_details[t] = inp.value.trim();
        }
      });
      return true;

    // Section 6
    case "slide-q6-1":
      const understandingBtn = document.querySelector("[data-field='q6-1a'] .option-btn.selected");
      const managementBtn = document.querySelector("[data-field='q6-1b'] .option-btn.selected");
      if (!understandingBtn) {
        showError("q6-1a-err");
        return false;
      }
      if (!managementBtn) {
        showError("q6-1b-err");
        return false;
      }
      surveyData.confidence_understanding = understandingBtn.getAttribute("data-val");
      surveyData.confidence_management = managementBtn.getAttribute("data-val");
      return true;
      
    case "slide-q6-2":
      if (!surveyData.journey_stage) {
        showError("q6-2-err");
        return false;
      }
      if (surveyData.journey_stage === "Other" && !document.getElementById("q6-2-other").value.trim()) {
        showError("q6-2-other-err");
        return false;
      }
      surveyData.journey_stage_other = document.getElementById("q6-2-other").value.trim();
      return true;
      
    case "slide-q6-3":
      const hasChallenges = Object.keys(surveyData.challenges_in_care).length > 0 || surveyData.challenges_in_care_other;
      if (!hasChallenges) {
        showError("q6-3-err");
        return false;
      }
      if (document.getElementById("challenges_in_care_other-other-wrapper").style.display !== "none" && !document.getElementById("q6-3-other").value.trim()) {
        showError("q6-3-other-err");
        return false;
      }
      surveyData.challenges_in_care_other = document.getElementById("q6-3-other").value.trim();
      return true;
      
    case "slide-q6-4":
      if (!surveyData.felt_dismissed) {
        showError("q6-4-err");
        return false;
      }
      if (surveyData.felt_dismissed === "Yes" && !document.getElementById("q6-4-details").value.trim()) {
        showError("q6-4-details-err");
        return false;
      }
      surveyData.felt_dismissed_details = document.getElementById("q6-4-details").value.trim();
      return true;
      
    case "slide-q6-5":
      const needs = document.getElementById("q6-5-needs").value.trim();
      if (!needs) {
        showError("q6-5-err");
        return false;
      }
      surveyData.unmet_needs = needs;
      return true;
      
    case "slide-q7":
      const emailVal = document.getElementById("q7-email").value.trim();
      const optedOut = document.getElementById("q7-optout")?.classList.contains("selected");

      if (!emailVal && !optedOut) {
        showError("q7-err");
        return false;
      }
      
      if (emailVal) {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
          showError("q7-format-err");
          return false;
        }
        surveyData.email = emailVal;
        surveyData.subscribed_to_updates = true;
      } else {
        surveyData.email = null;
        surveyData.subscribed_to_updates = false;
      }
      return true;
  }
  return true;
}

function showError(errId) {
  const el = document.getElementById(errId);
  if (el) el.classList.add("active");
}

function hideAllErrors() {
  document.querySelectorAll(".validation-error").forEach(el => {
    el.classList.remove("active");
  });
}

// Forward Navigation Handler with Branching Rules
function handleNext() {
  if (!validateCurrentSlide()) return;
  
  switch(currentSlideId) {
    case "slide-intro":
      navigateTo("slide-q1-1");
      break;
      
    case "slide-q1-1":
      navigateTo("slide-q1-2");
      break;

    case "slide-q1-2":
      if (surveyData.age_bracket === "Under 18" || surveyData.headache_eligible === "No") {
        navigateTo("slide-ineligible");
      } else {
        navigateTo("slide-q2-1"); // skip slide-section-profile (commented out)
      }
      break;

    // case "slide-section-profile": navigateTo("slide-q2-1"); break; // restore with section divider
      
    case "slide-q2-1":
      navigateTo("slide-q2-2");
      break;
      
    case "slide-q2-2":
      navigateTo("slide-q2-3a");
      break;

    case "slide-q2-3a":
      navigateTo("slide-q2-3b");
      break;

    case "slide-q2-3b":
      navigateTo("slide-q2-4");
      break;
      
    case "slide-q2-4":
      navigateTo("slide-q2-5");
      break;
      
    case "slide-q2-5":
      navigateTo("slide-q2-6a");
      break;

    case "slide-q2-6a":
      navigateTo("slide-q2-6b");
      break;

    case "slide-q2-6b":
      navigateTo("slide-q3-1"); // skip slide-section-symptoms (commented out)
      break;

    // case "slide-section-symptoms": navigateTo("slide-q3-1"); break; // restore with section divider
      
    case "slide-q3-1":
      updateDynamicWording();
      if (hasMigraine()) {
        navigateTo("slide-q3-2");
      } else {
        navigateTo("slide-q3-3");
      }
      break;
      
    case "slide-q3-2":
      navigateTo("slide-q3-3");
      break;
      
    case "slide-q3-3":
      navigateTo("slide-q3-4");
      break;
      
    case "slide-q3-4":
      navigateTo("slide-q3-5");
      break;
      
    case "slide-q3-5":
      navigateTo("slide-q3-6");
      break;
      
    case "slide-q3-6":
      navigateTo("slide-q3-7");
      break;
      
    case "slide-q3-7":
      navigateTo("slide-q3-8");
      break;

    case "slide-q3-8":
      navigateTo("slide-q4-1"); // skip slide-section-diagnosis (commented out)
      break;

    // case "slide-section-diagnosis": navigateTo("slide-q4-1"); break; // restore with section divider
      
    case "slide-q4-1":
      if (surveyData.diagnosis_status === "Yes, by a doctor") {
        navigateTo("slide-q4-2a");
      } else if (surveyData.diagnosis_status === "Unsure") {
        navigateTo("slide-q5"); // skip slide-section-treatment (commented out)
      } else {
        navigateTo("slide-q4-3a");
      }
      break;
      
    // Path 1 (Doctor Diagnosed)
    case "slide-q4-2a":
      navigateTo("slide-q4-2b");
      break;
    case "slide-q4-2b":
      navigateTo("slide-q4-2c");
      break;
    case "slide-q4-2c":
      navigateTo("slide-q4-2d");
      break;
    case "slide-q4-2d":
      if ("Didn't experience any major barriers to diagnosis" in surveyData.diagnosis_barriers) {
        navigateTo("slide-q5"); // skip slide-section-treatment (commented out)
      } else {
        navigateTo("slide-q4-2e");
      }
      break;
    case "slide-q4-2e":
      navigateTo("slide-q5"); // skip slide-section-treatment (commented out)
      break;

    // Path 2 (Self/No Diagnosis)
    case "slide-q4-3a":
      navigateTo("slide-q4-3b");
      break;
    case "slide-q4-3b":
      navigateTo("slide-q5"); // skip slide-section-treatment (commented out)
      break;

    // case "slide-section-treatment": navigateTo("slide-q5"); break; // restore with section divider

    // Treatment slides
    case "slide-q5":
      navigateTo("slide-q5b");
      break;

    case "slide-q5b":
      navigateTo("slide-q6-1"); // skip slide-section-experience (commented out)
      break;

    // case "slide-section-experience": navigateTo("slide-q6-1"); break; // restore with section divider
      
    // Section 6
    case "slide-q6-1":
      navigateTo("slide-q6-2");
      break;
      
    case "slide-q6-2":
      if (surveyData.diagnosis_status === "Yes, by a doctor") {
        navigateTo("slide-q6-3");
      } else {
        navigateTo("slide-q6-4");
      }
      break;
      
    case "slide-q6-3":
      navigateTo("slide-q6-4");
      break;
      
    case "slide-q6-4":
      navigateTo("slide-q6-5");
      break;
      
    case "slide-q6-5":
      navigateTo("slide-q7");
      break;
      
    case "slide-q7":
      submitSurvey();
      break;
  }
}

// Setup custom interactive UI elements and event delegation
function setupEventListeners() {
  
  // Back buttons
  document.querySelectorAll(".btn-back").forEach(btn => {
    btn.addEventListener("click", navigateBack);
  });
  
  // Next buttons
  document.querySelectorAll(".btn-next").forEach(btn => {
    btn.addEventListener("click", handleNext);
  });
  
  // Enter key press in numeric/select controls triggers next slide (text inputs excluded)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const activeElement = document.activeElement;
      const isTextInput = activeElement && activeElement.tagName === "INPUT" && activeElement.type === "text";
      if (!isTextInput && activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "SELECT")) {
        e.preventDefault();
        handleNext();
      }
    }
  });

  // Single choice selector (Radio Buttons behaviour)
  document.querySelectorAll(".options-grid[data-type='single']").forEach(grid => {
    const fieldName = grid.getAttribute("data-field");
    grid.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        grid.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        const val = btn.getAttribute("data-val");
        surveyData[fieldName] = val;

        // Clear any validation errors on this slide immediately
        const slide = grid.closest(".survey-slide");
        if (slide) slide.querySelectorAll(".validation-error.active").forEach(el => el.classList.remove("active"));

        // Dynamic visibility overrides for text fields (like "Other" or "Prefer to self-describe")
        toggleConditionalTextFields(fieldName, val);
        
        // Auto-advance for single select slides, but not when a conditional text input is revealed
        const conditionalWrapper = document.getElementById(`${fieldName}-other-wrapper`);
        const showingTextInput = conditionalWrapper && conditionalWrapper.style.display !== 'none';
        const hasAlwaysVisibleInput = fieldName === 'satisfaction_rating' || fieldName === 'email';
        if (!showingTextInput && !hasAlwaysVisibleInput) {
          setTimeout(() => {
            handleNext();
          }, 300);
        }
      });
    });
  });

  // Matrix-style single choice selector (e.g. Q3.7 a-f)
  document.querySelectorAll(".qol-option-group").forEach(group => {
    const clearGroupErrors = () => {
      const slide = group.closest(".survey-slide");
      if (slide) slide.querySelectorAll(".validation-error.active").forEach(el => el.classList.remove("active"));
    };
    group.querySelectorAll("input[type='radio']").forEach(radio => {
      radio.addEventListener("change", clearGroupErrors);
    });
    group.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        clearGroupErrors();
      });
    });
  });

  // Dynamic conversion: convert checkbox-custom to chevron-icon for expandable uncheckable options
  document.querySelectorAll(".multiselect-container[data-type='multi']").forEach(container => {
    const fieldName = container.getAttribute("data-field");
    const isNestedType = (fieldName === "diagnosis_barriers" || fieldName === "reasons_no_diagnosis" || fieldName === "challenges_in_care" || fieldName === "comorbidities");
    if (isNestedType) {
      container.querySelectorAll(".multi-option").forEach(option => {
        if (option.querySelector(".nested-subcategories")) {
          const checkbox = option.querySelector(".multi-option-header .checkbox-custom");
          if (checkbox) {
            checkbox.className = "chevron-icon";
          }
        }
      });
    }
  });

  // Multi-select lists (e.g. Q3.1, Q3.2, Q5)
  document.querySelectorAll(".multiselect-container[data-type='multi']").forEach(container => {
    const fieldName = container.getAttribute("data-field");
    container.querySelectorAll(".multi-option-header").forEach(header => {
      header.addEventListener("click", (e) => {
        const optionEl = header.closest(".multi-option");
        const val = optionEl.getAttribute("data-val");
        const subList = optionEl.querySelector(".nested-subcategories");
        const isNestedType = (fieldName === "diagnosis_barriers" || fieldName === "reasons_no_diagnosis" || fieldName === "challenges_in_care" || fieldName === "comorbidities");

        if (isNestedType && subList) {
          // Top level category is uncheckable and just expandable
          optionEl.classList.toggle("expanded-group");
          const isExpanded = optionEl.classList.contains("expanded-group");
          if (isExpanded) {
            subList.classList.add("expanded");
          } else {
            subList.classList.remove("expanded");
          }
        } else {
          // Leaf options (like "Other" or standard multi-select options)
          optionEl.classList.toggle("selected");
          const isSelected = optionEl.classList.contains("selected");
          const slide = container.closest(".survey-slide");
          if (slide) slide.querySelectorAll(".validation-error.active").forEach(el => el.classList.remove("active"));
          
          if (isSelected) {
            if (isNestedType) {
              if (!surveyData[fieldName]) {
                surveyData[fieldName] = {};
              }
              if (!surveyData[fieldName][val]) {
                surveyData[fieldName][val] = [];
              }
            } else {
              if (!surveyData[fieldName].includes(val)) {
                surveyData[fieldName].push(val);
              }
            }
          } else {
            if (isNestedType) {
              if (surveyData[fieldName]) {
                delete surveyData[fieldName][val];
              }
            } else {
              surveyData[fieldName] = surveyData[fieldName].filter(v => v !== val);
            }
          }
          
          // Toggle subcategories if present
          if (subList) {
            if (isSelected) {
              subList.classList.add("expanded");
            } else {
              subList.classList.remove("expanded");
            }
          }

          // Mutual exclusivity check for treatments page ("Not currently treating" vs others)
          if (fieldName === "treatments") {
            if (val === "Not currently treating") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) {
                    el.classList.remove("selected");
                    const sl = el.querySelector(".nested-subcategories");
                    if (sl) sl.classList.remove("expanded");
                  }
                });
                surveyData.treatments = ["Not currently treating"];
              }
            } else {
              if (isSelected) {
                const noTreatEl = container.querySelector(".multi-option[data-val='Not currently treating']");
                if (noTreatEl && noTreatEl.classList.contains("selected")) {
                  noTreatEl.classList.remove("selected");
                  surveyData.treatments = surveyData.treatments.filter(v => v !== "Not currently treating");
                }
              }
            }
          }

          // Mutual exclusivity for "None / Not applicable" on Q5b
          if (fieldName === "treatments_not_working") {
            if (val === "None / Not applicable") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) {
                    el.classList.remove("selected");
                    const sl = el.querySelector(".nested-subcategories");
                    if (sl) sl.classList.remove("expanded");
                  }
                });
                surveyData.treatments_not_working = ["None / Not applicable"];
              }
            } else {
              if (isSelected) {
                const noneEl = container.querySelector(".multi-option[data-val='None / Not applicable']");
                if (noneEl && noneEl.classList.contains("selected")) {
                  noneEl.classList.remove("selected");
                  surveyData.treatments_not_working = surveyData.treatments_not_working.filter(v => v !== "None / Not applicable");
                }
              }
            }
          }

          // Mutual exclusivity for "no barriers" option on Q4.2D
          const NO_BARRIERS_VAL = "Didn't experience any major barriers to diagnosis";
          if (fieldName === "diagnosis_barriers") {
            if (val === NO_BARRIERS_VAL) {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) {
                    el.classList.remove("selected", "expanded-group");
                    const sl = el.querySelector(".nested-subcategories");
                    if (sl) sl.classList.remove("expanded");
                    el.querySelectorAll(".sub-option.selected").forEach(s => s.classList.remove("selected"));
                  }
                });
                surveyData.diagnosis_barriers = { [NO_BARRIERS_VAL]: [] };
                document.getElementById("diagnosis_barriers_other-other-wrapper").style.display = "none";
              }
            } else {
              if (isSelected) {
                const noBarriersEl = container.querySelector(`.multi-option[data-val="${NO_BARRIERS_VAL}"]`);
                if (noBarriersEl && noBarriersEl.classList.contains("selected")) {
                  noBarriersEl.classList.remove("selected");
                  delete surveyData.diagnosis_barriers[NO_BARRIERS_VAL];
                }
              }
            }
          }
          
          // Mutual exclusivity for "Prefer not to answer" on Q2.6a
          if (fieldName === "work_situation") {
            if (val === "Prefer not to answer") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) el.classList.remove("selected");
                });
                surveyData.work_situation = ["Prefer not to answer"];
                const otherWrapper = document.getElementById("work_situation_other-other-wrapper");
                if (otherWrapper) otherWrapper.style.display = "none";
              }
            } else {
              if (isSelected) {
                const pntaEl = container.querySelector(".multi-option[data-val='Prefer not to answer']");
                if (pntaEl && pntaEl.classList.contains("selected")) {
                  pntaEl.classList.remove("selected");
                  surveyData.work_situation = surveyData.work_situation.filter(v => v !== "Prefer not to answer");
                }
              }
            }
          }

          // Mutual exclusivity for "Prefer not to answer" on Q2.6b
          if (fieldName === "work_type_multi") {
            if (val === "Prefer not to answer") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) el.classList.remove("selected");
                });
                surveyData.work_type_multi = ["Prefer not to answer"];
                const otherWrapper = document.getElementById("work_type_multi_other-other-wrapper");
                if (otherWrapper) otherWrapper.style.display = "none";
              }
            } else {
              if (isSelected) {
                const pntaEl = container.querySelector(".multi-option[data-val='Prefer not to answer']");
                if (pntaEl && pntaEl.classList.contains("selected")) {
                  pntaEl.classList.remove("selected");
                  surveyData.work_type_multi = surveyData.work_type_multi.filter(v => v !== "Prefer not to answer");
                }
              }
            }
          }

          // Mutual exclusivity for "I do not know" on Q3.1
          if (fieldName === "headache_types") {
            if (val === "I do not know") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) el.classList.remove("selected");
                });
                surveyData.headache_types = ["I do not know"];
                const otherWrapper = document.getElementById("headache_types_other-other-wrapper");
                if (otherWrapper) otherWrapper.style.display = "none";
              }
            } else {
              if (isSelected) {
                const idkEl = container.querySelector(".multi-option[data-val='I do not know']");
                if (idkEl && idkEl.classList.contains("selected")) {
                  idkEl.classList.remove("selected");
                  surveyData.headache_types = surveyData.headache_types.filter(v => v !== "I do not know");
                }
              }
            }
          }

          // Mutual exclusivity for "I do not know" on Q3.2
          if (fieldName === "migraine_subtypes") {
            if (val === "I do not know") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) el.classList.remove("selected");
                });
                surveyData.migraine_subtypes = ["I do not know"];
                const otherWrapper = document.getElementById("migraine_subtypes_other-other-wrapper");
                if (otherWrapper) otherWrapper.style.display = "none";
              }
            } else {
              if (isSelected) {
                const idkEl = container.querySelector(".multi-option[data-val='I do not know']");
                if (idkEl && idkEl.classList.contains("selected")) {
                  idkEl.classList.remove("selected");
                  surveyData.migraine_subtypes = surveyData.migraine_subtypes.filter(v => v !== "I do not know");
                }
              }
            }
          }

          // Mutual exclusivity for "Haven't faced any major challenges" on Q6.3
          const NO_CHALLENGES_VAL = "I haven't faced any major challenges with my care";
          if (fieldName === "challenges_in_care") {
            if (val === NO_CHALLENGES_VAL) {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) {
                    el.classList.remove("selected", "expanded-group");
                    const sl = el.querySelector(".nested-subcategories");
                    if (sl) sl.classList.remove("expanded");
                    el.querySelectorAll(".sub-option.selected").forEach(s => s.classList.remove("selected"));
                  }
                });
                surveyData.challenges_in_care = { [NO_CHALLENGES_VAL]: [] };
                const otherWrapper = document.getElementById("challenges_in_care_other-other-wrapper");
                if (otherWrapper) otherWrapper.style.display = "none";
              }
            } else {
              if (isSelected) {
                const noChalEl = container.querySelector(`.multi-option[data-val="${NO_CHALLENGES_VAL}"]`);
                if (noChalEl && noChalEl.classList.contains("selected")) {
                  noChalEl.classList.remove("selected");
                  delete surveyData.challenges_in_care[NO_CHALLENGES_VAL];
                }
              }
            }
          }

          // Mutual exclusivity for comorbidities Q3.8
          const NO_COMORBIDITIES_VAL = "I have not been diagnosed with any other conditions";
          if (fieldName === "comorbidities") {
            if (val === NO_COMORBIDITIES_VAL || val === "Prefer not to answer") {
              if (isSelected) {
                container.querySelectorAll(".multi-option").forEach(el => {
                  if (el !== optionEl) {
                    el.classList.remove("selected", "expanded-group");
                    const sl = el.querySelector(".nested-subcategories");
                    if (sl) sl.classList.remove("expanded");
                    el.querySelectorAll(".sub-option.selected").forEach(s => s.classList.remove("selected"));
                  }
                });
                surveyData.comorbidities = { [val]: [] };
                container.closest(".survey-slide").querySelectorAll(".input-text-wrapper").forEach(w => w.style.display = "none");
              }
            } else {
              if (isSelected) {
                const noComorbEl = container.querySelector(`.multi-option[data-val="${NO_COMORBIDITIES_VAL}"]`);
                if (noComorbEl && noComorbEl.classList.contains("selected")) {
                  noComorbEl.classList.remove("selected");
                  delete surveyData.comorbidities[NO_COMORBIDITIES_VAL];
                }
                const pntaEl = container.querySelector(".multi-option[data-val='Prefer not to answer']");
                if (pntaEl && pntaEl.classList.contains("selected")) {
                  pntaEl.classList.remove("selected");
                  delete surveyData.comorbidities["Prefer not to answer"];
                }
              }
            }
          }

          // Show conditional inputs for options like "Other"
          toggleConditionalTextFields(`${fieldName}_${val.toLowerCase().replace(/[^a-z]/g, '')}`, isSelected ? "active" : "");
        }
      });
    });

    // Handle nested sub-checkbox clicks
    container.querySelectorAll(".sub-option").forEach(sub => {
      sub.addEventListener("click", (e) => {
        e.stopPropagation();
        const parentOptionEl = sub.closest(".multi-option");
        const mainCat = parentOptionEl.getAttribute("data-val");
        const subVal = sub.getAttribute("data-val");
        
        sub.classList.toggle("selected");
        const isSelected = sub.classList.contains("selected");

        const slide = container.closest(".survey-slide");
        if (slide) slide.querySelectorAll(".validation-error.active").forEach(el => el.classList.remove("active"));

        // Initialize map if needed
        if (!surveyData[fieldName]) {
          surveyData[fieldName] = {};
        }
        
        // For nested check questions, surveyData[fieldName] is converted to JSON map structure
        // during save if it has subcategories.
        if (fieldName === "diagnosis_barriers" || fieldName === "reasons_no_diagnosis" || fieldName === "challenges_in_care" || fieldName === "comorbidities") {
          if (!surveyData[fieldName][mainCat]) {
            surveyData[fieldName][mainCat] = [];
          }
          if (isSelected) {
            if (!surveyData[fieldName][mainCat].includes(subVal)) {
              surveyData[fieldName][mainCat].push(subVal);
            }
            // Deselect "Didn't experience any major barriers" when any sub-option is checked
            if (fieldName === "diagnosis_barriers") {
              const NO_BARRIERS_VAL = "Didn't experience any major barriers to diagnosis";
              const noBarriersEl = container.querySelector(`.multi-option[data-val="${NO_BARRIERS_VAL}"]`);
              if (noBarriersEl && noBarriersEl.classList.contains("selected")) {
                noBarriersEl.classList.remove("selected");
                delete surveyData.diagnosis_barriers[NO_BARRIERS_VAL];
              }
            }
            // Deselect "Haven't faced any major challenges" when any sub-option is checked
            if (fieldName === "challenges_in_care") {
              const NO_CHALLENGES_VAL = "I haven't faced any major challenges with my care";
              const noChalEl = container.querySelector(`.multi-option[data-val="${NO_CHALLENGES_VAL}"]`);
              if (noChalEl && noChalEl.classList.contains("selected")) {
                noChalEl.classList.remove("selected");
                delete surveyData.challenges_in_care[NO_CHALLENGES_VAL];
              }
            }
          } else {
            surveyData[fieldName][mainCat] = surveyData[fieldName][mainCat].filter(v => v !== subVal);
            if (surveyData[fieldName][mainCat].length === 0) {
              delete surveyData[fieldName][mainCat];
            }
          }
        }

        // Show/hide text input for sub-options with data-other-wrapper
        const otherWrapperId = sub.getAttribute("data-other-wrapper");
        if (otherWrapperId) {
          const otherWrapper = document.getElementById(otherWrapperId);
          if (otherWrapper) {
            otherWrapper.style.display = isSelected ? "block" : "none";
            if (isSelected) { const inp = otherWrapper.querySelector("input"); if (inp) inp.focus(); }
          }
        }

        // Deselect mutually exclusive options on comorbidities when any sub-option is selected
        if (fieldName === "comorbidities" && isSelected) {
          const noComorbEl = container.querySelector(".multi-option[data-val='I have not been diagnosed with any other conditions']");
          if (noComorbEl && noComorbEl.classList.contains("selected")) {
            noComorbEl.classList.remove("selected");
            delete surveyData.comorbidities["I have not been diagnosed with any other conditions"];
          }
          const pntaEl = container.querySelector(".multi-option[data-val='Prefer not to answer']");
          if (pntaEl && pntaEl.classList.contains("selected")) {
            pntaEl.classList.remove("selected");
            delete surveyData.comorbidities["Prefer not to answer"];
          }
        }
      });
    });
  });

  // Handle accordion show/hide for "Why this matters" details
  document.querySelectorAll(".why-matters-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      const content = toggle.nextElementSibling;
      if (content) {
        content.classList.toggle("open");
      }
    });
  });

  // Q7 opt-out checkbox
  const q7Optout = document.getElementById("q7-optout");
  if (q7Optout) {
    q7Optout.addEventListener("click", () => {
      const isSelected = q7Optout.classList.toggle("selected");
      if (isSelected) {
        clearQ7Fields();
        document.getElementById("q7-err")?.classList.remove("active");
      }
    });
  }
}

// Toggle sub-options check state
function uncheckNestedItems(optionEl) {
  optionEl.querySelectorAll(".sub-option.selected").forEach(sub => {
    sub.classList.remove("selected");
  });
}

// Conditional textbox layouts toggle
function toggleConditionalTextFields(fieldName, val) {
  const otherInputWrapper = document.getElementById(`${fieldName}-other-wrapper`);
  if (otherInputWrapper) {
    if (val === "Other" || val === "Prefer to self-describe" || val === "Yes" || val === "active") {
      otherInputWrapper.style.display = "block";
      const inp = otherInputWrapper.querySelector("input");
      if (inp) inp.focus();
    } else {
      otherInputWrapper.style.display = "none";
    }
  }
}

// Supabase POST Submission
function populateQ7Fields() {
  const countrySelect = document.getElementById('q7-country');
  if (countrySelect && countrySelect.options.length <= 1) {
    countries.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      countrySelect.appendChild(opt);
    });
  }

  const migraineSelect = document.getElementById('q7-migtype');
  if (migraineSelect && migraineSelect.options.length <= 1) {
    Q7_MIGRAINE_TYPES.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      migraineSelect.appendChild(opt);
    });
  }
}

function clearQ7Fields() {
  ['q7-email', 'q7-fname', 'q7-lname'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['q7-country', 'q7-migtype'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.selectedIndex = 0;
  });
}

function submitToMailchimp(email, fname, lname, country, migtype) {
  // Tags only apply via a real form POST (not JSONP). Submit silently via a
  // hidden iframe so the user stays on the end screen.
  let iframe = document.getElementById('mc-hidden-iframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.name = 'mc-hidden-iframe';
    iframe.id = 'mc-hidden-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }

  const form = document.createElement('form');
  form.action = 'https://space.us2.list-manage.com/subscribe/post?u=21828ca842c8b79b81f1b21d2&id=8d32120fc0&f_id=0073fbe3f0';
  form.method = 'POST';
  form.target = 'mc-hidden-iframe';
  form.style.display = 'none';

  const fields = {
    EMAIL: email,
    FNAME: fname || '',
    LNAME: lname || '',
    COUNTRY: country || '',
    MIGTYPE: migtype || '',
    tags: '1937329',
    b_21828ca842c8b79b81f1b21d2_8d32120fc0: '' // honeypot
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  setTimeout(() => form.remove(), 5000);
}

async function submitSurvey() {
  const submitBtn = document.querySelector("#slide-q7 .btn-primary");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
  }

  // Capture Mailchimp contact fields before any navigation changes the DOM
  const mcFname = (document.getElementById('q7-fname') || {}).value?.trim() || '';
  const mcLname = (document.getElementById('q7-lname') || {}).value?.trim() || '';
  const mcCountry = (document.getElementById('q7-country') || {}).value || '';
  const mcMigtype = (document.getElementById('q7-migtype') || {}).value || '';

  if (!isSupabaseConfigured()) {
    console.warn("Supabase credentials not configured. Running in Mock Demo Mode.");
    console.log("Constructed survey payload:", surveyData);
    setTimeout(() => {
      navigateTo("slide-end");
      document.getElementById("slide-end")?.classList.add("show-confirmation");
      if (surveyData.subscribed_to_updates && surveyData.email) {
        submitToMailchimp(surveyData.email, mcFname, mcLname, mcCountry, mcMigtype);
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Complete Survey";
      }
    }, 1500);
    return;
  }

  try {
    const completedAt = new Date().toISOString();
    const payload = {
      ...surveyData,
      age_eligible: (surveyData.age_bracket !== "Under 18" && surveyData.age_bracket !== null),
      started_at: sessionMeta.startedAt,
      completed_at: completedAt,
      timezone: sessionMeta.timezone,
      browser: sessionMeta.browser,
      device_type: sessionMeta.deviceType,
      os: sessionMeta.os,
      session_id: sessionMeta.sessionId
    };

    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/rpc/save_survey_progress`, {
      method: "POST",
      headers: getSupabaseHeaders(),
      body: JSON.stringify({ p_session_id: sessionMeta.sessionId, p_data: payload })
    });

    if (response.ok) {
      console.log("Survey successfully recorded in Supabase!");
      markSessionComplete();
      navigateTo("slide-end");
      document.getElementById("slide-end")?.classList.add("show-confirmation");
      if (surveyData.subscribed_to_updates && surveyData.email) {
        submitToMailchimp(surveyData.email, mcFname, mcLname, mcCountry, mcMigtype);
      }
    } else {
      const errTxt = await response.text();
      throw new Error(errTxt || "Failed to save response");
    }
  } catch (error) {
    console.error("Error submitting survey:", error);
    alert("There was an error saving your survey responses. Please try again.");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Complete Survey";
    }
  }
}

// Share functions
function shareSurvey(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Help make headache and migraine experiences visible by completing the Kōkūn Care Journey Survey.");
  
  let shareUrl = "";
  switch(platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'email':
      shareUrl = `mailto:?subject=Kōkūn Care Journey Research&body=${text}%20${url}`;
      break;
    case 'copy':
      navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.querySelector('.ineligible-actions .btn-primary');
        if (btn) {
          const orig = btn.innerHTML;
          btn.textContent = 'Link Copied!';
          setTimeout(() => { btn.innerHTML = orig; }, 2000);
        }
      });
      return;
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank');
  }
}

// Custom dropdown logic
document.querySelectorAll('.custom-select-trigger').forEach(trigger => {
  const wrapper = trigger.closest('.custom-select-wrapper');
  const optionsList = wrapper.querySelector('.custom-select-options');
  const hiddenSelect = wrapper.querySelector('select');

  const open = () => {
    trigger.classList.add('open');
    optionsList.classList.add('open');
  };

  const close = () => {
    trigger.classList.remove('open');
    optionsList.classList.remove('open');
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    trigger.classList.contains('open') ? close() : open();
  });

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.classList.contains('open') ? close() : open(); }
    if (e.key === 'Escape') close();
  });

  optionsList.querySelectorAll('.custom-select-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const value = opt.dataset.value;
      hiddenSelect.value = value;
      trigger.querySelector('span').textContent = opt.textContent;
      optionsList.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const slide = wrapper.closest(".survey-slide");
      if (slide) slide.querySelectorAll(".validation-error.active").forEach(el => el.classList.remove("active"));
      close();
    });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.custom-select-trigger.open').forEach(t => {
    t.classList.remove('open');
    t.closest('.custom-select-wrapper').querySelector('.custom-select-options').classList.remove('open');
  });
});
