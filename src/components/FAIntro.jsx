export default function FAIntro() {
  return (
    <section className="hero" id="fa-intro">
      <div className="hero-pattern" />
      <div className="hero-accent-bar" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5.5vw, 76px)',
            fontWeight: 700,
            color: 'var(--telkom-blue)',
            lineHeight: 1,
            letterSpacing: 1,
            marginBottom: 10,
          }}>
            Telkom Shared Services
          </div>

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 38px)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: 0.5,
            marginBottom: 16,
          }}>
            Finance & Accounting
          </div>

          <div style={{
            fontFamily: 'var(--font-cond)',
            fontSize: 20,
            fontWeight: 400,
            color: 'var(--text-secondary)',
            letterSpacing: 1,
            marginBottom: 8,
          }}>
            Executive Business Review · May/June 2026
          </div>

          <div className="hero-rule" style={{ marginBottom: 30 }} />
        </div>

        <p style={{
          fontSize: 'clamp(20px, 1.1vw, 20px)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--text-primary)',
          maxWidth: 1200,
          lineHeight: 1.4,
          marginTop: 0,
          marginBottom: 0,
          letterSpacing: '-0.02em',
        }}>
          In 2026, AI in Finance & Accounting is defined by agentic AI systems, predictive analytics, and automation
          <span style={{ color: 'var(--telkom-blue)' }}> → shifting professionals from routine compliance</span>
          <span style={{ color: 'var(--telkom-blue)' }}> → to strategic advisory roles</span>
          <span style={{ color: 'var(--telkom-blue)' }}> → driving real-time financial intelligence</span>
        </p>
      </div>
    </section>
  );
}
