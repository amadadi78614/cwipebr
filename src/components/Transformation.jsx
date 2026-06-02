import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Zap, CheckCircle, Users, Brain } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const metrics = [
  { value: '4',      label: 'Active Automation Initiatives',            icon: Zap,         variant: 'default' },
  { value: '2',      label: 'Live in Production',                       icon: CheckCircle, variant: 'green' },
  { value: '99.6%',  label: 'Total Asset Verification Completed',       icon: Brain,       variant: 'gold' },
  { value: '3 of 4', label: 'Designed to Free SMEs for Strategic Work', icon: Users,       variant: 'default' },
];

const doughnutData = {
  labels: ['Live', 'Go-Live Ready', 'In Test', 'On Hold'],
  datasets: [{
    data: [2, 1, 1, 1],
    backgroundColor: ['#00875a','#e07b00','#0082ca','#c0392b'],
    borderColor: ['#fff','#fff','#fff','#fff'],
    borderWidth: 2,
  }],
};

const doughnutOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: '#4a5568', font: { family: 'Barlow Condensed', size: 12 }, padding: 14, boxWidth: 12 },
    },
    tooltip: { backgroundColor: '#1a2332', titleColor: '#fff', bodyColor: '#cce8f6' },
  },
  cutout: '65%',
};

export default function Transformation() {
  return (
    <section className="section alt" id="transform">
      <div className="section-tag">Section 03</div>
      <h2 className="section-title">AM & CWIP <span>Transformation</span></h2>
      <p className="section-subtitle">
        A deliberate journey from operational execution to intelligent capital management — built process by process, year by year.
      </p>

      <div className="transform-flow">
        {[
          { label: 'Operations',   sub: 'Foundation',   cls: '' },
          { label: 'Automation',   sub: 'RPA & Bots',   cls: 'highlight' },
          { label: 'Analytics',    sub: 'Data-Driven',  cls: 'highlight' },
          { label: 'Intelligence', sub: 'AI-Powered',   cls: 'highlight' },
          { label: 'Agentic Capex',sub: 'Future State', cls: 'final' },
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 28, alignItems: 'start' }}>
        <div>
          <div className="card-grid-2" style={{ marginBottom: 20 }}>
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div className={`card-icon ${m.variant}`} style={{ flexShrink: 0 }}><Icon size={17} /></div>
                  <div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, lineHeight:1, marginBottom:5,
                      color: m.variant==='green'?'var(--green)':m.variant==='gold'?'var(--gold)':'var(--telkom-blue)' }}>{m.value}</div>
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
          <div className="chart-wrap-title">Pipeline Status</div>
          <div style={{ height: 230 }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
