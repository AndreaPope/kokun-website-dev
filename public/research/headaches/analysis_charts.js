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
