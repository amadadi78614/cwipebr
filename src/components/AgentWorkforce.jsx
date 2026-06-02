import {
  TrendingUp, RefreshCw, Shield, BarChart2,
  AlertTriangle, PauseCircle, Lock, LineChart
} from 'lucide-react';

const agents = [
  {
    icon: TrendingUp,
    name: 'Capex Forecast Agent',
    purpose: 'Predict capitalisation timing and variance risk across all BUs',
    inputs: 'SAP PS project data, historical results, spend plan, cashflow model',
    actions: 'Forecasts capitalisation timing, surfaces variance risk, generates scenario models',
    benefit: 'Improves Smart CapEx decisions and budget accuracy',
  },
  {
    icon: RefreshCw,
    name: 'AUC Lifecycle Agent',
    purpose: 'Manage the full AUC project lifecycle from creation to settlement',
    inputs: 'SAP PS AUC balances, project milestones, BU completion signals',
    actions: 'Monitors lifecycle stages, triggers settlement alerts, tracks multi-year opening balances',
    benefit: 'Eliminates aged AUC and accelerates capital conversion',
  },
  {
    icon: Shield,
    name: 'Asset Verification Agent',
    purpose: 'Automate and extend asset verification across all asset classes',
    inputs: 'SAP AA register, field scan data, asset custodian responses',
    actions: 'Schedules verification cycles, tracks completion, flags exceptions in real time',
    benefit: 'Sustains 99.6%+ verification with reduced manual resources',
  },
  {
    icon: BarChart2,
    name: 'Depreciation Forecast Agent',
    purpose: 'Model asset-level depreciation for improved financial planning',
    inputs: 'Asset register, useful life data, network simplification programme data',
    actions: 'Builds depreciation forecasts per asset, identifies accelerated depreciation opportunities',
    benefit: 'Accurate depreciation projections aligned with Network Simplification',
  },
  {
    icon: AlertTriangle,
    name: 'FNLD Risk Agent',
    purpose: 'Predict and flag FNLD risk before it crystallises',
    inputs: 'Mobile PMO project data, funding schedules, carry-over history',
    actions: 'Scores FNLD risk per project, surfaces early warning signals, recommends interventions',
    benefit: 'Reduces Mobile PMO FNLD through proactive intervention',
  },
  {
    icon: PauseCircle,
    name: 'Project-on-Hold Agent',
    purpose: 'Analyse and resolve held capital projects systematically',
    inputs: 'SAP PS hold reasons, vendor dispute logs, budget freeze data',
    actions: 'Categorises hold reasons, tracks resolution progress, surfaces R140m+ finance cost exposure',
    benefit: 'Reduces capital locked in held projects and accelerates release',
  },
  {
    icon: Lock,
    name: 'Capex Governance Agent',
    purpose: 'Enforce capital approval controls and audit compliance',
    inputs: 'SAP PS approval workflows, capex policy rules, audit findings register',
    actions: 'Validates approvals, flags policy breaches, generates audit-ready documentation',
    benefit: 'Sustains zero audit issues across the capital programme',
  },
  {
    icon: LineChart,
    name: 'Executive Insight Agent',
    purpose: 'Synthesise capital intelligence into executive-ready narrative',
    inputs: 'All agent outputs, BU performance data, strategic targets',
    actions: 'Generates EBR-ready summaries, variance commentary, and forward outlook',
    benefit: 'Enables data-driven executive conversations at every review',
  },
];

export default function AgentWorkforce() {
  return (
    <section className="section" id="agents">
      <div className="section-tag">Section 12</div>
      <h2 className="section-title">Agentic Capex <span>Workforce</span></h2>
      <p className="section-subtitle">
        Eight purpose-built AI agents — each governing a critical capital management domain, under human oversight.
      </p>

      <div className="agent-grid">
        {agents.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="agent-card">
              <div className="agent-icon">
                <Icon size={20} />
              </div>
              <div className="agent-name">{a.name}</div>

              <div className="agent-row">
                <div className="agent-row-label">Purpose</div>
                <div className="agent-row-text">{a.purpose}</div>
              </div>
              <div className="agent-row">
                <div className="agent-row-label">Inputs</div>
                <div className="agent-row-text">{a.inputs}</div>
              </div>
              <div className="agent-row">
                <div className="agent-row-label">Actions</div>
                <div className="agent-row-text">{a.actions}</div>
              </div>
              <div className="agent-row">
                <div className="agent-row-label">Executive Benefit</div>
                <div className="agent-benefit">{a.benefit}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="callout-quote" style={{ marginBottom: 0 }}>
        "Human oversight remains the safety net. WNS governs the agents — the agents govern the data — and the data drives every capital decision."
      </div>
    </section>
  );
}
