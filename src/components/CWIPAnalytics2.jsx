import { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const T   = { backgroundColor:'#1a2332', titleColor:'#fff', bodyColor:'#e8f4fd' };
const scl = {
  grid: { color:'rgba(0,0,0,0.07)' },
  ticks: { color:'#2d3748', font:{ family:'Barlow Condensed', size:12 } }
};

/* ── BU data ─────────────────────────────────────────────────── */
const BUS = ['All','Consumer','Corporate Centre','Group IT','Gyro','Openserve','Telkom Properties'];
const buData = {
  'All':               { cwip:2208.7, fnld:494.7, buildReady:238.5, auc:1475.5, hold:58.8, plan:4.6, activeAuc:1412.1, withinDur:690.5, exceedDur:721.6 },
  'Consumer':          { cwip:420.1,  fnld:89.2,  buildReady:48.1,  auc:280.3,  hold:9.2,  plan:0.8, activeAuc:268.5,  withinDur:128.4, exceedDur:140.1 },
  'Corporate Centre':  { cwip:185.4,  fnld:38.4,  buildReady:21.2,  auc:122.1,  hold:3.6,  plan:0.3, activeAuc:116.8,  withinDur:54.2,  exceedDur:62.6  },
  'Group IT':          { cwip:312.6,  fnld:64.8,  buildReady:35.6,  auc:208.4,  hold:8.4,  plan:0.6, activeAuc:199.2,  withinDur:90.1,  exceedDur:109.1 },
  'Gyro':              { cwip:98.2,   fnld:20.4,  buildReady:11.2,  auc:65.4,   hold:2.1,  plan:0.2, activeAuc:62.5,   withinDur:28.6,  exceedDur:33.9  },
  'Openserve':         { cwip:890.4,  fnld:198.4, buildReady:96.2,  auc:594.6,  hold:23.6, plan:1.8, activeAuc:568.8,  withinDur:278.2, exceedDur:290.6 },
  'Telkom Properties': { cwip:302.0,  fnld:83.5,  buildReady:26.2,  auc:204.7,  hold:11.9, plan:0.9, activeAuc:196.3,  withinDur:111.0, exceedDur:85.3  },
};

const fnldBuckets = { labels:['210 Days','545 Days','180 Days','120 Days','240 Days'], exceed:[0.40,0.02,0.01,0.005,0.015], within:[0.00,0.01,0.005,0.002,0.000] };
const holdBuckets = { labels:['545 Days','210 Days','150 Days','180 Days','90 Days'],  exceed:[0.11,0.02,0.01,0.008,0.005], within:[0.05,0.01,0.005,0.003,0.002] };
const aucBuckets  = { labels:['210 Days','0 Days','180 Days','120 Days','90 Days'],    exceed:[0.16,0.44,0.08,0.03,0.02],   within:[0.43,0.15,0.06,0.02,0.01]   };

function DurationChart({ title, data }) {
  return (
    <div className="chart-wrap" style={{ padding:'14px 16px' }}>
      <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:700, letterSpacing:1, color:'#2d3748', textTransform:'uppercase', marginBottom:10 }}>{title}</div>
      <div style={{ height:140 }}>
        <Bar
          data={{ labels:data.labels, datasets:[
            { label:'EXCEEDING DURATION', data:data.exceed, backgroundColor:'#e53935', borderRadius:2, barThickness:10 },
            { label:'WITHIN DURATION',    data:data.within, backgroundColor:'#43a047', borderRadius:2, barThickness:10 },
          ]}}
          options={{
            indexAxis:'y', responsive:true, maintainAspectRatio:false,
            plugins:{
              legend:{ position:'bottom', labels:{ color:'#2d3748', font:{ family:'Barlow Condensed', size:11 }, padding:8, boxWidth:10 } },
              tooltip:T
            },
            scales:{
              x:{ grid:{ color:'rgba(0,0,0,0.06)' }, ticks:{ color:'#2d3748', font:{ family:'Barlow Condensed', size:10 } } },
              y:{ grid:{ display:false }, ticks:{ color:'#2d3748', font:{ family:'Barlow Condensed', size:10 } } },
            },
          }}
        />
      </div>
    </div>
  );
}

