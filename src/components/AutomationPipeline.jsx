const automations = [
  {
    col: 'test',
    status: 'In Test',
    statusClass: 'tag-test',
    cardClass: 'test',
    title: 'Capex Data Extraction for AUC Management',
    type: 'LSS / Automation',
    impact: 'Auto-scheduled AUC reporting cuts TAT and frees SMEs for strategic work across capital programmes.',
    next: 'Full rollout and monitoring',
  },
  {
    col: 'hold',
    status: 'On Hold',
    statusClass: 'tag-hold',
    cardClass: 'hold',
    title: 'Carry-over Funding',
    type: 'Python / Sequential Transaction',
    impact: 'Enables budget alignment funding for carry-over projects, cutting SME dependency on manual processes.',
    next: 'Client implemented own solution',
  },
  {
    col: 'live',
    status: 'Live',
    statusClass: 'tag-live',
    cardClass: 'live',
    title: 'Electronic Asset Verification',
    type: 'SAP Custom Transaction',
    impact: 'Supports 99.6% verification, reduces verification resources, improves real-time status visibility nationally.',
    next: 'Expanding to Metro Ethernet and POTN',
  },
  {
    col: 'ready',
    status: 'Go-Live Ready',
    statusClass: 'tag-ready',
    cardClass: 'ready',
    title: 'Project AUC Life Cycle Analytics',
    type: 'Analytics Dashboard',
    impact: 'Daily-refreshed AUC model with multi-year opening balance per BU — full operational visibility.',
    next: 'Operationalise reporting model Q1',
  },
];

const columns = [
  { key: 'concept', label: 'Concept' },
  { key: 'build',   label: 'Build' },
  { key: 'test',    label: 'Test' },
  { key: 'live',    label: 'Live' },
];

export default function AutomationPipeline() {
  return (
    <section className="section alt" id="automation">
      <div className="section-tag">Section 04</div>
      <h2 className="section-title">RPA & Automation <span>Pipeline</span></h2>
      <p className="section-subtitle">
        Four purposeful automation initiatives — each designed to eliminate repetitive data work and elevate the team toward advisory-grade contribution.
      </p>

      <div className="pipeline-board">
        {columns.map(col => {
          const cards = automations.filter(a => a.col === col.key ||
            (col.key === 'live' && (a.col === 'live' || a.col === 'ready')));
          // Special layout: distribute cards
          return (
            <div key={col.key}>
              <div className="pipeline-col-header">{col.label}</div>
              {col.key === 'test' && automations.filter(a => a.col === 'test').map((a, i) => (
                <Card key={i} a={a} />
              ))}
              {col.key === 'hold' && automations.filter(a => a.col === 'hold').map((a, i) => (
                <Card key={i} a={a} />
              ))}
              {col.key === 'live' && automations.filter(a => a.col === 'live').map((a, i) => (
                <Card key={i} a={a} />
              ))}
              {col.key === 'concept' && (
                <div style={{
                  background: 'rgba(13,30,47,0.4)',
                  border: '1px dashed rgba(0,170,255,0.1)',
                  borderRadius: 8, padding: 16,
                  textAlign: 'center',
                  fontSize: 12, color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}>
                  Future initiatives enter here
                </div>
              )}
              {col.key === 'build' && (
                <div style={{
                  background: 'rgba(13,30,47,0.4)',
                  border: '1px dashed rgba(0,170,255,0.1)',
                  borderRadius: 8, padding: 16,
                  textAlign: 'center',
                  fontSize: 12, color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}>
                  <Card a={automations.find(a => a.col === 'ready')} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Simpler grid layout */}
      <div style={{ marginTop: 32 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10, letterSpacing: 2,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>All Initiatives</div>
        <div className="card-grid-2">
          {automations.map((a, i) => (
            <div key={i} className={`pipeline-card ${a.cardClass}`}>
              <span className={`card-tag ${a.statusClass}`}>{a.status}</span>
              <div className="pipeline-card-title">{a.title}</div>
              <div className="pipeline-card-type">{a.type}</div>
              <div className="pipeline-card-impact">{a.impact}</div>
              <div className="pipeline-card-next">→ {a.next}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ a }) {
  if (!a) return null;
  return (
    <div className={`pipeline-card ${a.cardClass}`} style={{ marginBottom: 0 }}>
      <span className={`card-tag ${a.statusClass}`}>{a.status}</span>
      <div className="pipeline-card-title">{a.title}</div>
      <div className="pipeline-card-type">{a.type}</div>
      <div className="pipeline-card-impact">{a.impact}</div>
      <div className="pipeline-card-next">→ {a.next}</div>
    </div>
  );
}
