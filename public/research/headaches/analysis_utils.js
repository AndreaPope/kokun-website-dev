function pct(n, total) { return total ? Math.round(n / total * 100) : 0; }

function parseArr(v) {
  if (!v) return [];
  // Supabase returns text[] as JS arrays and jsonb as JS objects directly
  if (Array.isArray(v)) return v.filter(Boolean);
  if (typeof v === 'object') return Object.keys(v).filter(k => v[k]);
  if (v === '[]' || v === '{}') return [];
  try {
    const p = JSON.parse(v);
    if (Array.isArray(p)) return p.filter(Boolean);
    if (typeof p === 'object') return Object.keys(p).filter(k => p[k]);
  } catch(e) {}
  return [];
}

function countField(rows, field) {
  const counts = {};
  rows.forEach(r => {
    const val = r[field];
    if (!val) return;
    const items = parseArr(val);
    if (items.length) {
      items.forEach(i => { counts[i] = (counts[i]||0)+1; });
    } else if (typeof val === 'string') {
      counts[val] = (counts[val]||0)+1;
    }
  });
  return Object.entries(counts).sort((a,b)=>b[1]-a[1]);
}

function barRows(entries, total, maxItems=8) {
  return entries.slice(0, maxItems).map(([label, count]) => {
    const p = pct(count, total);
    const short = label.length > 42 ? label.slice(0,42)+'…' : label;
    return `<div class="k-bar-row">
      <div class="k-bar-label">${short}</div>
      <div class="k-bar-track"><div class="k-bar-fill accent" style="width:${p}%"></div></div>
      <div class="k-bar-pct"><span class="k-bar-pct-val">${p}%</span><span class="k-bar-count">${count}</span></div>
    </div>`;
  }).join('');
}

function qolScore(rows, field) {
  const map = { 'never':0, 'rarely':1, 'sometimes':2, 'often':3, 'very often':4, 'always':5 };
  const vals = rows.map(r => map[r[field]?.toLowerCase()]).filter(v => v !== undefined);
  if (!vals.length) return 0;
  return Math.round(vals.reduce((a,b)=>a+b,0)/vals.length/5*100);
}
