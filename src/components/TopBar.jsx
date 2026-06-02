const WNSLogo = ({ height = 32 }) => (
  <svg height={height} viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dark background block */}
    <rect width="140" height="44" rx="3" fill="#1a1a2e"/>
    {/* WNS text */}
    <text x="8" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="24" fill="white" letterSpacing="1">WNS</text>
    {/* Part of Capgemini */}
    <text x="8" y="40" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.3">Part of Capgemini</text>
  </svg>
);

const TelkomLogo = ({ height = 28 }) => (
  <svg height={height} viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* T in bold cyan */}
    <text x="0" y="26" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="28" fill="#00b5e2" letterSpacing="-1">T</text>
    {/* elkom in regular weight */}
    <text x="20" y="26" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400" fontSize="28" fill="#00b5e2" letterSpacing="-0.5">elkom</text>
  </svg>
);

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-logos">
        <WNSLogo height={36} />
        <div className="topbar-divider" />
        <TelkomLogo height={30} />
      </div>
      <div className="topbar-title">Capex Intelligence Command Centre</div>
      <div className="topbar-badge">EBR · June 2026</div>
    </header>
  );
}
