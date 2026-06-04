import {
  Target, TrendingUp, ArrowDown, Wifi, Scissors, Cpu, LineChart, Database
} from 'lucide-react';

const focusAreas = [
  { icon: Target,     num: '01', title: 'Support Smart Capex Deployment',         text: 'Back capital planning decisions and deployment with capex management and analytics across all BUs.', accent: 'var(--telkom-blue)' },
  { icon: TrendingUp, num: '02', title: 'Improve Mobile Capital Conversion',       text: 'Drive further CCR improvement through enhanced execution oversight.', accent: 'var(--cyan)' },
  { icon: ArrowDown,  num: '03', title: 'Reduce Mobile PMO FNLD',                  text: 'Further reduce FNLD balance through enhanced project rendering.', accent: 'var(--telkom-dark)' },
  { icon: Wifi,       num: '04', title: 'Expand Electronic Verification',          text: 'Extend to Metro Ethernet and POTN in FY27 verification cycle.', accent: 'var(--green)' },
  { icon: Scissors,   num: '05', title: 'Accelerated Depreciation Identification', text: 'Identify opportunities supporting the Network Simplification programme.', accent: 'var(--gold)' },
  { icon: Cpu,        num: '06', title: 'Drive Digital Transformation',            text: 'Digital interventions across all AM & Project Accounting workstreams.', accent: 'var(--telkom-blue)' },
  { icon: LineChart,  num: '07', title: 'Enhance Forecast Analytics',              text: 'Capitalisation projection and depreciation forecast for better close predictability.', accent: 'var(--purple)' },
  { icon: Database,   num: '08', title: 'AUC Model into Production',               text: 'Place AUC model into production by close of Q1 FY27.', accent: 'var(--green)' },
];

export default function FY27Focus() {
  return (
    <section className="section alt focus-premium-section" id="focus">
      <div className="focus-premium-bg" aria-hidden />
      <div className="focus-premium-inner">
        <div className="focus-premium-header">
          <div className="section-tag">Section 02</div>
          <h2 className="section-title focus-premium-title">
            FY27 <span>Focus Areas</span>
          </h2>
          <p className="section-subtitle focus-premium-sub">
            Eight strategic priorities defining performance, automation coverage and analytical depth for the year ahead.
          </p>
        </div>

        <div className="focus-premium-grid">
          {focusAreas.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="focus-premium-card" style={{ '--focus-accent': f.accent }}>
                <div className="focus-premium-card-glow" aria-hidden />
                <div className="focus-premium-card-top">
                  <div className="focus-premium-icon">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <span className="focus-premium-num">{f.num}</span>
                </div>
                <h3 className="focus-premium-card-title">{f.title}</h3>
                <p className="focus-premium-card-text">{f.text}</p>
                <div className="focus-premium-accent-bar" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