/* ── Tree primitives ─────────────────────────────────────────── */
function Node({ label, value }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth:0, flex:1 }}>
      <div style={{ background:'#0082ca', color:'#fff', borderRadius:5, padding:'6px 8px', textAlign:'center', width:'100%', boxShadow:'0 1px 4px rgba(0,0,0,0.12)' }}>
        <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:700, letterSpacing:0.3, lineHeight:1.3, whiteSpace:'pre-line' }}>{label}</div>
      </div>
      <div style={{ background:'#e8ecf1', border:'1px solid #c8d0da', borderRadius:5, padding:'5px 8px', textAlign:'center', width:'100%', marginTop:3 }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:700, color:'#1a2332', lineHeight:1 }}>{value}M</div>
      </div>
    </div>
  );
}
const VLine = ({ h=14 }) => <div style={{ width:2, height:h, background:'#b0bec5', alignSelf:'center' }} />;
const HLine = ({ w=12 }) => <div style={{ height:2, width:w, background:'#b0bec5', alignSelf:'center', flexShrink:0 }} />;
const Dot   = ()          => <div style={{ width:7, height:7, borderRadius:'50%', background:'#78909c', alignSelf:'center', flexShrink:0 }} />;

const wayForward = [
  'Place AUC model into production by close of Q1 FY27',
  'Validate report completeness across all BU segments',
  'Validate data accuracy for trend modelling',
  'Explore next frontier of analytics using trusted data and institutional knowledge',
];

