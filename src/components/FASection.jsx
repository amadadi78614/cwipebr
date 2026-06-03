import {
  CheckCircle, Zap, BarChart2, Shield, TrendingUp,
  Globe, Award, Layers, Bot, LineChart, Lock,
  Database, Users, Scale, RefreshCw, Wallet,
  Monitor, AlertTriangle, MessageSquare
} from 'lucide-react';

/* ── Section 1: Executive Snapshot ── */
const kpiTiles = [
  { v: 'FY26', l: 'Successful year-end closure & audit', c: '#fff' },
  { v: '6+', l: 'RPA & automation initiatives delivering TAT gains', c: '#00b4d8' },
  { v: 'Award', l: 'WNS BPET League 2026 — VOC excellence', c: '#e07b00' },
  { v: '4', l: 'FY27 strategic priority pillars', c: '#00b4d8' },
];

const fy26Highlights = [
  { icon: CheckCircle, title: 'Year-End Closure & Audit', text: 'Successful year-end financial closure and audit support with sustained governance and reporting accuracy.', variant: 'default' },
  { icon: Layers, title: 'SME Support — Telkom Deployments', text: 'BSS Billing, automated direct deposits, bank GL open item reduction, Travel RFP, and ZOHO travel system testing and implementation.', variant: 'default' },
  { icon: Zap, title: 'RPA & Automation Benefits', text: 'FlexiBill combined TB reports, recurring deposits, EFT portal enhancements, and OMS self-help functionality — improving TAT, quality and CSAT.', variant: 'green' },
  { icon: BarChart2, title: 'Dedicated Analytics Support', text: 'Cash flow reporting, predictive outputs, and cash management protocol enhancements for executive liquidity visibility.', variant: 'default' },
  { icon: Shield, title: 'System Stabilisation', text: 'FAM write-off and suspense account change requests concluded successfully.', variant: 'gold' },
  { icon: Award, title: 'WNS BPET League Award 2026', text: 'Recognition for consistent VOC scores across the Telkom Shared Services engagement.', variant: 'green' },
];

/* ── Section 2: Transformation Highlights FY26 ── */
const transformationPillars = [
  {
    icon: Wallet,
    title: 'Intelligent Cash Management',
    accent: 'var(--telkom-blue)',
    items: [
      'Cash flow forecasting enhancements',
      'Free Cash Flow vs Bank Cash Flow alignment',
      'Predictive outputs for liquidity visibility',
    ],
  },
  {
    icon: Zap,
    title: 'Process Digitisation',
    accent: 'var(--cyan)',
    items: [
      'Automated allocation of direct deposits',
      'EFT portal enhancements',
      'Recurring deposits automation',
      'OMS self-help functionality',
    ],
  },
  {
    icon: Monitor,
    title: 'Finance Systems Modernisation',
    accent: 'var(--gold)',
    items: [
      'ZOHO Travel implementation support',
      'BSS Billing support',
      'FAM remediation',
      'IMS decommissioning preparation',
    ],
  },
  {
    icon: LineChart,
    title: 'Reporting & Visualisation',
    accent: 'var(--green)',
    items: [
      'SharePoint-enabled visibility',
      'Cashflow reporting dashboards',
      'SLA reporting automation opportunity',
      'Management insight packs',
    ],
  },
];

