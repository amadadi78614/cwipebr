import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const phases = [
  {
    cls: 'p1',
    num: 'Phase 01',
    title: 'Short-Term Wins',
    time: '0–12 Months',
    items: [
      'Improve capitalisation forecasts using historical project results',
      'Break down projects into smaller components for faster close',
      'Scenario planning integrated with cashflow model',
      'Depreciation forecasts with asset-level modelling',
      'AUC model into production by close of Q1',
    ],
    impact: 'Faster close cycles, reduced errors, improved governance',
  },
  {
    cls: 'p2',
    num: 'Phase 02',
    title: 'Mid-Term Transformation',
    time: '1–3 Years',
    items: [
      'AI and analytics applied to project variables',
      'Track complex Telkom projects across vendors and sites',
      'Real-time project progress dashboards',
      'Automated capitalisation checks and rules engine',
      'Cross-module SAP integration: PS, MM, FI and AA',
      'Audit and traceability automation',
    ],
    impact: 'Consistency, reduced manual judgment, enhanced audit readiness',
  },
  {
    cls: 'p3',
    num: 'Phase 03',
    title: 'Long-Term Strategic Advantage',
    time: '3–5 Years',
    items: [
      'Agentic AI systems for end-to-end Capex workflows',
      'Real-time finance function with live dashboards',
      'Integrated advisory model for capital strategy',
      'ESG reporting and compliance leadership',
      'Human oversight as the strategic safety net',
    ],
    impact: 'Competitive differentiation and stronger corporate influence',
  },
];

const maturityData = {
  labels: ['Today', 'Q4 FY26', 'FY27 Mid', 'FY27 End', 'FY28 Mid', 'FY29+'],
  datasets: [
    {
      label: 'Automation Maturity',
      data: [2, 4, 5, 7, 9, 13],
      borderColor: 'rgba(0,212,255,0.9)',
      backgroundColor: 'rgba(0,212,255,0.08)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(0,212,255,1)',
      pointRadius: 4,
    },
    {
      label: 'AI Intelligence Level',
      data: [1, 2, 3, 5, 7, 10],
      borderColor: 'rgba(240,165,0,0.9)',
      backgroundColor: 'rgba(240,165,0,0.05)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(240,165,0,1)',
      pointRadius: 4,
    },
  ],
};

const maturityOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#7eb3d4',
        font: { family: 'Barlow Condensed', size: 12 },
        padding: 16, boxWidth: 12,
      },
    },
    tooltip: {
      backgroundColor: '#0d1e2f',
      borderColor: 'rgba(0,212,255,0.2)',
      borderWidth: 1,
      titleColor: '#e8f4fd',
      bodyColor: '#7eb3d4',
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(0,170,255,0.05)' },
      ticks: { color: '#7eb3d4', font: { family: 'Barlow Condensed', size: 12 } },
    },
    y: {
      grid: { color: 'rgba(0,170,255,0.05)' },
      ticks: { color: '#7eb3d4', font: { family: 'Barlow Condensed', size: 12 } },
      beginAtZero: true,
    },
  },
};

export default function StrategicRoadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="section-tag">Section 07</div>
      <h2 className="section-title">Strategic Roadmap for <span>AI in Capex</span></h2>
      <p className="section-subtitle">
        A three-phase journey from short-term wins to a fully agentic, real-time capital management function.
      </p>

      <div className="phase-grid" style={{ marginBottom: 40 }}>
        {phases.map((p, i) => (
          <div key={i} className={`phase-card ${p.cls}`}>
            <div className="phase-header">
              <div className="phase-number">{p.num}</div>
              <div className="phase-title">{p.title}</div>
              <div className="phase-time">{p.time}</div>
            </div>
            <div className="phase-body">
              {p.items.map((item, j) => (
                <div key={j} className="phase-item">
                  <span className="phase-dot" />
                  {item}
                </div>
              ))}
              <div className="phase-impact">{p.impact}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="chart-wrap">
        <div className="chart-wrap-title">Maturity Trajectory — Automation & Intelligence</div>
        <div style={{ height: 240 }}>
          <Line data={maturityData} options={maturityOptions} />
        </div>
      </div>
    </section>
  );
}