export default function CWIPAnalytics() {
  const [bu, setBU]         = useState('All');
  const [period, setPeriod] = useState('2026');
  const d = buData[bu];

  return (
    <section className="section" id="analytics">
      <div className="section-tag">Section 08</div>
      <h2 className="section-title">CWIP Intelligence <span>Analytics</span></h2>
      <p className="section-subtitle">From raw SAP extracts to an intelligent analytics hub — daily-refreshed capital visibility across all BUs.</p>

      {/* ══ ROW 1: Tree LEFT  |  Duration charts RIGHT ══ */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16, minWidth:0 }}>

        {/* LEFT — CWIP tree */}
        <div className="chart-wrap" style={{ padding:'16px 18px', minWidth:0, overflow:'hidden' }}>
          {/* Header */}
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:14, flexWrap:'wrap', gap:8 }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:700, color:'var(--text-primary)' }}>
              CWIP Breakdown&nbsp;<span style={{ color:'var(--telkom-blue)' }}>FY{period}-12</span>
            </div>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:8, color:'#4a5568', letterSpacing:1, marginBottom:2 }}>PERIOD</div>
                <select value={period} onChange={e=>setPeriod(e.target.value)}
                  style={{ border:'1px solid var(--border)', borderRadius:5, padding:'3px 8px', fontSize:11, color:'#1a2332', background:'var(--bg-base)', cursor:'pointer' }}>
                  {['2024','2025','2026'].map(y=><option key={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:8, color:'#4a5568', letterSpacing:1, marginBottom:2 }}>BUSINESS UNIT</div>
                <select value={bu} onChange={e=>setBU(e.target.value)}
                  style={{ border:'1px solid var(--border)', borderRadius:5, padding:'3px 8px', fontSize:11, color:'#1a2332', background:'var(--bg-base)', cursor:'pointer' }}>
                  {BUS.map(b=><option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Tree — matches screenshot layout exactly */}
          <div style={{ display:'flex', flexDirection:'column', width:'100%', minWidth:0, gap:0 }}>

            {/* Row 1: CWIP Total (left) + FNLD + Build Ready (right) */}
            <div style={{ display:'flex', alignItems:'stretch', gap:8 }}>
              {/* CWIP Total */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:110, flexShrink:0 }}>
                <Node label="Cwip Total" value={d.cwip.toFixed(1)} />
                <VLine h={16} />
                <Dot />
              </div>
              <HLine w={12} />
              {/* FNLD + Build Ready */}
              <div style={{ display:'flex', gap:8, flex:1 }}>
                <Node label={"Built – Not Ready\nfor Capitalisation"} value={d.fnld.toFixed(1)} />
                <Node label={"Built – Ready for\nCapitalisation"}      value={d.buildReady.toFixed(1)} />
              </div>
            </div>

            {/* Connector to AUC Total */}
            <div style={{ display:'flex', marginLeft:116, alignItems:'center', margin:'3px 0 3px 116px' }}>
              <Dot /><HLine w={10} />
            </div>

            {/* Row 2: AUC Total — full width of right column */}
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ width:110, flexShrink:0 }} />
              <HLine w={12} />
              <div style={{ flex:1 }}>
                <Node label="AUC Total" value={d.auc.toFixed(1)} />
              </div>
            </div>

            {/* Connector + Hold/Plan */}
            <div style={{ display:'flex', marginLeft:'122px', alignItems:'center', margin:'3px 0 3px 122px' }}>
              <VLine h={12} />
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ width:110, flexShrink:0 }} />
              <HLine w={12} />
              <div style={{ display:'flex', gap:8, flex:1 }}>
                <Node label="Build in Hold" value={d.hold.toFixed(1)} />
                <Node label="Build in Plan"  value={d.plan.toFixed(1)} />
              </div>
            </div>

            {/* Connector to Active AUC */}
            <div style={{ display:'flex', alignItems:'center', margin:'3px 0 3px 122px' }}>
              <Dot /><HLine w={10} />
            </div>

            {/* Row 3: Active AUC — full width */}
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ width:110, flexShrink:0 }} />
              <HLine w={12} />
              <div style={{ flex:1 }}>
                <Node label="Active AUC" value={d.activeAuc.toFixed(1)} />
              </div>
            </div>

            {/* Connector + Within/Exceeding */}
            <div style={{ display:'flex', margin:'3px 0 3px 122px' }}>
              <VLine h={12} />
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ width:110, flexShrink:0 }} />
              <HLine w={12} />
              <div style={{ display:'flex', gap:8, flex:1 }}>
                <Node label="Within Duration"    value={d.withinDur.toFixed(1)} />
                <Node label="Exceeding Duration" value={d.exceedDur.toFixed(1)} />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — 3 duration charts stacked */}
        <div style={{ display:'flex', flexDirection:'column', gap:12, minWidth:0 }}>
          <DurationChart title="Built - Not Ready for Capitalisation (FNLD)" data={fnldBuckets} />
          <DurationChart title="Built on HOLD"                                data={holdBuckets} />
          <DurationChart title="Active AUC"                                   data={aucBuckets}  />
        </div>
      </div>

      {/* ══ ROW 2: AUC Balance + Project-on-Hold ══ */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:24 }}>
        <div className="chart-wrap" style={{ minWidth:0, overflow:'hidden' }}>
          <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:700, letterSpacing:1.5, color:'#2d3748', textTransform:'uppercase', marginBottom:14 }}>AUC Balance Snapshot by BU (Rm)</div>
          <div style={{ height:230, position:'relative' }}>
            <Bar
              data={{
                labels:['Mobile','Openserve','IT Systems','Other BUs','Shared Infra'],
                datasets:[{ label:'AUC Balance (Rm)', data:[1240,890,540,320,210],
                  backgroundColor:['#0082ca','#00b4d8','#e07b00','#00875a','#6200ea'],
                  borderColor:['#005a8e','#0096b3','#b86300','#006644','#4a00b3'],
                  borderWidth:1, borderRadius:4 }],
              }}
              options={{ responsive:true, maintainAspectRatio:false,
                plugins:{ legend:{display:false}, tooltip:T },
                scales:{ x:scl, y:{...scl, beginAtZero:true} } }}
            />
          </div>
        </div>

        <div className="chart-wrap" style={{ minWidth:0, overflow:'hidden' }}>
          <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:700, letterSpacing:1.5, color:'#2d3748', textTransform:'uppercase', marginBottom:14 }}>Project-on-Hold — Reason Split</div>
          <div style={{ height:230, position:'relative' }}>
            <Doughnut
              data={{
                labels:['Vendor Dispute','Design Change','Budget Freeze','BU Approval','Technical Review'],
                datasets:[{ data:[28,22,18,17,15],
                  backgroundColor:['#c0392b','#e65100','#e07b00','#0082ca','#6200ea'],
                  borderColor:'#fff', borderWidth:2 }],
              }}
              options={{ responsive:true, maintainAspectRatio:false, cutout:'60%',
                plugins:{ legend:{ position:'bottom', labels:{ color:'#2d3748', font:{ family:'Barlow Condensed', size:12 }, padding:12, boxWidth:10 } }, tooltip:T } }}
            />
          </div>
        </div>
      </div>

      {/* ══ Way Forward ══ */}
      <div className="card" style={{ padding:24 }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:2, color:'var(--telkom-blue)', textTransform:'uppercase', marginBottom:16 }}>Way Forward</div>
        <div className="card-grid-2">
          {wayForward.map((item,i)=>(
            <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
              <div style={{ width:22, height:22, borderRadius:'50%', background:'var(--telkom-light)', border:'1px solid var(--border-blue)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'var(--font-mono)', fontSize:10, color:'var(--telkom-blue)', fontWeight:700 }}>{i+1}</div>
              <div style={{ fontSize:13, color:'#2d3748', lineHeight:1.5, paddingTop:3 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
