function renderBarChart(canvasId, labels, data, color='#69876F') {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{ data, backgroundColor: color, borderRadius: 4, borderSkipped: false }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#69876F', font: { family: 'Inter', size: 11 } } },
        y: { grid: { color: '#D6DAD7', lineWidth: 0.5 }, ticks: { color: '#69876F', font: { family: 'Inter', size: 11 } }, beginAtZero: true }
      }
    }
  });
}

function renderDensityChart(canvasId, values) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || !values.length) return;

  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const std = Math.sqrt(values.reduce((s, v) => s + (v - mean) ** 2, 0) / values.length);
  const bw = Math.max(1.5, 1.06 * std * Math.pow(values.length, -0.2));

  const xs = Array.from({length: 32}, (_, i) => i); // 0–31 days
  const ys = xs.map(x =>
    values.reduce((sum, xi) => {
      const u = (x - xi) / bw;
      return sum + Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI);
    }, 0) / (values.length * bw)
  );

  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, ctx.parentElement.clientHeight || 180);
  gradient.addColorStop(0, 'rgba(129,164,135,0.45)');
  gradient.addColorStop(1, 'rgba(129,164,135,0.02)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: xs,
      datasets: [{
        data: ys,
        borderColor: '#69876F',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            title: items => `${items[0].label} days/month`,
            label: item => {
              const x = parseInt(item.label);
              const near = values.filter(v => Math.abs(v - x) < bw).length;
              return `~${Math.round(near / values.length * 100)}% of respondents`;
            }
          },
          backgroundColor: 'rgba(37,48,39,0.92)',
          titleColor: '#B8D4BC',
          bodyColor: '#F0F3F1',
          padding: 10,
          cornerRadius: 8,
          titleFont: { family: 'Inter', size: 12, weight: '600' },
          bodyFont: { family: 'Inter', size: 11 },
          displayColors: false,
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#69876F',
            font: { family: 'Inter', size: 11 },
            callback: (_, i) => (i % 5 === 0 ? xs[i] : ''),
            maxRotation: 0,
          },
          grid: { display: false },
          title: { display: true, text: 'Days per month', color: '#69876F', font: { family: 'Inter', size: 11 } }
        },
        y: { display: false }
      },
      interaction: { mode: 'index', intersect: false }
    }
  });
}

