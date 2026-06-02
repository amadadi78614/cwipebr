const kpis = [
  { value: '>74%',    label: 'Capital Conversion Rate', variant: 'default' },
  { value: 'R433m',   label: 'Mobile PMO FNLD (from R684m)', variant: 'gold' },
  { value: '99.6%',   label: 'Asset Verification Completed', variant: 'green' },
  { value: '4',       label: 'Active Automation Initiatives', variant: 'default' },
  { value: '9',       label: 'Future Opportunities Scoped', variant: 'gold' },
  { value: '36',      label: 'CoE Value-Add Projects Delivered', variant: 'default' },
  { value: 'Zero',    label: 'Audit Issues', variant: 'green' },
  { value: 'Proven',  label: 'Decade Value Record', variant: 'gold' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200 }}>
        <div className="hero-badge">
          <span>Live EBR Dashboard</span>
        </div>

        <h1 className="hero-title">
          <span className="accent">Capex</span> Intelligence<br />
          <span className="gold">Command</span> Centre
        </h1>

        <p className="hero-subtitle">
          Telkom Shared Services &nbsp;·&nbsp; AM & Project Accounting Executive Business Review
        </p>
        <p className="hero-date">June 2026 &nbsp;·&nbsp; WNS Global Services</p>

        <div className="hero-divider" />

        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 600, fontStyle: 'italic' }}>
          "From asset management and CWIP execution → automation → predictive analytics → agentic capital management."
        </p>

        <div className="hero-kpi-grid">
          {kpis.map((k, i) => (
            <div key={i} className={`hero-kpi ${k.variant}`}>
              <div className="hero-kpi-value">{k.value}</div>
              <div className="hero-kpi-label">{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
