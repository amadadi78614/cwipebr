import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import {
  Eye, Zap, LineChart, Shield, ChevronRight,
  TrendingUp, Bot, Target
} from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const flowStages = [
  {
    id: 'visibility',
    icon: Eye,
    title: 'Current CWIP Visibility',
    subtitle: 'Operational intelligence today',
    accent: 'var(--telkom-blue)',
    items: [
      'Daily-refreshed AUC model with multi-year opening balances per BU',
      'Actuals vs spend plan tracking across all capital programmes',
      'Project-on-hold analytics — reason categorisation and exposure visibility',
      '34% electronic verification coverage',
      '103% execution management',
    ],
    metrics: [
      { v: '34%', l: 'E-Verification' },
      { v: '103%', l: 'Execution Mgmt' },
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation Opportunities',
    subtitle: 'Scale bots, workflows and SAP intelligence',
    accent: 'var(--cyan)',
    items: [
      'Capex data extraction — full rollout and monitoring',
      'AUC life cycle analytics go-live and Q1 production model',
      'F2027 IT Hardware & Software verification expansion',
      'Metro Ethernet + POTN asset verification in FY27 cycle',
      'Growth from 4 live automations toward 13 by FY28',
      
    ],
    metrics: []
  },
  {
    id: 'predictive',
    icon: LineChart,
    title: 'Predictive Analytics',
    subtitle: 'AI-enabled capital foresight',
    accent: 'var(--gold)',
    items: [
      'Capitalisation forecast, AUC lifecycle, depreciation and FNLD risk agents (future state)',
      'Predictive AUC and Capex modelling · agentic workflow orchestration',
      'Natural language SAP PS/AA queries and scenario planning',
      'Capitalisation aligned with depreciation model and multi-BU dashboards',
      'Shift from clerical processing to strategic advisory contribution',
    ],
    metrics: [],
  },
  {
    id: 'governance',
    icon: Shield,
    title: 'Governance Impact',
    subtitle: 'Controls, compliance and executive outcomes',
    accent: 'var(--green)',
    items: [
      'Capex approval controls, exception flagging, audit-ready documentation',
      'Zero audit issues over programme lifecycle · 100% on-time capitalisation',
      '99.6% asset verification',
      'Three-phase roadmap: short-term wins → mid-term transformation → agentic Capex',
    ],
    metrics: [],
  },
];

const aiMatrix = [
  { area: 'Routine Accounting', ai: 'Automated reconciliations and period-end processing', relevance: 'SAP PS/AA — Direct automation target' },
  { area: 'Advisory Services', ai: 'Predictive analytics and executive dashboards', relevance: 'Smart CapEx, capitalisation forecasting' },
  { area: 'Risk Management', ai: 'Real-time anomaly detection', relevance: 'Capex approval controls, exception flagging, audit trails' },
  { area: 'Cloud / ERP', ai: 'Unified AI-native platforms integrated with ERPs', relevance: 'SAP ECC 6.0 + AI layer — legacy to modern intelligence bridge' },
  { area: 'Talent Utilisation', ai: 'Strategic contribution over clerical processing', relevance: 'WNS upskilling — project accountants as capital advisors' },
];

const roadmapPhases = [
  { cls: 'p1', num: 'Phase 01', title: 'Short-Term Wins', time: '0–12 Months',
    items: ['Capitalisation forecasts from historical results', 'Project breakdown for faster close', 'Scenario planning with cashflow model', 'AUC model into production by Q1'],
    impact: 'Faster close, reduced errors, improved governance' },
  { cls: 'p2', num: 'Phase 02', title: 'Mid-Term Intelligence', time: '1–3 Years',
    items: ['AI analytics for project variables', 'Real-time progress dashboards', 'Automated capitalisation checks', 'Cross-module SAP integration PS, MM, FI, AA'],
    impact: 'Consistency, reduced manual judgment, audit readiness' },
  { cls: 'p3', num: 'Phase 03', title: 'Strategic Advantage', time: '3–5 Years',
    items: ['Agentic AI for end-to-end Capex workflows', 'Real-time finance function', 'Integrated capital strategy advisory', 'AI to meet evolving international standards seamlessly'],
    impact: 'Competitive differentiation and corporate influence' },
];

const growthData = {
  labels: ['FY26 Current', 'FY26 End', 'FY27', 'FY28+'],
  datasets: [{
    label: 'Live Automations',
    data: [2, 4, 8, 13],
    backgroundColor: ['#cce8f6', '#0082ca', '#00b4d8', '#e07b00'],
    borderColor: ['#0082ca', '#005a8e', '#0096b3', '#b86300'],
    borderWidth: 1,
    borderRadius: 5,
  }],
};

const growthOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { backgroundColor: '#1a2332', titleColor: '#fff', bodyColor: '#cce8f6' },
  },
  scales: {
    x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#4a5568', font: { family: 'Barlow Condensed', size: 11 } } },
    y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#4a5568', font: { family: 'Barlow Condensed', size: 11 } }, beginAtZero: true },
  },
};

