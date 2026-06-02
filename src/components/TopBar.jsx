// Inline SVG logos — no external image files needed

const WNSLogo = () => (
  <svg height="28" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="4" fill="#E8002D"/>
    <text x="8" y="26" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="20" fill="white">WNS</text>
    <text x="8" y="36" fontFamily="Arial, sans-serif" fontSize="7" fill="rgba(255,255,255,0.85)" letterSpacing="0.5">Part of Capgemini</text>
  </svg>
);

const TelkomLogo = () => (
  <svg height="28" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="28" fill="#0082ca" letterSpacing="-0.5">
      T<tspan fill="#0082ca">elkom</tspan>
    </text>
    <rect x="0" y="30" width="80" height="3" rx="1.5" fill="#0082ca" opacity="0.3"/>
  </svg>
);

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-logos">
        <WNSLogo />
        <div className="topbar-divider" />
        <TelkomLogo />
      </div>
      <div className="topbar-title">Capex Intelligence Command Centre</div>
      <div className="topbar-badge">EBR · June 2026</div>
    </header>
  );
}
