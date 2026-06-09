import {
  CheckCircle, Zap, BarChart2, Shield, Award, Layers,
  AlertTriangle, Users, Lock, RefreshCw, Scale, Globe,
  Bot, TrendingUp, MessageSquare, Database, LineChart,
  Cpu, Star, Target
} from 'lucide-react';

// ── FY26 Highlights ─────────────────────────────────────────
const fy26 = [
  { icon: Zap,          metric: 'PAYMENOW', color: '#007B7F', title: 'Payroll Implementation Support',        text: 'Full rollout and payroll configuration support delivered across the Telkom payroll environment.' },
  { icon: Database,     metric: 'PRMA',     color: '#0082CA', title: 'SharePoint Reconciliation',             text: 'Replacing manual Excel reconciliation with SharePoint consolidation — improved accuracy and TAT.' },
  { icon: Layers,       metric: 'Blueprint',color: '#007B7F', title: 'HR & Payroll Business Processes',       text: 'Mapping and documenting end-to-end HR & Payroll business processes — defining the standard blueprint.' },
  { icon: Users,        metric: 'TRF',      color: '#0082CA', title: 'Employee Transition',                   text: 'TRF carve-out: Separating TRF employees into a dedicated company and payroll structure.' },
  { icon: BarChart2,    metric: 'B-BBEE',   color: '#00875A', title: 'Analytics Value Model',                 text: 'Skills B-BBEE analytics model aligned with BEE verification agency — ready for FY26 reporting run.' },
  { icon: Award,        metric: 'Award',    color: '#E07B00', title: 'WNS BPET League Award 2026',            text: 'Consistent VOC scores recognised — allocated to Telkom Shared Services campaign.' },
];

// ── FY27 Focus Areas ─────────────────────────────────────────
const fy27 = [
  { icon: Bot,        num:'01', title:'AI-Driven Automations & Analytics',  text:'Drive transformation initiatives across Payroll & HR Admin streams. Explore the "Next Frontier" within Analytics.' },
  { icon: BarChart2,  num:'02', title:'ATR & Skills B-BBEE Enhancement',    text:'Enhancement to ATR & Skills B-BBEE data capturing methods to achieve real-time reporting.' },
  { icon: Cpu,        num:'03', title:'EC & ECP Implementation',            text:'UAT testing scheduled from 12 May to end of June 2026 — production rollout to follow.' },
  { icon: Zap,        num:'04', title:'Third Party Payroll Deductions',      text:'Delimit all 3rd party deductions in Payroll — retain only statutory deductions (PAYE, UIF, etc.).' },
  { icon: Target,     num:'05', title:'SAP Fiori Roll-out',                  text:'Digital transformation of the ESS dashboard — leave submission, approvals and payslips on mobile or SAP prem.' },
  { icon: Globe,      num:'06', title:'Seamless Integration',                text:'Achieve upstream & downstream integration across HR and Payroll systems for real-time data flow.' },
];

// ── AI Trends ────────────────────────────────────────────────
const trends = [
  { num:'01', title:'Payroll Automation & Compliance',
    pts:['AI payroll systems handle complex tax rules, multi-country compliance, and hybrid work arrangements automatically.',
         '77% of HR executives report using AI in payroll processing, reducing errors and improving efficiency.',
         'AI tools flag anomalies in payments, preventing fraud and ensuring compliance with labour laws.'], color:'#007B7F' },
  { num:'02', title:'Generative AI in HR Administration',
    pts:['AI drafts job descriptions, contracts, and HR communications — with human oversight to avoid inaccuracies.',
         'HR teams treat AI as a "junior colleague" — creative and efficient but requiring guidance.',
         'Increasingly embedded in HR platforms for onboarding, policy updates, and employee engagement.'], color:'#0082CA' },
  { num:'03', title:'Predictive Workforce Planning',
    pts:['AI analyses turnover trends, skills gaps, and market data to support strategic hiring decisions.',
         'Reduces attrition by identifying at-risk employees before they resign.',
         'Requires quality, structured workforce data to deliver reliable predictions.'], color:'#007B7F' },
  { num:'04', title:'Intelligent Payroll Systems',
    pts:['Integrates with attendance and productivity systems for real-time variable pay calculations.',
         'Self-service portals allow employees to query payslips, benefits and tax forms via AI chatbots.',
         'Adapts to hybrid and global workforces with flexible payroll rules engines.'], color:'#E07B00' },
  { num:'05', title:'IT Collaboration & Governance',
    pts:['HR and IT must co-own AI strategy to ensure systems meet both technical and people-management needs.',
         'HR data is highly sensitive — AI systems must comply with GDPR, POPIA, and applicable regulations.',
         'Organisations must develop transparent AI policies covering algorithmic decisions in hiring and payroll.'], color:'#0082CA' },
];

