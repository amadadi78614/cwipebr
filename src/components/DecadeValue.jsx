const metrics = [
  { v: 'R60m',   l: 'Abortive cost recovery identified',                  cls: 'gold-tile' },
  { v: 'R140m',  l: 'Finance costs surfaced through Hold Reasons Analytics', cls: 'gold-tile' },
  { v: 'R5.1m',  l: 'Network damages opportunity identified',              cls: 'gold-tile' },
  { v: 'R6.7m',  l: 'Inter-project material opportunity uncovered',        cls: 'gold-tile' },
  { v: '103%',   l: 'Project execution management achieved',               cls: 'blue-tile' },
  { v: '34%',    l: 'Electronic automated asset verification coverage',    cls: 'blue-tile' },
  { v: '26%',    l: 'TAT improvement across key processes',                cls: 'blue-tile' },
  { v: '99.6%',  l: 'Asset base verification completed — first cycle',     cls: 'blue-tile' },
  { v: '36',     l: 'CoE value-add projects delivered',                    cls: 'blue-tile' },
  { v: 'Zero',   l: 'Audit issues over the programme lifecycle',           cls: 'green-tile' },
  { v: 'Best SSC', l: 'Best SSC in South Africa — BPeSA National Award',  cls: 'gold-tile' },
  { v: '100%',   l: 'On-time capitalisation record over 8 years',          cls: 'green-tile' },
];

export default function DecadeValue() {
  return (
    <section className="section" id="value">
      <div className="section-tag">Section 10</div>
      <h2 className="section-title">Decade of <span>Measurable Value</span></h2>
      <p className="section-subtitle">
        Numbers that represent a decade of discipline, innovation, and unwavering delivery.
      </p>

      <div className="metric-wall" style={{ marginBottom: 40 }}>
        {metrics.map((m, i) => (
          <div key={i} className={`metric-tile ${m.cls}`}>
            <div className="metric-value">{m.v}</div>
            <div className="metric-label">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="callout-quote gold">
        "Every number represents a human decision, a relationship, and a process reengineered — by the same team, year after year."
      </div>
    </section>
  );
}