/* ── Section 3: FY27 Strategic Priorities ── */
const fy27Priorities = [
  {
    icon: Bot,
    title: 'Autonomous Finance Operations',
    items: [
      'Automate SLA reports',
      'Extract and age open GL transactions',
      'Reduce open bank account items to below 2 months',
      'BOT to produce the All Payments report',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Predictive Finance',
    items: [
      'Advanced cash flow analytics',
      'Free Cash Flow vs Bank Cash Flow alignment',
      'Forecasting accuracy',
      'Scenario planning',
    ],
  },
  {
    icon: Shield,
    title: 'Intelligent Control Environment',
    items: [
      'Automated debit order file matching',
      'Monthly VAT correction on bank charges instead of annual correction',
      'Exception monitoring',
      'Audit-ready trails',
    ],
  },
  {
    icon: RefreshCw,
    title: 'System Closure & Stabilisation',
    items: [
      'Conclude Wholesale system issues',
      'Finalise FAM revaluation process',
      'TIBS shutdown scheduled for June 2026',
      'Finalise IMS exit and reconciliation tracking',
      'Revisit TBI Known Damages process with SharePoint tracking and LMS/dashboard integration',
    ],
  },
];

/* ── Section 4: AI Opportunity Heatmap ── */
const heatmapRows = [
  { process: 'SLA Reporting', current: 'Manual extraction and ageing', opportunity: 'Automated SLA BOT', impact: 'Faster reporting, fewer manual errors' },
  { process: 'Open GL Items', current: 'Manual investigation', opportunity: 'AI-assisted prioritisation', impact: 'Reduced ageing and stronger controls' },
  { process: 'All Payments Report', current: 'Manual compilation', opportunity: 'BOT-generated reporting', impact: 'Faster payment visibility' },
  { process: 'Debit Order Files', current: 'Manual matching', opportunity: 'Automated matching engine', impact: 'Improved accuracy and turnaround' },
  { process: 'Cash Flow Forecasting', current: 'Analyst-led forecasting', opportunity: 'Predictive analytics model', impact: 'Better liquidity decisions' },
  { process: 'VAT Corrections', current: 'Annual correction', opportunity: 'Monthly automated monitoring', impact: 'Lower year-end risk' },
  { process: 'TBI Known Damages', current: 'Fragmented tracking', opportunity: 'SharePoint + dashboard integration', impact: 'Better visibility and governance' },
];

/* ── Section 5: AI Trends in F&A 2026 ── */
const aiTrends = [
  { icon: Bot, title: 'Agentic AI & Autonomous Workflows', text: 'Agentic AI and autonomous finance workflows shifting teams from tasks to oversight.' },
  { icon: Zap, title: 'Routine Accounting Automation', text: 'Automation of reconciliations, invoices, journals and routine accounting.' },
  { icon: LineChart, title: 'Predictive & Prescriptive Analytics', text: 'Predictive and prescriptive analytics for cash flow, risk and investment decisions.' },
  { icon: Globe, title: 'Cloud AI Finance Platforms', text: 'Cloud-based AI finance platforms enabling scalable, integrated intelligence.' },
  { icon: AlertTriangle, title: 'Fraud & Anomaly Monitoring', text: 'Fraud detection and anomaly monitoring for stronger control environments.' },
  { icon: Scale, title: 'ESG & Regulatory Automation', text: 'ESG and regulatory compliance automation aligned to global standards.' },
  { icon: Users, title: 'Advisory Finance Shift', text: 'Shift from transactional finance to advisory finance and strategic partnership.' },
];

/* ── Section 6: Risk & Governance ── */
const risks = [
  { icon: Database, title: 'Data Governance', text: 'Clean data pipelines and structured finance data are prerequisites for reliable AI outputs.', color: 'var(--telkom-blue)' },
  { icon: Lock, title: 'Cybersecurity & Audit Trails', text: 'Robust cybersecurity and immutable audit trails to protect financial integrity.', color: 'var(--red)' },
  { icon: Users, title: 'Talent Gap & AI Literacy', text: 'Finance teams need AI literacy and analytics skills to operate augmented workflows.', color: 'var(--gold)' },
  { icon: Scale, title: 'Regulatory Uncertainty', text: 'Rapid AI adoption may outpace legislation — active compliance monitoring required.', color: 'var(--orange)' },
  { icon: RefreshCw, title: 'Change Management & Adoption', text: 'Adoption risk if automation and controls are not embedded in daily operations.', color: 'var(--purple)' },
  { icon: Shield, title: 'Role-Based Access & Controls', text: 'Role-based access and a strengthened control environment for audit readiness.', color: 'var(--green)' },
];

/* ── Section 7: Strategic Roadmap ── */
const roadmapPhases = [
  {
    cls: 'p1', num: 'Phase 01', title: 'Foundation & Automation', time: '0–12 Months',
    items: [
      'Automate SLA reporting',
      'Launch All Payments BOT',
      'Debit order matching automation',
      'Clean finance data pipelines',
    ],
    impact: 'Quick wins — faster reporting, reduced manual effort, cleaner data',
  },
  {
    cls: 'p2', num: 'Phase 02', title: 'Predictive Intelligence', time: '1–3 Years',
    items: [
      'Predictive cash flow forecasting',
      'Exception and anomaly detection',
      'AI-assisted reconciliations',
      'Continuous controls monitoring',
    ],
    impact: 'Stronger liquidity decisions, proactive controls, fewer surprises',
  },
  {
    cls: 'p3', num: 'Phase 03', title: 'Autonomous Finance', time: '3–5 Years',
    items: [
      'Agentic finance workflows',
      'Real-time finance command centre',
      'Autonomous close cycle support',
      'Finance as strategic advisory partner',
    ],
    impact: 'Strategic finance function — real-time, advisory, competitively differentiated',
  },
];

const EXECUTIVE_TAKEAWAY =
  'F&A is moving beyond transactional processing into an AI-enabled finance intelligence model. FY26 established the operational and digital foundation. FY27 must now scale automation, predictive analytics, and integrated controls to create a faster, cleaner, more strategic finance function.';

function PillarCard({ icon: Icon, title, items, accent }) {
  return (
    <div className="fa-pillar-card" style={{ borderTopColor: accent }}>
      <div className="fa-pillar-icon" style={{ background: `color-mix(in srgb, ${accent} 12%, transparent)`, color: accent }}>
        <Icon size={22} />
      </div>
      <h3 className="fa-pillar-title">{title}</h3>
      <ul className="fa-pillar-list">
        {items.map((item, i) => (
          <li key={i}><span className="fa-pillar-dot" style={{ background: accent }} />{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function FASection() {
  return (
    <>
      {/* ── Section 1: Executive Snapshot ── */}
      <section className="section" id="fa-hero" style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #0a3050 45%, #062240 100%)',
        borderBottom: '3px solid #0082ca',
      }}>
        <div style={{ maxWidth: 960 }}>
          <div className="section-tag" style={{ color: '#00b4d8' }}>Finance & Accounting</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 8,
            letterSpacing: 0.5,
            lineHeight: 1.15,
          }}>
            Finance & Accounting Intelligence <span style={{ color: '#00b4d8' }}>Command Centre</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 32, maxWidth: 720, lineHeight: 1.65 }}>
            From operational finance to predictive, AI-enabled strategic advisory.
          </p>
          <div className="card-grid-4">
            {kpiTiles.map((m, i) => (
              <div key={i} className="fa-glass-kpi" style={{ borderTopColor: m.c }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: m.c, lineHeight: 1, marginBottom: 6 }}>{m.v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', lineHeight: 1.45 }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FY26 Executive Highlights ── */}
      <section className="section alt" id="fa-highlights">
        <div className="section-tag">F&A · Section 01</div>
        <h2 className="section-title">Executive <span>Snapshot</span></h2>
        <p className="section-subtitle">FY26 performance highlights — closure excellence, digital delivery, automation, analytics and recognition.</p>
        <div className="highlight-grid">
          {fy26Highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="highlight-card">
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div className={`card-icon ${h.variant}`} style={{ flexShrink: 0 }}><Icon size={17} /></div>
                  <div>
                    <div className="card-title" style={{ fontSize: 14, marginBottom: 6 }}>{h.title}</div>
                    <div className="card-text">{h.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 2: Transformation Highlights FY26 ── */}
      <section className="section" id="fa-transform">
        <div className="section-tag">F&A · Section 02</div>
        <h2 className="section-title">Transformation Highlights <span>FY26</span></h2>
        <p className="section-subtitle">Four capability pillars that defined the digital and analytical foundation for FY27 scale-up.</p>
        <div className="fa-pillar-grid">
          {transformationPillars.map((p, i) => (
            <PillarCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* ── Section 3: FY27 Strategic Priorities ── */}
      <section className="section alt" id="fa-focus">
        <div className="section-tag">F&A · Section 03</div>
        <h2 className="section-title">FY27 Strategic <span>Priorities</span></h2>
        <p className="section-subtitle">Roadmap-style priorities — autonomous operations, predictive finance, intelligent controls and system closure.</p>
        <div className="fa-roadmap-pillars">
          {fy27Priorities.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="fa-roadmap-pillar" data-step={String(i + 1).padStart(2, '0')}>
                <div className="fa-roadmap-pillar-head">
                  <div className="focus-icon"><Icon size={20} /></div>
                  <div className="focus-title">{p.title}</div>
                </div>
                <ul className="fa-pillar-list" style={{ marginTop: 12 }}>
                  {p.items.map((item, j) => (
                    <li key={j}><span className="fa-pillar-dot" style={{ background: 'var(--telkom-blue)' }} />{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 4: AI Opportunity Heatmap ── */}
      <section className="section" id="fa-heatmap">
        <div className="section-tag">F&A · Section 04</div>
        <h2 className="section-title">AI Opportunity <span>Heatmap</span></h2>
        <p className="section-subtitle">Process-by-process view of current state, automation opportunity and expected executive impact.</p>
        <div style={{ overflowX: 'auto' }}>
          <table className="exec-table fa-heatmap-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Current State</th>
                <th>AI / Automation Opportunity</th>
                <th>Expected Impact</th>
              </tr>
            </thead>
            <tbody>
              {heatmapRows.map((row, i) => (
                <tr key={i}>
                  <td className="td-area">{row.process}</td>
                  <td>{row.current}</td>
                  <td className="td-app">{row.opportunity}</td>
                  <td>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 5: AI Trends in F&A 2026 ── */}
      <section className="section alt" id="fa-trends">
        <div className="section-tag">F&A · Section 05</div>
        <h2 className="section-title">AI Trends in F&A <span>2026</span></h2>
        <p className="section-subtitle">Market forces shaping the finance function — and the direction of Telkom F&A evolution.</p>
        <div className="fa-trends-grid">
          {aiTrends.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="fa-trend-card">
                <div className="card-icon default" style={{ marginBottom: 12 }}><Icon size={18} /></div>
                <div className="card-title" style={{ fontSize: 14, marginBottom: 8 }}>{t.title}</div>
                <div className="card-text">{t.text}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 6: Risk & Governance ── */}
      <section className="section" id="fa-risks">
        <div className="section-tag">F&A · Section 06</div>
        <h2 className="section-title">Risk & <span>Governance</span></h2>
        <p className="section-subtitle">Critical enablers and guardrails for responsible AI-led finance transformation.</p>
        <div className="card-grid-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {risks.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="card" style={{ borderLeft: `4px solid ${r.color}`, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ color: r.color, flexShrink: 0, marginTop: 2 }}><Icon size={20} /></div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{r.title}</div>
                  <div className="card-text">{r.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 7: Strategic Roadmap ── */}
      <section className="section alt" id="fa-roadmap">
        <div className="section-tag">F&A · Section 07</div>
        <h2 className="section-title">Strategic <span>Roadmap</span></h2>
        <p className="section-subtitle">Three-phase journey from automation foundation to autonomous, advisory finance intelligence.</p>
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
      </section>

      {/* ── Section 8: Executive Takeaway ── */}
      <section className="section" id="fa-takeaway" style={{
        background: 'linear-gradient(180deg, var(--bg-white) 0%, var(--telkom-light) 100%)',
        borderTop: '1px solid var(--border-blue)',
      }}>
        <div className="section-tag">F&A · Section 08</div>
        <h2 className="section-title">Executive <span>Takeaway</span></h2>
        <div className="callout-quote gold" style={{ marginBottom: 0, fontSize: 'clamp(15px, 1.6vw, 18px)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <MessageSquare size={28} style={{ flexShrink: 0, opacity: 0.85, marginTop: 2 }} />
          <span>&ldquo;{EXECUTIVE_TAKEAWAY}&rdquo;</span>
        </div>
      </section>
    </>
  );
}
