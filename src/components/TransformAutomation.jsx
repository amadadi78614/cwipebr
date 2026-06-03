import { Zap, CheckCircle, RefreshCw, BarChart2 } from 'lucide-react';

const engineRows = [
  {
    initiative: 'Capex Data Extraction for AUC Management',
    processArea: 'AUC Management & Reporting',
    lever: 'LSS / Automation — scheduled extraction',
    impact: 'Auto-scheduled AUC reporting cuts TAT; frees SMEs for strategic capital work',
    status: 'In Test',
    statusClass: 'tag-test',
    icon: Zap,
  },
  {
    initiative: 'Carry-over Funding',
    processArea: 'Budget Alignment & Funding',
    lever: 'Python / Sequential Transaction',
    impact: 'Enables carry-over project funding; reduces SME dependency on manual processes',
    status: 'On Hold',
    statusClass: 'tag-hold',
    icon: RefreshCw,
  },
  {
    initiative: 'Electronic Asset Verification',
    processArea: 'Asset Management & Verification',
    lever: 'SAP Custom Transaction + RPA',
    impact: '99.6% verification support; real-time national status; resource reduction',
    status: 'Live',
    statusClass: 'tag-live',
    icon: CheckCircle,
  },
  {
    initiative: 'Project AUC Life Cycle Analytics',
    processArea: 'CWIP Analytics & Dashboards',
    lever: 'Analytics Dashboard / Data Model',
    impact: 'Daily-refreshed AUC model; multi-year opening balance per BU; full visibility',
    status: 'Go-Live Ready',
    statusClass: 'tag-ready',
    icon: BarChart2,
  },
];

const summaryTiles = [
  { v: '4', l: 'Engine initiatives tracked', c: 'var(--telkom-blue)' },
  { v: '2', l: 'Live in production', c: 'var(--green)' },
  { v: '99.6%', l: 'Asset verification achieved', c: 'var(--telkom-blue)' },
  { v: '>26%', l: 'TAT improvement on key processes', c: 'var(--gold)' },
];

export default function TransformAutomation() {
  return (
    <section className="section" id="transform">
      <div className="section-tag">Section 03</div>
      <h2 className="section-title">Automation & Transformation <span>Engine</span></h2>
      <p className="section-subtitle">
        Unified view of automation, process transformation and digital enablement — with clear business impact and delivery status.
      </p>

      <div className="card-grid-4" style={{ marginBottom: 28 }}>
        {summaryTiles.map((m, i) => (
          <div key={i} className="metric-tile" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: m.c, lineHeight: 1, marginBottom: 6 }}>{m.v}</div>
            <div className="metric-label">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="engine-table-wrap">
        <table className="exec-table engine-table">
          <thead>
            <tr>
              <th>Initiative</th>
              <th>Process Area</th>
              <th>Automation / Transformation Lever</th>
              <th>Business Impact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {engineRows.map((row, i) => {
              const Icon = row.icon;
              return (
                <tr key={i}>
                  <td className="td-area">
                    <div className="engine-initiative-cell">
                      <div className="engine-initiative-icon"><Icon size={15} /></div>
                      <span>{row.initiative}</span>
                    </div>
                  </td>
                  <td>{row.processArea}</td>
                  <td className="td-app">{row.lever}</td>
                  <td>{row.impact}</td>
                  <td><span className={`card-tag ${row.statusClass}`}>{row.status}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="callout-quote" style={{ marginBottom: 0 }}>
        &ldquo;The engine is running — automation in production, analytics on the threshold of production, and FY27 priorities extending digital enablement across every capital workstream.&rdquo;
      </div>
    </section>
  );
}
