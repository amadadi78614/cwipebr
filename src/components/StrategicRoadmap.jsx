import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend);

const phases = [
  { cls:'p1', num:'Phase 01', title:'Short-Term Wins', time:'0–12 Months',
    items:['Improve capitalisation forecasts using historical results','Break down projects for faster close','Scenario planning with cashflow model','Depreciation forecasts with asset-level modelling','AUC model into production by Q1'],
    impact:'Faster close cycles, reduced errors, improved governance' },
  { cls:'p2', num:'Phase 02', title:'Mid-Term Transformation', time:'1–3 Years',
    items:['AI and analytics for project variables','Track complex projects across vendors and sites','Real-time project progress dashboards','Automated capitalisation checks','Cross-module SAP integration: PS, MM, FI, AA','Audit and traceability automation'],
    impact:'Consistency, reduced manual judgment, enhanced audit readiness' },
  { cls:'p3', num:'Phase 03', title:'Long-Term Strategic Advantage', time:'3–5 Years',
    items:['Agentic AI for end-to-end Capex workflows','Real-time finance function','Integrated advisory model for capital strategy','ESG reporting and compliance leadership','Human oversight as strategic safety net'],
    impact:'Competitive differentiation and stronger corporate influence' },
];

const maturityData = {
  labels: ['Today','Q4 FY26','FY27 Mid','FY27 End','FY28 Mid','FY29+'],
  datasets: [
    { label:'Automation Maturity', data:[2,4,5,7,9,13], borderColor:'#0082ca', backgroundColor:'rgba(0,130,202,0.08)', fill:true, tension:0.4, pointBackgroundColor:'#0082ca', pointRadius:4 },
    { label:'AI Intelligence Level', data:[1,2,3,5,7,10], borderColor:'#e07b00', backgroundColor:'rgba(224,123,0,0.06)', fill:true, tension:0.4, pointBackgroundColor:'#e07b00', pointRadius:4 },
  ],
};

const opts = {
  responsive:true, maintainAspectRatio:false,
  plugins: {
    legend: { position:'bottom', labels:{ color:'#4a5568', font:{ family:'Barlow Condensed', size:12 }, padding:14, boxWidth:12 } },
    tooltip: { backgroundColor:'#1a2332', titleColor:'#fff', bodyColor:'#cce8f6' },
  },
  scales: {
    x: { grid:{ color:'rgba(0,0,0,0.05)' }, ticks:{ color:'#4a5568', font:{ family:'Barlow Condensed', size:12 } } },
    y: { grid:{ color:'rgba(0,0,0,0.05)' }, ticks:{ color:'#4a5568', font:{ family:'Barlow Condensed', size:12 } }, beginAtZero:true },
  },
};

export default function StrategicRoadmap() {
  return (
    <section className="section alt" id="roadmap">
      <div className="section-tag">Section 07</div>
      <h2 className="section-title">Strategic Roadmap for <span>AI in Capex</span></h2>
      <p className="section-subtitle">A three-phase journey from short-term wins to a fully agentic, real-time capital management function.</p>
      <div className="phase-grid" style={{ marginBottom:36 }}>
        {phases.map((p,i)=>(
          <div key={i} className={`phase-card ${p.cls}`}>
            <div className="phase-header">
              <div className="phase-number">{p.num}</div>
              <div className="phase-title">{p.title}</div>
              <div className="phase-time">{p.time}</div>
            </div>
            <div className="phase-body">
              {p.items.map((item,j)=><div key={j} className="phase-item"><span className="phase-dot"/>{item}</div>)}
              <div className="phase-impact">{p.impact}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="chart-wrap">
        <div className="chart-wrap-title">Maturity Trajectory — Automation & Intelligence</div>
        <div style={{ height:230 }}><Line data={maturityData} options={opts} /></div>
      </div>
    </section>
  );
}
