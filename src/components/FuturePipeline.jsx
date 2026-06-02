import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const now    = ['Capex Data Extraction — full rollout','AUC Life Cycle Analytics go-live','F2027 IT Hardware & Software Verification'];
const next   = ['Metro Ethernet + POTN asset verification','Capitalisation Forecast aligned with Depreciation Model','Multi-year AUC opening balance per BU'];
const beyond = ['Predictive AUC and Capex modelling','Agentic Capex workflow orchestration','Cross-BU autonomous reporting and insight'];

const growthData = {
  labels: ['FY26 Current', 'FY26 End', 'FY27', 'FY28+'],
  datasets: [{
    label: 'Cumulative Live Automations',
    data: [2, 4, 8, 13],
    backgroundColor: ['#cce8f6','#0082ca','#00b4d8','#e07b00'],
    borderColor:     ['#0082ca','#005a8e','#0096b3','#b86300'],
    borderWidth: 1, borderRadius: 5,
  }],
};

const growthOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { backgroundColor: '#1a2332', titleColor: '#fff', bodyColor: '#cce8f6' },
  },
  scales: {
    x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#4a5568', font: { family: 'Barlow Condensed', size: 12 } } },
    y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#4a5568', font: { family: 'Barlow Condensed', size: 12 } }, beginAtZero: true },
  },
};

export default function FuturePipeline() {
  return (
    <section className="section alt" id="pipeline">
      <div className="section-tag">Section 05</div>
      <h2 className="section-title">Pipeline & <span>Future Opportunities</span></h2>
      <p className="section-subtitle">9 opportunities scoped across 3 horizons — growing from 4 live automations today to 13 by FY28.</p>

      <div className="card-grid-4" style={{ marginBottom: 36 }}>
        {[
          { v:'9',   l:'Future Opportunities Scoped',          c:'var(--telkom-blue)' },
          { v:'3',   l:'Planning Horizons (Now/Next/Beyond)',   c:'var(--gold)' },
          { v:'5',   l:'CWIP & AM Workstreams Touched',         c:'var(--telkom-blue)' },
          { v:'→13', l:'Cumulative Automations Live by FY28',   c:'var(--green)' },
        ].map((m,i)=>(
          <div key={i} className="card" style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:34, fontWeight:700, color:m.c, lineHeight:1, marginBottom:8 }}>{m.v}</div>
            <div className="card-text">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="roadmap-cols" style={{ marginBottom: 36 }}>
        <div className="roadmap-col">
          <div className="roadmap-col-header">
            <div className="roadmap-col-phase">Horizon 1</div>
            <div className="roadmap-col-title now">NOW</div>
            <div className="roadmap-col-time">0–90 Days · Lock In</div>
          </div>
          <div className="roadmap-col-body now">
            {now.map((item,i)=><div key={i} className="roadmap-item"><span className="roadmap-dot"/>{item}</div>)}
          </div>
        </div>
        <div className="roadmap-col">
          <div className="roadmap-col-header">
            <div className="roadmap-col-phase">Horizon 2</div>
            <div className="roadmap-col-title next">NEXT</div>
            <div className="roadmap-col-time">FY27 · Scale & Deepen</div>
          </div>
          <div className="roadmap-col-body next">
            {next.map((item,i)=><div key={i} className="roadmap-item"><span className="roadmap-dot"/>{item}</div>)}
          </div>
        </div>
        <div className="roadmap-col">
          <div className="roadmap-col-header">
            <div className="roadmap-col-phase">Horizon 3</div>
            <div className="roadmap-col-title beyond">BEYOND</div>
            <div className="roadmap-col-time">FY28+ · Strategic Shift</div>
          </div>
          <div className="roadmap-col-body beyond">
            {beyond.map((item,i)=><div key={i} className="roadmap-item"><span className="roadmap-dot"/>{item}</div>)}
          </div>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        <div className="chart-wrap">
          <div className="chart-wrap-title">Automation Growth Trajectory</div>
          <div style={{ height: 200 }}><Bar data={growthData} options={growthOptions} /></div>
        </div>
        <div className="callout-quote" style={{ margin:0, display:'flex', alignItems:'center' }}>
          "From process automation → predictive insight → autonomous capital management."
        </div>
      </div>
    </section>
  );
}
