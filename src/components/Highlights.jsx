import {
  CheckCircle, TrendingUp, ArrowDown, Shield, Cpu, BarChart2, Activity,
  Sparkles, Layers, Gauge, Lock
} from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    metric: '>74%',
    metricLabel: 'CCR YoY',
    numClass: '',
    title: 'Capital Conversion Rate',
    text: 'Capital Conversion Rate increased year-on-year to over 74% — sustained improvement through stronger execution and governance.',
    status: 'Delivered',
    impact: 'Operational Excellence',
    impactClass: 'impact-op',
  },
  {
    icon: ArrowDown,
    metric: 'R433m',
    metricLabel: 'FNLD Position',
    numClass: '',
    title: 'Mobile PMO FNLD Reduced',
    text: 'Mobile PMO FNLD reduced from R684m to R433m through focused project execution tracking and carry-over management.',
    status: 'Delivered',
    impact: 'Risk Reduction',
    impactClass: 'impact-risk',
  },
  {
    icon: Shield,
    metric: '99.6%',
    metricLabel: 'Verified',
    numClass: 'green',
    title: 'Asset Verification Milestone',
    text: 'First-year cycle completed with 99.6% asset base verification — a landmark achievement across national exchange areas.',
    status: 'Delivered',
    impact: 'Governance',
    impactClass: 'impact-gov',
  },
  {
    icon: Cpu,
    metric: '34%',
    metricLabel: 'E-Verified',
    numClass: '',
    title: 'Electronic Asset Verification',
    text: 'Electronic verification deployed across RAN, MSAN, IT Hardware and IT Software — 34% of asset base verified electronically.',
    status: 'Delivered',
    impact: 'Automation',
    impactClass: 'impact-auto',
  },
  {
    icon: BarChart2,
    metric: 'AUC',
    metricLabel: 'Analytics Live',
    numClass: '',
    title: 'Analytics Tool & Dashboard',
    text: 'AUC Analytics Tool built with automated reporting dashboard — daily-refreshed AUC model with multi-year opening balances per BU.',
    status: 'Delivered',
    impact: 'Data Visibility',
    impactClass: 'impact-data',
  },
  {
    icon: Activity,
    metric: '103%',
    metricLabel: 'Execution',
    numClass: 'green',
    title: 'Project Execution Management',
    text: 'Project execution management improved through daily tracking disciplines — achieving 103% for the period.',
    status: 'Delivered',
    impact: 'Cost Optimisation',
    impactClass: 'impact-cost',
  },
  {
    icon: CheckCircle,
    metric: 'FY26',
    metricLabel: 'Closure',
    numClass: '',
    title: 'Exceptional Teamwork',
    text: 'Successful closure of capital programmes through exceptional teamwork and collaboration with Business Units across all regions.',
    status: 'Delivered',
    impact: 'Compliance',
    impactClass: 'impact-compliance',
  },
];

const heroChips = [
  { label: 'Successful delivery', icon: CheckCircle },
  { label: 'Enhanced controls', icon: Lock },
  { label: 'Improved visibility', icon: Layers },
  { label: 'Operational resilience', icon: Gauge },
];

const metricsStrip = [
  { key: 'initiatives', label: 'Delivered Initiatives', value: 'Achieved', sub: 'FY26 programme outcomes on track', icon: Sparkles },
  { key: 'stability', label: 'System Stability', value: 'Stable', sub: 'Sustained operational continuity', icon: Shield },
  { key: 'automation', label: 'Automation Enablement', value: 'Accelerating', sub: 'Bots and analytics scaling', icon: Cpu },
  { key: 'governance', label: 'Governance Improvements', value: 'Enhanced', sub: 'Controls and verification strengthened', icon: TrendingUp },
];



export default function Highlights() {
  return (
    <section className="section highlights-executive" id="highlights">
      {/* ── FY26 VISUAL UPGRADE (content unchanged) ── */}
      <div className="hl-exec-header">
        <div className="section-tag hl-exec-tag">Section 01 · Executive Delivery</div>
        <h2 className="hl-exec-title">
          FY26 <span>Highlights</span>
        </h2>
        <p className="hl-exec-subtitle">
          A year of breakthrough delivery — from asset verification milestones to automation go-lives and financial discipline at scale.
        </p>
      </div>

      <div className="hl-hero-banner">
        <div className="hl-hero-banner-glow" aria-hidden />
        <div className="hl-hero-banner-inner">
          <div className="hl-hero-eyebrow">FY26 Delivery Excellence</div>
          <p className="hl-hero-message">
            Successfully delivered critical finance, project accounting and asset management initiatives while improving governance, automation, visibility and system stability.
          </p>
          <div className="hl-hero-chips">
            {heroChips.map((chip, i) => {
              const ChipIcon = chip.icon;
              return (
                <div key={i} className="hl-hero-chip">
                  <ChipIcon size={14} strokeWidth={2.5} />
                  <span>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hl-metrics-strip">
        {metricsStrip.map((m, i) => {
          const MIcon = m.icon;
          return (
            <div key={m.key} className="hl-metric-card" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="hl-metric-icon"><MIcon size={18} /></div>
              <div className="hl-metric-label">{m.label}</div>
              <div className="hl-metric-value">{m.value}</div>
              <div className="hl-metric-sub">{m.sub}</div>
            </div>
          );
        })}
      </div>

      <div className="hl-wall-label">Finance Transformation Wall</div>
      <div className="fy26-grid">
        {highlights.map((h, i) => (
          <ImpactTile key={i} h={h} index={i} />
        ))}
      </div>

    </section>
  );
}

function ImpactTile({ h, index }) {
  const Icon = h.icon;
  return (
    <article
      className={`fy26-card ${h.numClass === 'green' ? 'hl-tile-accent-green' : ''}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="hl-tile-shine" aria-hidden />
      <div className="hl-tile-top">
        <div className="hl-tile-icon-wrap">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <div className="hl-tile-metric">
          <span className={`hl-tile-metric-value ${h.numClass}`}>{h.metric}</span>
          <span className="hl-tile-metric-label">{h.metricLabel}</span>
        </div>
      </div>
      <h3 className="hl-tile-title">{h.title}</h3>
      <p className="hl-tile-summary">{h.text}</p>
      <div className="hl-tile-footer">
        <span className="hl-status-pill">
          <span className="hl-status-dot" />
          Status: {h.status}
        </span>
        <span className={`hl-impact-badge ${h.impactClass}`}>
          Impact: {h.impact}
        </span>
      </div>
    </article>
  );
}