function renderViolinChart(containerId, groups) {
  const container = document.getElementById(containerId);
  if (!container || !window.d3) return;

  groups = groups.filter(g => g.values.length >= 5);
  if (groups.length < 2) return;

  const W = 700, H = 290;
  const m = { top: 24, right: 32, bottom: 52, left: 44 };
  const iW = W - m.left - m.right, iH = H - m.top - m.bottom;

  const yScale = d3.scaleLinear().domain([0, 31]).range([iH, 0]).nice();
  const xScale = d3.scaleBand().domain(groups.map(g => g.label)).range([0, iW]).padding(0.3);

  const thresholds = d3.range(0, 31.5, 0.5);

  function kdeGroup(values) {
    const std = d3.deviation(values) || 1;
    const bw = Math.max(1.5, 1.06 * std * Math.pow(values.length, -0.2));
    return thresholds.map(x => [x, values.reduce((sum, xi) => {
      const u = (x - xi) / bw;
      return sum + Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI);
    }, 0) / (values.length * bw)]);
  }

  const computed = groups.map(g => ({
    ...g,
    density: kdeGroup(g.values),
    sorted: [...g.values].sort((a, b) => a - b),
  }));

  const maxDensity = d3.max(computed, g => d3.max(g.density, d => d[1]));

  const svg = d3.select(container).append('svg')
    .attr('viewBox', `0 0 ${W} ${H}`)
    .style('width', '100%').style('height', 'auto').style('display', 'block');

  const cv = svg.append('g').attr('transform', `translate(${m.left},${m.top})`);

  // Grid + Y axis
  cv.append('g').selectAll('line').data(yScale.ticks(7)).join('line')
    .attr('x1', 0).attr('x2', iW).attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
    .attr('stroke', '#D6DAD7').attr('stroke-width', 0.5);

  cv.append('g').call(d3.axisLeft(yScale).ticks(7).tickSize(0))
    .call(ax => ax.select('.domain').remove())
    .call(ax => ax.selectAll('text')
      .attr('fill', '#69876F').attr('font-family', 'Inter, sans-serif').attr('font-size', 11).attr('dx', -4));

  // Y label
  svg.append('text')
    .attr('transform', 'rotate(-90)').attr('x', -(H / 2)).attr('y', 13)
    .attr('text-anchor', 'middle')
    .attr('fill', '#69876F').attr('font-family', 'Inter, sans-serif').attr('font-size', 11)
    .text('Days per month');

  // Chronic threshold line
  cv.append('line')
    .attr('x1', 0).attr('x2', iW).attr('y1', yScale(15)).attr('y2', yScale(15))
    .attr('stroke', '#C1553A').attr('stroke-width', 1).attr('stroke-dasharray', '4,3').attr('opacity', 0.6);
  cv.append('text')
    .attr('x', iW - 2).attr('y', yScale(15) - 4).attr('text-anchor', 'end')
    .attr('fill', '#C1553A').attr('font-family', 'Inter, sans-serif').attr('font-size', 9).attr('opacity', 0.75)
    .text('chronic threshold');

  // Draw each violin
  computed.forEach(g => {
    const cx = xScale(g.label) + xScale.bandwidth() / 2;
    const halfBand = xScale.bandwidth() / 2;
    const wScale = d3.scaleLinear().domain([0, maxDensity]).range([0, halfBand]);

    const area = d3.area()
      .x0(d => cx - wScale(d[1]))
      .x1(d => cx + wScale(d[1]))
      .y(d => yScale(d[0]))
      .curve(d3.curveCatmullRom);

    const vg = cv.append('g');

    vg.append('path').datum(g.density)
      .attr('d', area)
      .attr('fill', g.color).attr('fill-opacity', 0.55)
      .attr('stroke', g.color).attr('stroke-width', 1.5);

    const q1 = d3.quantile(g.sorted, 0.25);
    const q3 = d3.quantile(g.sorted, 0.75);
    const med = d3.quantile(g.sorted, 0.5);

    vg.append('rect')
      .attr('x', cx - 5).attr('y', yScale(q3))
      .attr('width', 10).attr('height', Math.max(1, yScale(q1) - yScale(q3)))
      .attr('fill', 'white').attr('fill-opacity', 0.85).attr('rx', 2);

    vg.append('circle')
      .attr('cx', cx).attr('cy', yScale(med)).attr('r', 3.5)
      .attr('fill', 'white').attr('stroke', g.color).attr('stroke-width', 2);

    // Group label + stats
    cv.append('text')
      .attr('x', cx).attr('y', iH + 20).attr('text-anchor', 'middle')
      .attr('fill', '#3D4D3F').attr('font-family', 'Inter, sans-serif').attr('font-size', 12).attr('font-weight', 500)
      .text(g.label);

    cv.append('text')
      .attr('x', cx).attr('y', iH + 36).attr('text-anchor', 'middle')
      .attr('fill', '#81A487').attr('font-family', 'Inter, sans-serif').attr('font-size', 10)
      .text(`n=${g.values.length} · median ${Math.round(med)} days`);
  });
}

