const envStats = [
  { v: '30,000',     l: 'Active projects managed concurrently' },
  { v: '20,000',     l: 'Complex projects capitalised per annum' },
  { v: '1.2m',       l: 'Asset lines in the register' },
  { v: '20+',        l: 'Interconnected IT systems mastered' },
  { v: '144',        l: 'Asset custodians' },
  { v: '7,000+',     l: 'Asset owners engaged' },
  { v: '265',        l: 'Asset classes managed' },
  { v: '1,400+',     l: 'Exchange areas nationally' },
];

const timeline = [
  {
    year: '2016–17',
    cls: '',
    title: 'Inception',
    bullets: [
      'Co-location model established',
      'CoE established with Lean Six Sigma across priority processes',
    ],
  },
  {
    year: '2018',
    cls: '',
    title: 'First Automation & Analytics',
    bullets: [
      'First robot deployed in production',
      'Analytics tools built for capital management',
      'Capitalisation Lifecycle and Regional Project Lifecycle tools delivered',
    ],
  },
  {
    year: '2019',
    cls: '',
    title: 'Scale & Digitisation',
    bullets: [
      'LSS and RPA projects scaled across domains',
      'Digitisation of upstream documentation',
      'Funding movement analytics live',
    ],
  },
  {
    year: '2020',
    cls: 'highlight',
    title: 'Zero Disruption Under COVID-19',
    bullets: [
      'COVID-19: zero operational disruption',
      'Best SSC in SA — BPeSA National Award',
    ],
  },
  {
    year: '2021–23',
    cls: '',
    title: 'Higher-Order Data Maturity',
    bullets: [
      'Higher-order data maturity programmes',
      '36 CoE value-add projects delivered',
    ],
  },
  {
    year: '2024–25',
    cls: 'highlight',
    title: 'Openserve Carve-Out & E-Verification',
    bullets: [
      'Openserve carve-out manual CPA completed',
      '6 bots/tools deployed for electronic asset verification',
    ],
  },
  {
    year: '2026',
    cls: 'gold',
    title: 'Intelligence Layer Activated',
    bullets: [
      'PS_Download bot live',
      'Electronic Asset Verification SAP transaction',
      'MSAN/ISAM, GPON, IT Hardware, IT Software verified',
      '34% asset base electronic verification achieved',
      'AUC dashboard operational',
    ],
  },
];

export default function TenYears() {
  return (
    <section className="section alt" id="tenyears">
      <div className="section-tag">Section 09</div>
      <h2 className="section-title">Ten Years. <span>One Team.</span></h2>

      <div className="callout-quote" style={{ marginTop: 0, marginBottom: 40 }}>
        "What WNS built inside Telkom took ten years — and it is still building."
      </div>

      {/* Environment Mastered */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 16 }}>Environment Mastered</div>
        <div className="env-grid">
          {envStats.map((s, i) => (
            <div key={i} className="env-stat">
              <div className="env-value">{s.v}</div>
              <div className="env-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 24 }}>Journey Timeline</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px' }}>
        <div className="timeline">
          {timeline.slice(0, 4).map((item, i) => (
            <div key={i} className={`timeline-item ${item.cls}`}>
              <div className="timeline-year">{item.year} — {item.title}</div>
              <ul className="timeline-bullets timeline-content">
                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="timeline">
          {timeline.slice(4).map((item, i) => (
            <div key={i} className={`timeline-item ${item.cls}`}>
              <div className="timeline-year">{item.year} — {item.title}</div>
              <ul className="timeline-bullets timeline-content">
                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
