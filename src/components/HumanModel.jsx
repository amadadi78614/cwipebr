import { Bot, Zap, Star } from 'lucide-react';

const panels = [
  {
    cls: 'automate',
    icon: Bot,
    title: 'AUTOMATE',
    tagline: 'Let machines do machine work',
    items: [
      'Invoice data capture and 3-way PO matching',
      'SAP PS budget carry-over rules execution',
      'Depreciation run posting and period-end jobs',
      'Routine asset verification processing',
      'Exception flagging and audit trail generation',
      'Scheduled reporting and dashboard refresh',
    ],
    outcome: 'Zero human time wasted on repetitive data entry',
  },
  {
    cls: 'augment',
    icon: Zap,
    title: 'AUGMENT',
    tagline: 'Give humans superpowers',
    items: [
      'AI-assisted capital conversion forecasting',
      'Anomaly detection alerts for spend variance',
      'Predictive FNLD risk scoring',
      'Real-time spend-vs-budget dashboards',
      'Natural language SAP PS/AA queries',
      'AI-suggested settlement and capitalisation rules',
    ],
    outcome: 'Every team member becomes a data analyst',
  },
  {
    cls: 'elevate',
    icon: Star,
    title: 'ELEVATE',
    tagline: 'Unlock strategic human contribution',
    items: [
      'Project accountants become strategic advisors',
      'Finance teams drive Smart CapEx decisions',
      'WNS team governs AI agents end-to-end',
      'Human oversight remains the safety net',
      'Cross-functional Mobile PMO partnership',
    ],
    outcome: 'Job evolution, not job elimination',
  },
];

export default function HumanModel() {
  return (
    <section className="section" id="human">
      <div className="section-tag">Section 11</div>
      <h2 className="section-title">Human-Centred <span>Automation Model</span></h2>
      <p className="section-subtitle">
        Technology should amplify human potential — not replace it. This is how WNS is designing the future of work in capital finance.
      </p>

      <div className="human-model-grid">
        {panels.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className={`human-panel ${p.cls}`}>
              <div className="human-panel-icon">
                <Icon size={24} />
              </div>
              <div className="human-panel-title">{p.title}</div>
              <div className="human-panel-tagline">"{p.tagline}"</div>

              {p.items.map((item, j) => (
                <div key={j} className="human-item">
                  <span className="human-bullet">›</span>
                  {item}
                </div>
              ))}

              <div className="human-outcome">{p.outcome}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