async function renderBubbleMap(containerId, countryCounts, N) {
  const container = document.getElementById(containerId);
  if (!container || !window.d3 || !window.topojson) return;

  const CENTROIDS = {
    'Afghanistan': [33.94, 67.71], 'Albania': [41.15, 20.17], 'Algeria': [28.03, 1.66],
    'Argentina': [-38.42, -63.62], 'Armenia': [40.07, 45.04], 'Australia': [-25.27, 133.78],
    'Austria': [47.52, 14.55], 'Azerbaijan': [40.14, 47.58], 'Bahrain': [26.00, 50.55],
    'Bangladesh': [23.68, 90.36], 'Belarus': [53.71, 27.95], 'Belgium': [50.50, 4.47],
    'Bolivia': [-16.29, -63.59], 'Bosnia and Herzegovina': [43.92, 17.68],
    'Brazil': [-14.24, -51.93], 'Bulgaria': [42.73, 25.49], 'Cambodia': [12.57, 104.99],
    'Cameroon': [3.85, 11.50], 'Canada': [56.13, -106.35], 'Chile': [-35.68, -71.54],
    'China': [35.86, 104.20], 'Colombia': [4.57, -74.30], 'Costa Rica': [9.75, -83.75],
    'Croatia': [45.10, 15.20], 'Cuba': [21.52, -77.78], 'Czech Republic': [49.82, 15.47],
    'Czechia': [49.82, 15.47], 'Denmark': [56.26, 9.50], 'Dominican Republic': [18.74, -70.16],
    'Ecuador': [-1.83, -78.18], 'Egypt': [26.82, 30.80], 'El Salvador': [13.79, -88.90],
    'Estonia': [58.60, 25.01], 'Ethiopia': [9.15, 40.49], 'Finland': [61.92, 25.75],
    'France': [46.23, 2.21], 'Georgia': [42.31, 43.36], 'Germany': [51.17, 10.45],
    'Ghana': [7.95, -1.02], 'Greece': [39.07, 21.82], 'Guatemala': [15.78, -90.23],
    'Honduras': [15.20, -86.24], 'Hong Kong': [22.30, 114.18], 'Hungary': [47.16, 19.50],
    'Iceland': [64.96, -19.02], 'India': [20.59, 78.96], 'Indonesia': [-0.79, 113.92],
    'Iran': [32.43, 53.69], 'Iraq': [33.22, 43.68], 'Ireland': [53.41, -8.24],
    'Israel': [31.05, 34.85], 'Italy': [41.87, 12.57], 'Jamaica': [18.11, -77.30],
    'Japan': [36.20, 138.25], 'Jordan': [30.59, 36.24], 'Kazakhstan': [48.02, 66.92],
    'Kenya': [-0.02, 37.91], 'Kuwait': [29.31, 47.48], 'Latvia': [56.88, 24.60],
    'Lebanon': [33.85, 35.86], 'Libya': [26.34, 17.23], 'Lithuania': [55.17, 23.88],
    'Luxembourg': [49.82, 6.13], 'Malaysia': [4.21, 108.05], 'Mexico': [23.63, -102.55],
    'Morocco': [31.79, -7.09], 'Myanmar': [16.87, 96.08], 'Namibia': [-22.96, 18.49],
    'Nepal': [28.39, 84.12], 'Netherlands': [52.13, 5.29], 'New Zealand': [-40.90, 174.89],
    'Nicaragua': [12.87, -85.21], 'Nigeria': [9.08, 8.68], 'Norway': [60.47, 8.47],
    'Oman': [21.51, 55.92], 'Pakistan': [30.38, 69.35], 'Panama': [8.54, -80.78],
    'Paraguay': [-23.44, -58.44], 'Peru': [-9.19, -75.02], 'Philippines': [12.88, 121.77],
    'Poland': [51.92, 19.15], 'Portugal': [39.40, -8.22], 'Puerto Rico': [18.22, -66.59],
    'Qatar': [25.35, 51.18], 'Romania': [45.94, 24.97], 'Russia': [61.52, 105.32],
    'Saudi Arabia': [23.89, 45.08], 'Serbia': [44.02, 21.01], 'Singapore': [1.35, 103.82],
    'Slovakia': [48.67, 19.70], 'Slovenia': [46.15, 14.99], 'South Africa': [-30.56, 22.94],
    'South Korea': [35.91, 127.77], 'Korea': [35.91, 127.77], 'Spain': [40.46, -3.75],
    'Sri Lanka': [7.87, 80.77], 'Sweden': [60.13, 18.64], 'Switzerland': [46.82, 8.23],
    'Taiwan': [23.70, 120.96], 'Tanzania': [-6.37, 34.89], 'Thailand': [15.87, 100.99],
    'Trinidad and Tobago': [10.69, -61.22], 'Tunisia': [33.89, 9.54],
    'Turkey': [38.96, 35.24], 'Türkiye': [38.96, 35.24],
    'UAE': [23.42, 53.85], 'United Arab Emirates': [23.42, 53.85],
    'Uganda': [1.37, 32.29], 'Ukraine': [48.38, 31.17],
    'United Kingdom': [55.38, -3.44], 'UK': [55.38, -3.44],
    'United States': [37.09, -95.71], 'USA': [37.09, -95.71],
    'Uruguay': [-32.52, -55.77], 'Venezuela': [6.42, -66.59],
    'Vietnam': [14.06, 108.28], 'Yemen': [15.55, 48.52],
    'Zambia': [-13.13, 27.85], 'Zimbabwe': [-19.02, 29.15],
  };

  try {
    const world = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r => r.json());
    const countriesGeo = topojson.feature(world, world.objects.countries);
    const bordersGeo = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);

    const W = 800, H = 415;
    const projection = d3.geoNaturalEarth1().scale(W / 6.3).translate([W / 2, H / 2]);
    const path = d3.geoPath().projection(projection);

    const svg = d3.select(container).append('svg')
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('width', '100%').style('height', 'auto')
      .style('display', 'block').style('border-radius', '8px');

    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#E8ECE9');

    svg.append('g').selectAll('path').data(countriesGeo.features).join('path')
      .attr('d', path).attr('fill', '#B8C4BA').attr('stroke', 'none');

    svg.append('path').datum(bordersGeo).attr('d', path)
      .attr('fill', 'none').attr('stroke', '#D6DAD7').attr('stroke-width', 0.4);

    const countMap = Object.fromEntries(countryCounts);
    const maxCount = Math.max(...Object.values(countMap));
    const maxR = 28, minR = 4;

    function lerpColor(t) {
      return `rgb(${Math.round(142 - t * 112)},${Math.round(196 - t * 122)},${Math.round(154 - t * 112)})`;
    }

    const bubbles = Object.entries(countMap).map(([name, count]) => {
      const c = CENTROIDS[name];
      if (!c) return null;
      const pt = projection([c[1], c[0]]);
      if (!pt) return null;
      const pctRatio = count / maxCount;
      return { name, count, x: pt[0], y: pt[1], r: minR + Math.sqrt(pctRatio) * (maxR - minR), pctRatio, pct: Math.round(count / N * 100) };
    }).filter(Boolean).sort((a, b) => b.r - a.r);

    const tip = d3.select(container).append('div')
      .style('position', 'absolute').style('background', 'rgba(37,48,39,0.95)')
      .style('color', '#F0F3F1').style('padding', '8px 12px').style('border-radius', '8px')
      .style('font-family', 'Inter, sans-serif').style('font-size', '12px').style('line-height', '1.5')
      .style('pointer-events', 'none').style('opacity', '0').style('transition', 'opacity 0.12s')
      .style('white-space', 'nowrap').style('z-index', '10').style('top', '0').style('left', '0');

    function moveTip(event) {
      const rect = container.getBoundingClientRect();
      tip.style('left', Math.min(event.clientX - rect.left + 14, rect.width - 180) + 'px')
         .style('top', Math.max(event.clientY - rect.top - 52, 4) + 'px');
    }

    svg.append('g').selectAll('circle').data(bubbles).join('circle')
      .attr('cx', b => b.x).attr('cy', b => b.y).attr('r', b => b.r)
      .attr('fill', b => lerpColor(b.pctRatio)).attr('fill-opacity', 0.82)
      .attr('stroke', '#fff').attr('stroke-width', 0.8).attr('stroke-opacity', 0.7)
      .on('mouseenter', function(event, b) {
        d3.select(this).attr('stroke-width', 2).attr('stroke-opacity', 1);
        tip.style('opacity', '1').html(`<strong style="color:#B8D4BC">${b.name}</strong><br>${b.count} respondent${b.count !== 1 ? 's' : ''} &middot; ${b.pct}% of total`);
        moveTip(event);
      })
      .on('mousemove', (event) => moveTip(event))
      .on('mouseleave', function() {
        d3.select(this).attr('stroke-width', 0.8).attr('stroke-opacity', 0.7);
        tip.style('opacity', '0');
      });

    // Legend
    const defs = svg.append('defs');
    const grad = defs.append('linearGradient').attr('id', 'mapGrad').attr('x1', '0').attr('x2', '1');
    grad.append('stop').attr('offset', '0%').attr('stop-color', lerpColor(0));
    grad.append('stop').attr('offset', '100%').attr('stop-color', lerpColor(1));

    const lg = svg.append('g').attr('transform', `translate(${W - 142}, ${H - 82})`);
    lg.append('rect').attr('width', 130).attr('height', 70).attr('rx', 6).attr('fill', 'rgba(37,48,39,0.6)');
    const lt = lg.append('text').attr('fill', '#C8DCC9').attr('font-family', 'Inter, sans-serif').attr('font-size', '9').attr('font-weight', '500').attr('letter-spacing', '0.05em');
    lt.append('tspan').attr('x', 10).attr('y', 16).text('SIZE = RESPONDENTS');
    lt.append('tspan').attr('x', 10).attr('dy', 17).text('COLOR = % OF SAMPLE');
    lg.append('rect').attr('x', 10).attr('y', 44).attr('width', 110).attr('height', 8).attr('rx', 4).attr('fill', 'url(#mapGrad)');
    const ls = lg.append('text').attr('fill', '#8EB89A').attr('font-family', 'Inter, sans-serif').attr('font-size', '8');
    ls.append('tspan').attr('x', 10).attr('y', 63).text('low');
    ls.append('tspan').attr('x', 120).attr('y', 63).attr('text-anchor', 'end').text('high');

  } catch(e) {
    container.innerHTML = '<p style="color:#69876F;font-size:13px;padding:16px 0;">Map unavailable.</p>';
  }
}