// ── Risks ────────────────────────────────────────────────────
const risks = [
  { icon: Lock,        title:'Data Privacy',          text:'Payroll and HR data are highly sensitive. AI systems must comply with GDPR, POPIA (South Africa), and other regulations.', color:'#C0392B' },
  { icon: AlertTriangle,title:'Bias in AI Models',    text:'Recruitment and promotion algorithms risk perpetuating bias if not carefully monitored, audited, and corrected.', color:'#E07B00' },
  { icon: Users,       title:'Human Oversight',       text:'AI should augment HR — not replace human judgment — especially in sensitive employee relations and disciplinary processes.', color:'#0082CA' },
  { icon: RefreshCw,   title:'Change Management',     text:'Employees and managers may resist AI-driven HR tools. Active change management and communication plans are essential.', color:'#007B7F' },
  { icon: Database,    title:'Vendor Lock-in',        text:'Over-reliance on a single AI HR platform creates integration and cost risks. Clear exit and interoperability strategies needed.', color:'#6200EA' },
  { icon: Scale,       title:'Regulatory Uncertainty',text:'AI regulation is evolving rapidly. HR AI policies must be reviewed regularly to stay ahead of compliance requirements.', color:'#E07B00' },
];

// ── AI Comparison table ───────────────────────────────────────
const aiTable = [
  { area:'Payroll',             app:'Automated compliance, fraud detection',    benefit:'Accuracy, efficiency, global reach',  risk:'Data privacy, system errors' },
  { area:'HR Admin',            app:'Generative AI for documents & comms',      benefit:'Speed, creativity, reduced workload', risk:'Oversight needed, risk of bias' },
  { area:'Workforce Planning',  app:'Predictive analytics',                     benefit:'Better hiring, reduced attrition',    risk:'Requires quality data' },
  { area:'Employee Engagement', app:'Chatbots, sentiment analysis',             benefit:'24/7 support, morale tracking',       risk:'Over-reliance on automation' },
  { area:'Governance',          app:'HR–IT collaboration, ethical AI policies', benefit:'Secure data, fairness',               risk:'Implementation complexity' },
];

// ── Platform matrix ───────────────────────────────────────────
const platforms = [
  { cat:'Payroll AI',      name:'ADP Next-Gen Payroll',   features:'Automated compliance, anomaly detection, predictive payroll', strengths:'Global compliance, scalability',     challenges:'Multi-country tax complexity',    score:'9/10' },
  { cat:'Payroll AI',      name:'UKG Pro',                features:'AI payroll accuracy, workforce data integration',             strengths:'Seamless HR + payroll',             challenges:'Requires strong data governance', score:'8/10' },
  { cat:'Payroll AI',      name:'SAP SuccessFactors',     features:'Real-time adjustments, fraud detection',                     strengths:'Enterprise-grade, customizable',    challenges:'High implementation cost',       score:'9/10' },
  { cat:'Payroll AI',      name:'Workday Payroll',        features:'Predictive analytics, self-service portals',                  strengths:'Strong analytics',                  challenges:'Limited global vs ADP',          score:'7/10' },
  { cat:'HR Engagement',   name:'Workday HCM',            features:'AI chatbots, sentiment analysis, predictive attrition',       strengths:'Strong analytics, employee exp.',   challenges:'Data privacy concerns',          score:'9/10' },
  { cat:'HR Engagement',   name:'Oracle HCM Cloud',       features:'Generative AI for HR docs, personalised learning',            strengths:'Enterprise integration',            challenges:'Customization complexity',       score:'8/10' },
  { cat:'HR Engagement',   name:'Microsoft Viva',         features:'AI engagement insights, learning recommendations',             strengths:'Deep Microsoft ecosystem',          challenges:'Best for MS-centric orgs',       score:'8/10' },
  { cat:'HR Engagement',   name:'LinkedIn Learning',      features:'Personalised career development paths',                       strengths:'Massive content library',           challenges:'Limited HR admin functionality', score:'8/10' },
];

