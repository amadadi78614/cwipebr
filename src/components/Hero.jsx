const WNSLogo = ({ height = 44 }) => (
  <svg height={height} viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="140" height="44" rx="3" fill="#1a1a2e"/>
    <text x="8" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="24" fill="white" letterSpacing="1">WNS</text>
    <text x="8" y="40" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.3">Part of Capgemini</text>
  </svg>
);

const TelkomLogo = ({ height = 38 }) => (
  <svg height={height} viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="26" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="28" fill="#00b5e2" letterSpacing="-1">T</text>
    <text x="20" y="26" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400" fontSize="28" fill="#00b5e2" letterSpacing="-0.5">elkom</text>
  </svg>
);

const kpis = [
  { value: '>74%',    label: 'Capital Conversion Rate',              variant: 'default' },
  { value: 'R433m',   label: 'Mobile PMO FNLD (↓ from R684m)',       variant: 'gold' },
  { value: '99.6%',   label: 'Asset Verification Completed',         variant: 'green' },
  { value: '4',       label: 'Active Automation Initiatives',        variant: 'default' },
  { value: '9',       label: 'Future Opportunities Scoped',          variant: 'gold' },
  { value: '36',      label: 'CoE Value-Add Projects Delivered',     variant: 'default' },
  { value: 'Zero',    label: 'Audit Issues',                         variant: 'green' },
  { value: 'Proven',  label: 'Decade Value Record',                  variant: 'gold' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-pattern" />
      <div className="hero-accent-bar" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100 }}>
        <div className="hero-logos">
          <WNSLogo height={44} />
          <div className="hero-logo-div" />
          <TelkomLogo height={38} />
        </div>

        <div className="hero-eyebrow">
          Shared Services · AM & Project Accounting
        </div>

        <h1 className="hero-title">
          <span className="blue">Capex</span> Intelligence<br />
          <span className="accent">Command</span> Centre
        </h1>

        <p className="hero-subtitle">
          Telkom Shared Services &nbsp;·&nbsp; Executive Business Review
        </p>
        <p className="hero-date">June 2026 &nbsp;·&nbsp; WNS Global Services · Part of Capgemini</p>

        <div className="hero-rule" />

        <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 580, fontStyle: 'italic', lineHeight: 1.7 }}>
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