// Approximate ZIP3 (first 3 digits of zip) -> state, based on USPS prefix
// allocation blocks. Ranges are simplified to their primary contiguous block,
// so a small number of edge-case prefixes may resolve to a neighboring state.
const ZIP3_RANGES = [
  [6,9,'PR'],[10,27,'MA'],[28,29,'RI'],[30,38,'NH'],[39,49,'ME'],
  [50,59,'VT'],[60,69,'CT'],[70,89,'NJ'],[100,149,'NY'],[150,196,'PA'],
  [197,199,'DE'],[200,205,'DC'],[206,219,'MD'],[220,246,'VA'],[247,268,'WV'],
  [270,289,'NC'],[290,299,'SC'],[300,319,'GA'],[320,349,'FL'],[350,369,'AL'],
  [370,385,'TN'],[386,397,'MS'],[398,399,'GA'],[400,427,'KY'],[430,459,'OH'],
  [460,479,'IN'],[480,499,'MI'],[500,528,'IA'],[530,549,'WI'],[550,567,'MN'],
  [570,577,'SD'],[580,588,'ND'],[590,599,'MT'],[600,629,'IL'],[630,658,'MO'],
  [660,679,'KS'],[680,693,'NE'],[700,714,'LA'],[716,729,'AR'],[730,749,'OK'],
  [750,799,'TX'],[800,816,'CO'],[820,831,'WY'],[832,838,'ID'],[840,847,'UT'],
  [850,865,'AZ'],[870,884,'NM'],[885,885,'TX'],[889,898,'NV'],[900,961,'CA'],
  [967,968,'HI'],[969,969,'GU'],[970,979,'OR'],[980,994,'WA'],[995,999,'AK'],
];