export default function CWIPIntelligence() {
  return (
    <section className="section alt" id="cwip">
      <div className="section-tag">CWIP Intelligence</div>
      <h2 className="section-title">
        CWIP Intelligence <span>Pipeline</span>
      </h2>
      <p className="section-subtitle cwip-hero-sub">
        From visibility to predictive capital governance — one integrated executive narrative for CWIP evolution.
      </p>

      {/* Flow connector */}
      <div className="cwip-flow-track">
        {flowStages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={stage.id} className="cwip-flow-step">
              <div className="cwip-flow-node" style={{ borderColor: stage.accent }}>
                <div className="cwip-flow-node-icon" style={{ color: stage.accent, background: `color-mix(in srgb, ${stage.accent} 10%, white)` }}>
                  <Icon size={20} />
                </div>
                <div className="cwip-flow-node-title">{stage.title}</div>
                <div className="cwip-flow-node-sub">{stage.subtitle}</div>
              </div>
              {i < flowStages.length - 1 && (
                <div className="cwip-flow-connector" aria-hidden>
                  <ChevronRight size={18} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stage panels */}
      <div className="cwip-panels">
        {flowStages.map((stage) => {
          const Icon = stage.icon;
          return (
            <div key={stage.id} className="cwip-panel" style={{ borderTopColor: stage.accent }}>
              <div className="cwip-panel-head">
                <div className="cwip-panel-icon" style={{ color: stage.accent }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="cwip-panel-title">{stage.title}</div>
                  <div className="cwip-panel-sub">{stage.subtitle}</div>
                </div>
                <div className="cwip-panel-metrics">
                  {stage.metrics.map((m, j) => (
                    <div key={j} className="cwip-mini-metric">
                      <span className="cwip-mini-v" style={{ color: stage.accent }}>{m.v}</span>
                      <span className="cwip-mini-l">{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="cwip-panel-list">
                {stage.items.map((item, j) => (
                  <li key={j}><span className="cwip-list-dot" style={{ background: stage.accent }} />{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* AI matrix + growth */}
      <div className="cwip-dual-grid">
        <div>
          <div className="cwip-block-label">AI Application Matrix</div>
          <div style={{ overflowX: 'auto' }}>
            <table className="exec-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>AI Application</th>
                  <th>Telkom / WNS Relevance</th>
                </tr>
              </thead>
              <tbody>
                {aiMatrix.map((row, i) => (
                  <tr key={i}>
                    <td className="td-area">{row.area}</td>
                    <td className="td-app">{row.ai}</td>
                    <td>{row.relevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="chart-wrap">
          <div className="chart-wrap-title">Automation Scale Trajectory</div>
          <div style={{ height: 200 }}><Bar data={growthData} options={growthOptions} /></div>
          <div className="cwip-imperatives">
            {[
              { icon: Target, text: 'SAP PS: gold standard for Telco CapEx programme management' },
              { icon: TrendingUp, text: 'Month-end close: weeks → days through automation' },
              { icon: Bot, text: 'Agentic AI as foundation of future capital operations' },
            ].map((imp, i) => {
              const ImpIcon = imp.icon;
              return (
                <div key={i} className="cwip-imperative-row">
                  <ImpIcon size={14} style={{ color: 'var(--telkom-blue)', flexShrink: 0 }} />
                  <span>{imp.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Roadmap phases */}
      <div className="cwip-block-label" style={{ marginTop: 8 }}>Capital Governance Roadmap</div>
      <div className="phase-grid">
        {roadmapPhases.map((p, i) => (
          <div key={i} className={`phase-card ${p.cls}`}>
            <div className="phase-header">
              <div className="phase-number">{p.num}</div>
              <div className="phase-title">{p.title}</div>
              <div className="phase-time">{p.time}</div>
            </div>
            <div className="phase-body">
              {p.items.map((item, j) => (
                <div key={j} className="phase-item"><span className="phase-dot" />{item}</div>
              ))}
              <div className="phase-impact">{p.impact}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="callout-quote" style={{ marginBottom: 0 }}>
        &ldquo;From process automation → predictive insight → autonomous capital management — governed by humans, powered by intelligence.&rdquo;
      </div>
    </section>
  );
}
