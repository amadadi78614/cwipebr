import { Target, TrendingUp, ArrowDown, Wifi, Scissors, Cpu, LineChart, Database } from 'lucide-react';

const focusAreas = [
  { icon: Target,     num: '01', title: 'Smart Capex Deployment',        text: 'Support business units in smarter capital planning and deployment decisions backed by analytics.' },
  { icon: TrendingUp, num: '02', title: 'Improve Capital Conversion',     text: 'Drive further improvement in Mobile Capital Conversion Rate through enhanced project execution oversight.' },
  { icon: ArrowDown,  num: '03', title: 'Reduce Mobile PMO FNLD',         text: 'Further reduce the Mobile PMO FNLD balance through improved carry-over management and settlement governance.' },
  { icon: Wifi,       num: '04', title: 'Expand Electronic Verification', text: 'Extend electronic asset verification to Metro Ethernet and POTN environments in FY27 verification cycle.' },
  { icon: Scissors,   num: '05', title: 'Accelerated Depreciation',       text: 'Improve identification of accelerated depreciation opportunities supporting the Network Simplification programme.' },
  { icon: Cpu,        num: '06', title: 'Digital Transformation',         text: 'Drive digital interventions and transformation opportunities across all AM & Project Accounting workstreams.' },
  { icon: LineChart,  num: '07', title: 'Forecast Analytics',             text: 'Enhance capitalisation projection and depreciation forecast analytics for improved month-end predictability.' },
  { icon: Database,   num: '08', title: 'AUC Model in Production',        text: 'Place the AUC model into production by close of Q1 FY27, validating data accuracy and operational reporting.' },
];

export default function FY27Focus() {
  return (
    <section className="section" id="focus">
      <div className="section-tag">Section 02</div>
      <h2 className="section-title">FY27 <span>Focus Areas</span></h2>
      <p className="section-subtitle">
        Eight strategic priorities that will define performance, expand automation coverage, and deepen analytical capability in the year ahead.
      </p>

      <div className="focus-grid">
        {focusAreas.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="focus-card" data-num={f.num}>
              <div className="focus-icon"><Icon size={20} /></div>
              <div className="focus-title">{f.title}</div>
              <div className="focus-text">{f.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
