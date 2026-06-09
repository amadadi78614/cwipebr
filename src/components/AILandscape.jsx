import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const tableRows = [
  { area: 'Routine Accounting',  ai: 'Automated reconciliations and period-end processing',    relevance: 'SAP PS/AA — invoice matching, AUC posting, depreciation runs' },
  { area: 'Advisory Services',   ai: 'Predictive analytics and executive dashboards',           relevance: 'Smart CapEx decisions — capitalisation forecasting, FNLD risk scoring' },
  { area: 'Risk Management',     ai: 'Real-time anomaly detection and approval controls',       relevance: 'Capex approval controls — exception flagging, audit trail automation' },
  { area: 'Cloud / ERP',         ai: 'Unified AI-native platforms integrated with ERPs',        relevance: 'SAP ECC 6.0 + AI layer — legacy to modern intelligence bridge' },
  { area: 'Talent Utilisation',  ai: 'Shift clerical roles toward strategic contribution',      relevance: 'WNS upskilling — project accountants as capital advisors' },
];

const imperatives = [
  { num: '01', title: 'SAP PS: Gold Standard for Telco CapEx',   text: 'SAP Project Systems remains the gold standard for Telco capital programme management — the platform for AI-layer integration.' },
  { num: '02', title: 'Month-End: Weeks → Days',                  text: 'Automation compresses the month-end close cycle from weeks to days — unlocking faster insight and improved governance.' },
  { num: '03', title: '78% of Executives Must Reinvent',          text: '78% of finance executives say they must reinvent operating models to support agentic AI — the transition is already underway.' },
  { num: '04', title: 'Agentic AI: The New Foundation',           text: 'Agentic AI is rapidly becoming the foundation of future financial operations — from routine tasks to strategic capital decisions.' },
];

const growthData = {
  labels: ['FY26 Current', 'FY26 End', 'FY27', 'FY28+'],
  datasets: [{
    label: 'Cumulative Live Automations',
    data: [2, 4, 8, 13],
    backgroundColor: ['#cce8f6', '#0082ca', '#00b4d8', '#e07b00'],
    borderColor:     ['#0082ca', '#005a8e', '#0096b3', '#b86300'],
    borderWidth: 1, borderRadius: 5,
  }],
};

const chartOpts = {
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { backgroundColor: '#1a2332', titleColor: '#fff', bodyColor: '#cce8f6' },
  },
  scales: {
    x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#2d3748', font: { family: 'Barlow Condensed', size: 12 } } },
    y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#2d3748', font: { family: 'Barlow Condensed', size: 12 } }, beginAtZero: true },
  },
};

export default function AILandscape() {
  return (
    <section className="section alt" id="ai">
      <div className="section-tag">Section 06</div>
      <h2 className="section-title">AI in Finance <span>Landscape</span></h2>
      <p className="section-subtitle">
        What the market is saying — and why the WNS / Telkom approach is positioned at the leading edge of this transformation.
      </p>

      {/* Full-width table */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>
          AI Application Matrix
        </div>
        <table className="exec-table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ width: '18%' }}>Area</th>
              <th style={{ width: '35%' }}>AI Application</th>
              <th style={{ width: '47%' }}>Telkom / WNS Relevance</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr key={i}>
                <td className="td-area">{row.area}</td>
                <td className="td-app">{row.ai}</td>
                <td style={{ color: '#2d3748' }}>{row.relevance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Imperatives 2x2 + Automation chart side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Left: 4 imperative cards in 2x2 */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>
            Automation Imperative
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {imperatives.map((imp, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--telkom-blue)',
                borderRadius: 8,
                padding: '16px 18px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{imp.title}</div>
                <div style={{ fontSize: 12, color: '#2d3748', lineHeight: 1.55 }}>{imp.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Automation scale chart */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>
            Automation Scale Trajectory
          </div>
          <div className="chart-wrap" style={{ height: 260 }}>
            <Bar data={growthData} options={chartOpts} />
          </div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { icon: '⬤', color: '#0082ca', text: 'SAP PS: gold standard for Telco CapEx programme management' },
              { icon: '⬤', color: '#e07b00', text: 'Month-end close: weeks → days through automation' },
              { icon: '⬤', color: '#00875a', text: 'Agentic AI as foundation of future capital operations' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12, color: '#2d3748' }}>
                <span style={{ color: b.color, flexShrink: 0, fontSize: 8, marginTop: 4 }}>⬤</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
