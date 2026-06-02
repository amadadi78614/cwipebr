import { CheckCircle, TrendingUp, ArrowDown, Shield, Cpu, BarChart2, Activity } from 'lucide-react';

const highlights = [
  {
    icon: CheckCircle,
    number: 'FY26',
    numClass: '',
    title: 'Exceptional Teamwork',
    text: 'Successful closure of capital programmes through exceptional teamwork and collaboration with Business Units across all regions.',
  },
  {
    icon: TrendingUp,
    number: '>74%',
    numClass: '',
    title: 'Capital Conversion Rate',
    text: 'Capital Conversion Rate increased year-on-year to over 74% — a sustained improvement reflecting stronger execution and governance.',
  },
  {
    icon: ArrowDown,
    number: 'R433m',
    numClass: 'gold',
    title: 'Mobile PMO FNLD Reduced',
    text: 'Mobile PMO FNLD reduced from R684m to R433m through focused project execution tracking and carry-over management.',
  },
  {
    icon: Shield,
    number: '99.6%',
    numClass: 'green',
    title: 'Asset Verification Milestone',
    text: 'First-year cycle completed with 99.6% asset base verification — a landmark achievement across national exchange areas.',
  },
  {
    icon: Cpu,
    number: '34%',
    numClass: '',
    title: 'Electronic Asset Verification',
    text: 'Electronic verification enhanced and deployed across RAN, MSAN, IT Hardware and IT Software — now 34% of asset base verified electronically.',
  },
  {
    icon: BarChart2,
    number: 'AUC',
    numClass: '',
    title: 'Analytics Tool & Dashboard',
    text: 'AUC Analytics Tool built with automated reporting dashboard — enabling daily-refreshed AUC model with multi-year opening balances per BU.',
  },
  {
    icon: Activity,
    number: '103%',
    numClass: 'green',
    title: 'Project Execution Management',
    text: 'Project execution management improved through daily tracking disciplines — achieving 103% project execution management for the period.',
  },
];

export default function Highlights() {
  return (
    <section className="section" id="highlights">
      <div className="section-tag">Section 01</div>
      <h2 className="section-title">FY26 <span>Highlights</span></h2>
      <p className="section-subtitle">
        A year of breakthrough delivery — from asset verification milestones to automation go-lives and financial discipline at scale.
      </p>

      <div className="highlight-grid">
        {highlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <div key={i} className="highlight-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div className="card-icon" style={{ flexShrink: 0 }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className={`highlight-number ${h.numClass}`}>{h.number}</div>
                  <div className="card-title" style={{ fontSize: 14, marginBottom: 6 }}>{h.title}</div>
                  <div className="card-text">{h.text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
