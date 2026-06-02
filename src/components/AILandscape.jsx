const tableRows = [
  {
    area: 'Routine Accounting',
    ai: 'Automated reconciliations and period-end processing',
    relevance: 'SAP PS/AA direct automation target — invoice matching, AUC posting, depreciation runs',
  },
  {
    area: 'Advisory Services',
    ai: 'Predictive analytics and executive dashboards',
    relevance: 'Smart CapEx decisions — capitalisation forecasting, spend variance, FNLD risk scoring',
  },
  {
    area: 'Risk Management',
    ai: 'Real-time anomaly detection and approval controls',
    relevance: 'Capex approval and execution control — exception flagging, audit trail automation',
  },
  {
    area: 'Cloud / ERP',
    ai: 'Unified AI-native platforms integrated with ERPs',
    relevance: 'SAP ECC 6.0 + AI layer integration — bridging legacy infrastructure with modern intelligence',
  },
  {
    area: 'Talent Utilisation',
    ai: 'Shift clerical roles toward strategic contribution',
    relevance: 'WNS team upskilling — freeing project accountants to become capital strategy advisors',
  },
];

const imperatives = [
  {
    title: 'SAP PS: Gold Standard for Telco CapEx',
    text: 'SAP Project Systems remains the gold standard for Telco capital programme management — the platform for AI-layer integration.',
  },
  {
    title: '78% of Executives Must Reinvent',
    text: '78% of finance executives say they must reinvent operating models to support agentic AI — the transition is already underway.',
  },
  {
    title: 'Month-End: Weeks → Days',
    text: 'Automation compresses the month-end close cycle from weeks to days — unlocking faster insight and improved governance.',
  },
  {
    title: 'Agentic AI: The New Foundation',
    text: 'Agentic AI is rapidly becoming the foundation of future financial operations — from routine tasks to strategic capital decisions.',
  },
];

export default function AILandscape() {
  return (
    <section className="section" id="ai">
      <div className="section-tag">Section 06</div>
      <h2 className="section-title">AI in Finance <span>Landscape</span></h2>
      <p className="section-subtitle">
        What the market is saying — and why the WNS / Telkom approach is positioned at the leading edge of this transformation.
      </p>

      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10, letterSpacing: 2,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>Market Intelligence Matrix</div>
        <div style={{ overflowX: 'auto' }}>
          <table className="exec-table">
            <thead>
              <tr>
                <th style={{ width: '18%' }}>Finance Area</th>
                <th style={{ width: '36%' }}>AI Application</th>
                <th style={{ width: '46%' }}>WNS / Telkom Relevance</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i}>
                  <td className="td-area">{row.area}</td>
                  <td className="td-app">{row.ai}</td>
                  <td>{row.relevance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10, letterSpacing: 2,
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        marginBottom: 16,
      }}>Automation Imperative</div>

      <div className="imperative-grid">
        {imperatives.map((imp, i) => (
          <div key={i} className="imperative-card">
            <div className="imperative-num">0{i + 1}</div>
            <div className="imperative-text">
              <strong>{imp.title}</strong>
              {imp.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
