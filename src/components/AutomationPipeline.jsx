/* Executive initiative portfolio — no Concept/Build/Live lifecycle board */

const automations = [
  {
    name: 'Capex Data Extraction for AUC Management',
    objective: 'Automate AUC data extraction and scheduled reporting',
    status: 'In Test',
    statusClass: 'tag-test',
    value: 'Cuts TAT; frees SMEs for strategic capital work',
    risk: 'Rollout depends on extract stability and monitoring',
  },
  {
    name: 'Carry-over Funding',
    objective: 'Automate budget alignment for carry-over projects',
    status: 'On Hold',
    statusClass: 'tag-hold',
    value: 'Reduces manual SME dependency on funding processes',
    risk: 'Client alternate solution in place',
  },
  {
    name: 'Electronic Asset Verification',
    objective: 'SAP transaction-led national electronic verification',
    status: 'Live',
    statusClass: 'tag-live',
    value: '99.6% verification; real-time visibility nationally',
    risk: 'Metro Ethernet and POTN expansion in FY27',
  },
  {
    name: 'Project AUC Life Cycle Analytics',
    objective: 'Daily-refreshed AUC model with BU opening balances',
    status: 'Go-Live Ready',
    statusClass: 'tag-ready',
    value: 'Full CWIP operational visibility',
    risk: 'Q1 production — validate all BU data accuracy',
  },
];

export default function AutomationPipeline() {
  return (
    <section className="section alt" id="automation">
      <div className="section-tag">Automation Portfolio</div>
      <h2 className="section-title">Executive Initiative <span>Portfolio</span></h2>
      <p className="section-subtitle">
        Transformation initiatives presented for executive review — not a project lifecycle board.
      </p>
      <div className="portfolio-grid">
        {automations.map((a, i) => (
          <article key={i} className="portfolio-card">
            <div className="portfolio-card-top">
              <span className={`card-tag ${a.statusClass}`}>{a.status}</span>
              <span className="portfolio-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h4 className="portfolio-card-name">{a.name}</h4>
            <div className="portfolio-field">
              <span className="portfolio-label">Business objective</span>
              <p>{a.objective}</p>
            </div>
            <div className="portfolio-field">
              <span className="portfolio-label">Expected value</span>
              <p>{a.value}</p>
            </div>
            <div className="portfolio-field portfolio-field-risk">
              <span className="portfolio-label">Risk / dependency</span>
              <p>{a.risk}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
