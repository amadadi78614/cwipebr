import {
  CheckCircle, Zap, BarChart2, Shield, TrendingUp,
  Globe, Award, Layers, Bot, LineChart, Lock,
  Database, Users, Scale, RefreshCw, Wallet,
  Monitor, AlertTriangle, MessageSquare
} from 'lucide-react';

/* ── Section 1: FY26 Highlights  ── */
const kpiTiles = [
  { v: 'FY26',       l: 'Successful year-end closure & audit support',                                                           c: '#fff' },
  { v: 'SME',        l: 'Testing & implementation of Telkom system deployments',                                                  c: '#00b4d8' },
  { v: '6+',         l: 'RPA & automation initiatives delivering TAT gains, Accuracy & CSAT',                                    c: '#00b4d8' },
  { v: 'Analytics',  l: 'Dedicated Analytics Support in Strategic Areas — Cashflow reporting, Insights, and predictive outputs to support cash flow targets', c: '#00b4d8' },
  { v: 'System',     l: 'System Stabilisation — Wholesale environment (FAM CR closures)',                                        c: '#00b4d8' },
  { v: 'WNS BPET League Award 2026',      l: 'Consistent Telkom campaign VOC scores',                                    c: '#e07b00' },
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
    title: 'Future-ready operations with upstream & downstream integration',
    accent: 'var(--telkom-blue)',
    items: [
      'eInvoicing (end-to-end P2P landscape)',
      'Stabilised & self-service platforms',
      'Automated reporting & superior customer experience',
      'Effective & impactful outputs',
    ],
  },
  {
    icon: Zap,
    title: 'Digital Led Business Transformation/Enablement',
    accent: 'var(--cyan)',
    items: [
      'AI-driven automation and BOT-based solutions',
      'Data as fuel (Process Input) to transform F&A Operations',
      'Exception monitoring',
      
    ],
  },
  {
    icon: Monitor,
    title: 'Execute AI Driven Automations, Seamless Integration & the Next Frontier of Analytics',
    accent: 'var(--gold)',
    items: [
      'Support Free Cash Flow vs Bank Cash Flow alignment through advanced analytics',
      'Finance as a strategic, insight-led partner',
      'Explore the “Next Frontier” within Analytics and identify use cases',
    ],
  },
  {
    icon: LineChart,
    title: 'Assurance, Governance & Controls',
    accent: 'var(--green)',
    items: [
      'Resolution of system risks impacting financial reporting (stabilisation)',
      'WNS Risk Register closure & OPEX Audits (Process maturity validation)',
      
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
  { process: 'Consolidation of FAS PayPro files', current: 'Manual consolidation & removal of duplicates', opportunity: '	BOT-generated reporting', impact: 'Consolidation, TAT & Accuracy' },
  { process: 'Refund control matching', current: 'Manual review', opportunity: '	BOT-generated reporting', impact: 'Improved matching to determine reconciling items' },
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
      {/* ── Section 1: FY26 Highlights── */}
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
            Finance & Accounting<span style={{ color: '#00b4d8' }}> Overview</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 32, maxWidth: 720, lineHeight: 1.65 }}>
            From operational finance to predictive, AI-enabled strategic advisory.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
            {kpiTiles.map((m, i) => (
              <div key={i} className="fa-glass-kpi" style={{ borderTopColor: m.c }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: m.c, lineHeight: 1, marginBottom: 6 }}>{m.v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{m.l}</div>
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
        <h2 className="section-title">Focus Areas <span>FY27</span></h2>
        <p className="section-subtitle">Four capability pillars that defined the digital and analytical foundation for FY27 scale-up.</p>
        <div className="fa-pillar-grid">
          {transformationPillars.map((p, i) => (
            <PillarCard key={i} {...p} />
          ))}
        </div>
      </section>



      {/* ── Section 4: AI Opportunity Heatmap ── */}
      <section className="section" id="fa-heatmap">
        <div className="section-tag">F&A · Section 04</div>
        <h2 className="section-title">Automation & Transformation <span>Engine</span></h2>
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

      {/* ── Section 7: Analytics ── */}
      <section className="section alt" id="fa-roadmap">
        <div className="section-tag">F&A · Section 07</div>
        <h2 className="section-title">F&A <span>Analytics</span></h2>
        <p className="section-subtitle">TBI Tracking Dashboard — data updated 6/3/26.</p>
        <div style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
        }}>
          <img
            src="/faanalytics.jpg"
            alt="TBI Tracking Dashboard"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
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
