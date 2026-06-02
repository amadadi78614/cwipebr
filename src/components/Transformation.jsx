import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Zap, CheckCircle, Users, Brain } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const metrics = [
  { value: '4',     label: 'Active Automation Initiatives',           icon: Zap,         variant: 'default' },
  { value: '2',     label: 'Live in Production',                      icon: CheckCircle, variant: 'green' },
  { value: '99.6%', label: 'Total Asset Verification Completed',      icon: Brain,       variant: 'gold' },
  { value: '3 of 4',label: 'Designed to Free SMEs for Strategic Work', icon: Users,       variant: 'default' },
];

const doughnutData = {
  labels: ['Live', 'Go-Live Ready', 'In Test', 'On Hold'],
  datasets: [{
    data: [2, 1, 1, 1],
    backgroundColor: [
      'rgba(0,230,118,0.8)',
      'rgba(240,165,0,0.8)',
      'rgba(0,170,255,0.8)',
      'rgba(255,68,68,0.6)',
    ],
    borderColor: [
      'rgba(0,230,118,1)',
      'rgba(240,165,0,1)',
      'rgba(0,170,255,1)',
      'rgba(255,68,68,1)',
    ],
    borderWidth: 1,
  }],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#7eb3d4',
        font: { family: 'Barlow Condensed', size: 12 },
        padding: 16,
        boxWidth: 12,
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
  cutout: '65%',
};

export default function Transformation() {
  return (
    <section className="section" id="transform">
      <div className="section-tag">Section 03</div>
      <h2 className="section-title">AM & CWIP <span>Transformation</span></h2>
      <p className="section-subtitle">
        A deliberate journey from operational execution to intelligent capital management — built process by process, year by year.
      </p>

      {/* Transformation Flow */}
      <div className="transform-flow">
        {[
          { label: 'Operations',      sub: 'Foundation', cls: '' },
          { label: 'Automation',      sub: 'RPA & Bots', cls: 'highlight' },
          { label: 'Analytics',       sub: 'Data-Driven', cls: 'highlight' },
          { label: 'Intelligence',    sub: 'AI-Powered', cls: 'highlight' },
          { label: 'Agentic Capex',   sub: 'Future State', cls: 'final' },
        ].map((node, i, arr) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`transform-node ${node.cls}`}>
              <div className="transform-node-label">{node.label}</div>
              <div className="transform-node-sub">{node.sub}</div>
            </div>
            {i < arr.length - 1 && <div className="transform-arrow">→</div>}
          </div>
        ))}
      </div>

      {/* Metrics + Chart */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, alignItems: 'start' }}>
        <div>
          <div className="card-grid-2" style={{ marginBottom: 24 }}>
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="glass-card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className={`card-icon ${m.variant}`} style={{ flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 30,
                      fontWeight: 700,
                      color: m.variant === 'green' ? 'var(--green)' : m.variant === 'gold' ? 'var(--gold)' : 'var(--cyan)',
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>{m.value}</div>
                    <div className="card-text">{m.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="callout-quote">
            "The transformation engine is running — 4 initiatives, 2 in production, and the entire model designed to free skilled finance professionals for decisions that only humans can make."
          </div>
        </div>

        <div className="chart-wrap">
          <div className="chart-wrap-title">Automation Pipeline Status</div>
          <div style={{ height: 240 }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
