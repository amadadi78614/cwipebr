import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

const T = { backgroundColor:'#1a2332', titleColor:'#fff', bodyColor:'#cce8f6' };
const scl = { grid:{ color:'rgba(0,0,0,0.05)' }, ticks:{ color:'#4a5568', font:{ family:'Barlow Condensed', size:11 } } };
const baseOpts = { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ color:'#4a5568', font:{ family:'Barlow Condensed', size:11 }, padding:12, boxWidth:10 } }, tooltip:T }, scales:{ x:scl, y:scl } };

const budgetData = {
  labels:['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
  datasets:[
    { label:'Spend Plan', data:[420,480,510,550,590,620,640,670,700,710,730,760], borderColor:'#e07b00', backgroundColor:'transparent', tension:0.4, pointRadius:3, borderDash:[5,3] },
    { label:'Actuals YTD', data:[390,455,490,520,570,605,630,650,null,null,null,null], borderColor:'#0082ca', backgroundColor:'rgba(0,130,202,0.08)', fill:true, tension:0.4, pointRadius:3 },
  ],
};

const aucData = {
  labels:['Mobile','Openserve','IT Systems','Other BUs','Shared Infra'],
  datasets:[{ label:'AUC Balance (Rm)', data:[1240,890,540,320,210],
    backgroundColor:['#0082ca','#00b4d8','#e07b00','#00875a','#6200ea'],
    borderColor:['#005a8e','#0096b3','#b86300','#006644','#4a00b3'],
    borderWidth:1, borderRadius:4 }],
};

const holdData = {
  labels:['Vendor Dispute','Design Change','Budget Freeze','BU Approval','Technical Review'],
  datasets:[{ data:[28,22,18,17,15],
    backgroundColor:['#c0392b','#e65100','#e07b00','#0082ca','#6200ea'],
    borderColor:'#fff', borderWidth:2 }],
};

const dOpts = { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ color:'#4a5568', font:{ family:'Barlow Condensed', size:11 }, padding:12, boxWidth:10 } }, tooltip:T }, cutout:'60%' };

const wayForward = [
  'Place AUC model into production by close of Q1 FY27',
  'Validate report completeness across all BU segments',
  'Validate data accuracy for trend modelling',
  'Explore next frontier of analytics using trusted data and institutional knowledge',
];

export default function CWIPAnalytics() {
  return (
    <section className="section" id="analytics">
      <div className="section-tag">Section 08</div>
      <h2 className="section-title">CWIP Intelligence <span>Analytics</span></h2>
      <p className="section-subtitle">From raw SAP extracts to an intelligent analytics hub — daily-refreshed capital visibility across all BUs.</p>

      <div className="analytics-grid" style={{ marginBottom:28 }}>
        <div className="chart-wrap">
          <div className="chart-wrap-title">Actuals vs Spend Plan · YTD (Rm)</div>
          <div style={{ height:210 }}><Line data={budgetData} options={baseOpts} /></div>
        </div>
        <div className="chart-wrap">
          <div className="chart-wrap-title">AUC Balance Snapshot by BU (Rm)</div>
          <div style={{ height:210 }}><Bar data={aucData} options={baseOpts} /></div>
        </div>
        <div className="chart-wrap">
          <div className="chart-wrap-title">Project-on-Hold — Reason Split</div>
          <div style={{ height:210 }}><Doughnut data={holdData} options={dOpts} /></div>
        </div>
      </div>

      <div className="card-grid-4" style={{ marginBottom:28 }}>
        {[
          { v:'R3.2bn', l:'Total Active AUC Balance',          c:'var(--gold)' },
          { v:'2,847',  l:'Projects in AUC Lifecycle Tracker', c:'var(--telkom-blue)' },
          { v:'34%',    l:'Electronic Verification Coverage',  c:'var(--green)' },
          { v:'103%',   l:'Project Execution Management',      c:'var(--telkom-blue)' },
        ].map((m,i)=>(
          <div key={i} className="metric-tile" style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, color:m.c, marginBottom:6, lineHeight:1 }}>{m.v}</div>
            <div className="metric-label">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding:24 }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:2, color:'var(--telkom-blue)', textTransform:'uppercase', marginBottom:16 }}>Way Forward</div>
        <div className="card-grid-2">
          {wayForward.map((item,i)=>(
            <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
              <div style={{ width:22, height:22, borderRadius:'50%', background:'var(--telkom-light)', border:'1px solid var(--border-blue)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'var(--font-mono)', fontSize:10, color:'var(--telkom-blue)', fontWeight:700 }}>{i+1}</div>
              <div style={{ fontSize:13, color:'var(--text-secondary)', lineHeight:1.5, paddingTop:3 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