function zip3ToState(postal) {
  if (!postal) return null;
  const digits = String(postal).replace(/\D/g, '').slice(0, 3);
  if (digits.length < 3) return null;
  const n = parseInt(digits, 10);
  const hit = ZIP3_RANGES.find(([lo, hi]) => n >= lo && n <= hi);
  return hit ? hit[2] : null;
}

const US_FIPS_TO_ABBR = {
  1:'AL',2:'AK',4:'AZ',5:'AR',6:'CA',8:'CO',9:'CT',10:'DE',11:'DC',12:'FL',
  13:'GA',15:'HI',16:'ID',17:'IL',18:'IN',19:'IA',20:'KS',21:'KY',22:'LA',
  23:'ME',24:'MD',25:'MA',26:'MI',27:'MN',28:'MS',29:'MO',30:'MT',31:'NE',
  32:'NV',33:'NH',34:'NJ',35:'NM',36:'NY',37:'NC',38:'ND',39:'OH',40:'OK',
  41:'OR',42:'PA',44:'RI',45:'SC',46:'SD',47:'TN',48:'TX',49:'UT',50:'VT',
  51:'VA',53:'WA',54:'WV',55:'WI',56:'WY',72:'PR',
};

const US_STATE_NAMES = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
  CT:'Connecticut',DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',
  HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',
  LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',
  MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',
  WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',PR:'Puerto Rico',
};