// ── Strategic Impact ─────────────────────────────────────────
const impacts = [
  { title:'Payroll Accuracy & Compliance',       text:'Payroll AI ensures accuracy and compliance, reducing financial and legal risks across all jurisdictions.', color:'#007B7F' },
  { title:'Employee Satisfaction & Retention',   text:'HR engagement AI enhances employee satisfaction and retention — critical in competitive talent markets.', color:'#0082CA' },
  { title:'Strategic HR Focus',                  text:'Together, they free HR professionals for strategic workforce planning rather than repetitive administration.', color:'#E07B00' },
];

export default function HROSection() {
  return (
    <>
      {/* ── Introduction ── */}
      <section className="hero" id="hro-intro">
        <div className="hero-pattern" />
        <div className="hero-accent-bar" style={{ background: 'linear-gradient(90deg, #007B7F, #00b4d8, #007B7F)' }} />
        <div style={{ position:'relative', zIndex:1, maxWidth:1100 }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'#00b4d8', letterSpacing:2, marginBottom:14, textTransform:'uppercase' }}>
            Human Resources Outsourcing
          </div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,5.5vw,76px)', fontWeight:700, color:'#007B7F', lineHeight:1, letterSpacing:1, marginBottom:10 }}>
            HRO
          </div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(22px,3vw,38px)', fontWeight:600, color:'var(--text-primary)', lineHeight:1.1, letterSpacing:0.5, marginBottom:16 }}>
            Executive Business Review · May 2026
          </div>
          <div className="hero-rule" style={{ background:'#007B7F', marginBottom:30 }} />
          <p style={{ fontSize:15, color:'var(--text-secondary)', maxWidth:680, fontStyle:'italic', lineHeight:1.7, marginBottom:0 }}>
            "AI is reshaping HR, payroll, and administration in 2026 by driving automation, compliance, and employee experience. The biggest trends include generative AI for HR tasks, predictive analytics for workforce planning, and intelligent payroll systems that adapt to hybrid and global workforces."
          </p>
        </div>
      </section>

      {/* ── FY26 Highlights ── */}
      <section className="section alt" id="hro-highlights">
        <div className="section-tag">HRO · Section 01</div>
        <h2 className="section-title">FY26 <span style={{ color:'#007B7F' }}>Highlights</span></h2>
        <p className="section-subtitle">Key initiatives delivered in H2 FY26 across Payroll and HR Administration.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {fy26.map((h,i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="highlight-card" style={{ borderTop:`3px solid ${h.color}` }}>
                <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                  <div style={{ width:38, height:38, borderRadius:10, background:'#e6f4fc', display:'flex', alignItems:'center', justifyContent:'center', color:h.color, flexShrink:0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:700, color:h.color, lineHeight:1, marginBottom:4 }}>{h.metric}</div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:700, color:'var(--text-primary)', marginBottom:5 }}>{h.title}</div>
                    <div style={{ fontSize:12, color:'#2d3748', lineHeight:1.55 }}>{h.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FY27 Focus Areas ── */}
      <section className="section" id="hro-focus">
        <div className="section-tag">HRO · Section 02</div>
        <h2 className="section-title">FY27 <span style={{ color:'#007B7F' }}>Focus Areas</span></h2>
        <p className="section-subtitle">Six strategic priorities driving Payroll and HR Administration transformation in FY27.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {fy27.map((f,i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card" style={{ borderTop:'3px solid #007B7F' }}>
                <div style={{ width:36, height:36, borderRadius:9, background:'rgba(0,123,127,0.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'#007B7F', marginBottom:12 }}>
                  <Icon size={17} />
                </div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:700, color:'var(--text-primary)', marginBottom:6, lineHeight:1.3 }}>{f.title}</div>
                <div style={{ fontSize:12, color:'#2d3748', lineHeight:1.55 }}>{f.text}</div>
                <div style={{ marginTop:10, fontFamily:'var(--font-mono)', fontSize:9, color:'#007B7F', letterSpacing:1, opacity:0.6 }}>{f.num}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── AI Trends ── */}
      <section className="section alt" id="hro-trends">
        <div className="section-tag">HRO · Section 03</div>
        <h2 className="section-title">Key AI Trends in <span style={{ color:'#007B7F' }}>HR & Payroll 2026</span></h2>
        <p className="section-subtitle">Five forces reshaping how HR and Payroll teams operate globally.</p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          {trends.map((t,i) => (
            <div key={i} className="card" style={{ borderTop:`3px solid ${t.color}` }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                <div style={{ width:28, height:28, borderRadius:6, background:`${t.color}20`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, color:t.color }}>{t.num}</span>
                </div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:700, color:'var(--text-primary)' }}>{t.title}</div>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {t.pts.map((pt,j) => (
                  <div key={j} style={{ display:'flex', gap:8, fontSize:12, color:'#2d3748', lineHeight:1.5 }}>
                    <span style={{ color:t.color, flexShrink:0, marginTop:2 }}>›</span>{pt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Risks ── */}
      <section className="section" id="hro-risks">
        <div className="section-tag">HRO · Section 04</div>
        <h2 className="section-title">Risks & <span style={{ color:'#007B7F' }}>Considerations</span></h2>
        <p className="section-subtitle">Critical guardrails for responsible AI adoption in HR and Payroll.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {risks.map((r,i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="card" style={{ borderLeft:`4px solid ${r.color}` }}>
                <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <div style={{ color:r.color, flexShrink:0, marginTop:2 }}><Icon size={20} /></div>
                  <div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:700, color:'var(--text-primary)', marginBottom:6 }}>{r.title}</div>
                    <div style={{ fontSize:12, color:'#2d3748', lineHeight:1.55 }}>{r.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── AI Applications Comparison ── */}
      <section className="section alt" id="hro-ai">
        <div className="section-tag">HRO · Section 05</div>
        <h2 className="section-title">AI Applications in <span style={{ color:'#007B7F' }}>HR & Payroll</span></h2>
        <p className="section-subtitle">Comparison across key functional areas — applications, benefits and risks.</p>
        <div style={{ overflowX:'auto', marginBottom:32 }}>
          <table className="exec-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>AI Application</th>
                <th>Benefits</th>
                <th>Risks / Challenges</th>
              </tr>
            </thead>
            <tbody>
              {aiTable.map((row,i) => (
                <tr key={i}>
                  <td className="td-area">{row.area}</td>
                  <td style={{ color:'#007B7F', fontWeight:500 }}>{row.app}</td>
                  <td style={{ color:'#2d3748' }}>{row.benefit}</td>
                  <td style={{ color:'#2d3748' }}>{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Strategic Impact */}
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:2, color:'var(--text-muted)', textTransform:'uppercase', marginBottom:14 }}>Strategic Impact</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {impacts.map((imp,i) => (
            <div key={i} className="card" style={{ borderTop:`3px solid ${imp.color}` }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:15, fontWeight:700, color:imp.color, marginBottom:8 }}>{imp.title}</div>
              <div style={{ fontSize:12, color:'#2d3748', lineHeight:1.6 }}>{imp.text}</div>
            </div>
          ))}
        </div>

        <div className="callout-quote" style={{ borderLeftColor:'#007B7F', background:'rgba(0,123,127,0.06)', borderColor:'rgba(0,123,127,0.2)', marginBottom:0 }}>
          "In 2026, AI in HR and payroll is no longer experimental — it's a necessity. Companies that balance automation with human oversight will lead in efficiency and talent retention."
        </div>
      </section>

      {/* ── Platform Matrix ── */}
      <section className="section" id="hro-platforms">
        <div className="section-tag">HRO · Section 06</div>
        <h2 className="section-title">Platform <span style={{ color:'#007B7F' }}>Comparison Matrix</span></h2>
        <p className="section-subtitle">Payroll AI platforms vs HR Engagement platforms — features, strengths and challenges.</p>

        {/* Payroll Platforms */}
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:2, color:'var(--text-muted)', textTransform:'uppercase', marginBottom:12 }}>Payroll AI Platforms</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:14, marginBottom:28 }}>
          {platforms.filter(p => p.cat === 'Payroll AI').map((p,i) => (
            <div key={i} className="card" style={{ borderTop:'3px solid #0082CA' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:15, fontWeight:700, color:'var(--text-primary)' }}>{p.name}</div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700, color:'#0082CA' }}>{p.score}</div>
              </div>
              <div style={{ fontSize:11, color:'#0082CA', marginBottom:6, fontWeight:500 }}>{p.features}</div>
              <div style={{ display:'flex', gap:16, fontSize:11 }}>
                <div><span style={{ color:'#00875A', fontWeight:600 }}>✓ </span><span style={{ color:'#2d3748' }}>{p.strengths}</span></div>
                <div><span style={{ color:'#C0392B', fontWeight:600 }}>! </span><span style={{ color:'#2d3748' }}>{p.challenges}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* HR Engagement Platforms */}
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:2, color:'var(--text-muted)', textTransform:'uppercase', marginBottom:12 }}>HR Engagement Platforms</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:14 }}>
          {platforms.filter(p => p.cat === 'HR Engagement').map((p,i) => (
            <div key={i} className="card" style={{ borderTop:'3px solid #007B7F' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:15, fontWeight:700, color:'var(--text-primary)' }}>{p.name}</div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700, color:'#007B7F' }}>{p.score}</div>
              </div>
              <div style={{ fontSize:11, color:'#007B7F', marginBottom:6, fontWeight:500 }}>{p.features}</div>
              <div style={{ display:'flex', gap:16, fontSize:11 }}>
                <div><span style={{ color:'#00875A', fontWeight:600 }}>✓ </span><span style={{ color:'#2d3748' }}>{p.strengths}</span></div>
                <div><span style={{ color:'#C0392B', fontWeight:600 }}>! </span><span style={{ color:'#2d3748' }}>{p.challenges}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section className="section alt" id="hro-takeaway">
        <div className="section-tag">HRO · Section 07</div>
        <h2 className="section-title">Key <span style={{ color:'#007B7F' }}>Takeaways</span></h2>
        <p className="section-subtitle">What the platform matrix tells us — and what it means for Telkom HRO.</p>
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {[
            { v:'ADP & SAP',    l:'Top Payroll Leaders',    text:'ADP Next-Gen Payroll and SAP SuccessFactors score highest in payroll strength (9/10) — ideal for global compliance and fraud detection.', color:'#0082CA' },
            { v:'UKG & Workday',l:'Balanced Platforms',     text:'UKG Pro and Workday Payroll offer strong payroll (7–8/10) and solid engagement — versatile for mid-to-large enterprises.', color:'#007B7F' },
            { v:'Workday HCM',  l:'Engagement Leader',      text:'Workday HCM, Oracle HCM Cloud, and Microsoft Viva dominate engagement (8–9/10) — focusing on employee satisfaction, learning and retention.', color:'#E07B00' },
            { v:'SAP HRO',      l:'Telkom Relevance',       text:'SAP SuccessFactors Payroll (Payroll 9, Engagement 6) is the anchor platform for enterprise-grade HRO operations at Telkom.', color:'#007B7F' },
            { v:'AI + Human',   l:'The Non-Negotiable',     text:'No matter the platform — human oversight, data governance, and ethical AI policies are non-negotiable for HR AI to deliver sustainably.', color:'#00875A' },
          ].map((t,i) => (
            <div key={i} className="card" style={{ display:'flex', gap:20, alignItems:'center', borderLeft:`4px solid ${t.color}`, padding:'16px 22px' }}>
              <div style={{ flexShrink:0, minWidth:90 }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:700, color:t.color, lineHeight:1 }}>{t.v}</div>
                <div style={{ fontSize:10, color:'var(--text-muted)', marginTop:3 }}>{t.l}</div>
              </div>
              <div style={{ width:1, height:40, background:'var(--border)', flexShrink:0 }} />
              <div style={{ fontSize:13, color:'#2d3748', lineHeight:1.55 }}>{t.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
