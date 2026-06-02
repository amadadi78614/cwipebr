import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  PointElement, LineElement, ArcElement, Tooltip, Legend, Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

const budgetData = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Spend Plan',
      data: [420, 480, 510, 550, 590, 620, 640, 670, 700, 710, 730, 760],
      borderColor: 'rgba(240,165,0,0.9)',
      backgroundColor: 'transparent',
      tension: 0.4, pointRadius: 3,
      borderDash: [5, 3],
    },
    {
      label: 'Actuals YTD',
      data: [390, 455, 490, 520, 570, 605, 630, 650, null, null, null, null],
      borderColor: 'rgba(0,212,255,0.9)',
      backgroundColor: 'rgba(0,212,255,0.06)',
      fill: true, tension: 0.4, pointRadius: 3,
    },
  ],
};

const aucData = {
  labels: ['Mobile', 'Openserve', 'IT Systems', 'Other BUs', 'Shared Infra'],
  datasets: [{
    label: 'AUC Balance (Rm)',
    data: [1240, 890, 540, 320, 210],
    backgroundColor: [
      'rgba(0,170,255,0.7)', 'rgba(0,212,255,0.6)',
      'rgba(240,165,0,0.7)', 'rgba(0,230,118,0.6)', 'rgba(185,127,255,0.6)',
    ],
    borderColor: [
      'rgba(0,170,255,1)', 'rgba(0,212,255,1)',
      'rgba(240,165,0,1)', 'rgba(0,230,118,1)', 'rgba(185,127,255,1)',
    ],
    borderWidth: 1, borderRadius: 4,
  }],
};

const holdData = {
  labels: ['Vendor Dispute', 'Design Change', 'Budget Freeze', 'BU Approval', 'Technical Review'],
  datasets: [{
    data: [28, 22, 18, 17, 15],
    backgroundColor: [
      'rgba(255,68,68,0.7)', 'rgba(255,140,66,0.7)',
      'rgba(240,165,0,0.7)', 'rgba(0,170,255,0.6)', 'rgba(185,127,255,0.6)',
    ],
    borderWidth: 1,
  }],
};

const chartOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: '#7eb3d4', font: { family: 'Barlow Condensed', size: 11 }, padding: 12, boxWidth: 10 },
    },
    tooltip: {
      backgroundColor: '#0d1e2f',
      borderColor: 'rgba(0,212,255,0.2)', borderWidth: 1,
      titleColor: '#e8f4fd', bodyColor: '#7eb3d4',
    },
  },
  scales: {
    x: { grid: { color: 'rgba(0,170,255,0.05)' }, ticks: { color: '#7eb3d4', font: { family: 'Barlow Condensed', size: 11 } } },
    y: { grid: { color: 'rgba(0,170,255,0.05)' }, ticks: { color: '#7eb3d4', font: { family: 'Barlow Condensed', size: 11 } } },
  },
};

const doughnutOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: '#7eb3d4', font: { family: 'Barlow Condensed', size: 11 }, padding: 12, boxWidth: 10 },
    },
    tooltip: {
      backgroundColor: '#0d1e2f',
      borderColor: 'rgba(0,212,255,0.2)', borderWidth: 1,
      titleColor: '#e8f4fd', bodyColor: '#7eb3d4',
    },
  },
  cutout: '60%',
};

const wayForward = [
  'Place AUC model into production by close of Q1 FY27',
  'Validate report completeness across all BU segments',
  'Validate data accuracy for trend modelling',
  'Explore next frontier of analytics using trusted data and institutional knowledge',
];

export default function CWIPAnalytics() {
  return (
    <section className="section" id="analytics">
      <div className="section-tag">Section 08</div>
      <h2 className="section-title">CWIP Intelligence <span>Analytics</span></h2>
      <p className="section-subtitle">
        From raw SAP extracts to an intelligent analytics hub — delivering daily-refreshed capital visibility across all BUs.
      </p>

      <div className="analytics-grid" style={{ marginBottom: 32 }}>
        <div className="chart-wrap">
          <div className="chart-wrap-title">Actuals vs Spend Plan · YTD (Rm)</div>
          <div style={{ height: 220 }}>
            <Line data={budgetData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-wrap">
          <div className="chart-wrap-title">AUC Balance Snapshot by BU (Rm)</div>
          <div style={{ height: 220 }}>
            <Bar data={aucData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-wrap">
          <div className="chart-wrap-title">Project-on-Hold — Reason Split</div>
          <div style={{ height: 220 }}>
            <Doughnut data={holdData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Analytics Tiles */}
      <div className="card-grid-4" style={{ marginBottom: 32 }}>
        {[
          { v: 'R3.2bn',  l: 'Total Active AUC Balance',           c: 'var(--gold)' },
          { v: '2,847',   l: 'Projects in AUC Lifecycle Tracker',  c: 'var(--cyan)' },
          { v: '34%',     l: 'Electronic Verification Coverage',   c: 'var(--green)' },
          { v: '103%',    l: 'Project Execution Management',       c: 'var(--cyan)' },
        ].map((m, i) => (
          <div key={i} className="metric-tile" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: m.c, marginBottom: 8, lineHeight: 1 }}>{m.v}</div>
            <div className="metric-label">{m.l}</div>
          </div>
        ))}
      </div>

      {/* Way Forward */}
      <div style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 16 }}>Way Forward</div>
        <div className="card-grid-2">
          {wayForward.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(0,170,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)' }}>
                {i + 1}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, paddingTop: 4 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