async function renderUSMap(containerId, stateCounts, N) {
  const container = document.getElementById(containerId);
  if (!container || !window.d3 || !window.topojson) return;

  try {
    const us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(r => r.json());
    const statesGeo = topojson.feature(us, us.objects.states);
    const bordersGeo = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

    const W = 800, H = 500;
    const projection = d3.geoAlbersUsa().scale(950).translate([W / 2, H / 2]);
    const path = d3.geoPath().projection(projection);

    const svg = d3.select(container).append('svg')
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('width', '100%').style('height', 'auto')
      .style('display', 'block').style('border-radius', '8px');

    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#E8ECE9');

    const maxCount = Math.max(1, ...Object.values(stateCounts));

    function lerpColor(t) {
      return `rgb(${Math.round(142 - t * 112)},${Math.round(196 - t * 122)},${Math.round(154 - t * 112)})`;
    }

    const tip = d3.select(container).append('div')
      .style('position', 'absolute').style('background', 'rgba(37,48,39,0.95)')
      .style('color', '#F0F3F1').style('padding', '8px 12px').style('border-radius', '8px')
      .style('font-family', 'Inter, sans-serif').style('font-size', '12px').style('line-height', '1.5')
      .style('pointer-events', 'none').style('opacity', '0').style('transition', 'opacity 0.12s')
      .style('white-space', 'nowrap').style('z-index', '10').style('top', '0').style('left', '0');

    function moveTip(event) {
      const rect = container.getBoundingClientRect();
      tip.style('left', Math.min(event.clientX - rect.left + 14, rect.width - 180) + 'px')
         .style('top', Math.max(event.clientY - rect.top - 52, 4) + 'px');
    }

    svg.append('g').selectAll('path').data(statesGeo.features).join('path')
      .attr('d', path)
      .attr('fill', d => {
        const abbr = US_FIPS_TO_ABBR[+d.id];
        const count = abbr ? (stateCounts[abbr] || 0) : 0;
        return count ? lerpColor(count / maxCount) : '#DCE2DE';
      })
      .attr('stroke', '#fff').attr('stroke-width', 0.5)
      .on('mouseenter', function(event, d) {
        const abbr = US_FIPS_TO_ABBR[+d.id];
        const count = abbr ? (stateCounts[abbr] || 0) : 0;
        if (!count) return;
        d3.select(this).attr('stroke-width', 1.5).attr('stroke', '#253027');
        tip.style('opacity', '1').html(`<strong style="color:#B8D4BC">${US_STATE_NAMES[abbr] || abbr}</strong><br>${count} respondent${count !== 1 ? 's' : ''} &middot; ${Math.round(count / N * 100)}% of US sample`);
        moveTip(event);
      })
      .on('mousemove', (event) => moveTip(event))
      .on('mouseleave', function() {
        d3.select(this).attr('stroke-width', 0.5).attr('stroke', '#fff');
        tip.style('opacity', '0');
      });

    svg.append('path').datum(bordersGeo).attr('d', path)
      .attr('fill', 'none').attr('stroke', '#fff').attr('stroke-width', 0.5);

    // Legend
    const defs = svg.append('defs');
    const grad = defs.append('linearGradient').attr('id', 'usMapGrad').attr('x1', '0').attr('x2', '1');
    grad.append('stop').attr('offset', '0%').attr('stop-color', lerpColor(0));
    grad.append('stop').attr('offset', '100%').attr('stop-color', lerpColor(1));

    const lg = svg.append('g').attr('transform', `translate(${W - 152}, ${H - 62})`);
    lg.append('rect').attr('width', 140).attr('height', 50).attr('rx', 6).attr('fill', 'rgba(37,48,39,0.6)');
    const lt = lg.append('text').attr('fill', '#C8DCC9').attr('font-family', 'Inter, sans-serif').attr('font-size', '9').attr('font-weight', '500').attr('letter-spacing', '0.05em');
    lt.append('tspan').attr('x', 10).attr('y', 16).text('RESPONDENTS BY STATE');
    lg.append('rect').attr('x', 10).attr('y', 24).attr('width', 120).attr('height', 8).attr('rx', 4).attr('fill', 'url(#usMapGrad)');
    const ls = lg.append('text').attr('fill', '#8EB89A').attr('font-family', 'Inter, sans-serif').attr('font-size', '8');
    ls.append('tspan').attr('x', 10).attr('y', 43).text('low');
    ls.append('tspan').attr('x', 130).attr('y', 43).attr('text-anchor', 'end').text('high');

  } catch(e) {
    container.innerHTML = '<p style="color:#69876F;font-size:13px;padding:16px 0;">Map unavailable.</p>';
  }
}

function renderDoughnut(canvasId, labels, data, colors) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: '65%'
    }
  });
}
