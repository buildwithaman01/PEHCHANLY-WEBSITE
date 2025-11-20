const CircuitLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
        <stop offset="50%" style={{stopColor: '#f0f0f0', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#e0e0e0', stopOpacity: 1}} />
      </linearGradient>
      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor: '#00b7ff', stopOpacity: 0.8}} />
        <stop offset="50%" style={{stopColor: '#0099ff', stopOpacity: 0.8}} />
        <stop offset="100%" style={{stopColor: '#0077ff', stopOpacity: 0.8}} />
      </linearGradient>
      <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{stopColor: '#00b7ff', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#004466', stopOpacity: 1}} />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
      </filter>
    </defs>

    {/* PCB Background */}
    <rect x="0" y="0" width="140" height="180" fill="#0f0f0f" rx="15"/>
    <rect x="3" y="3" width="134" height="174" fill="#1a1a1a" rx="12"/>
    <rect x="6" y="6" width="128" height="168" fill="#2a2a2a" rx="10"/>

    {/* Circuit Traces Forming P Structure */}
    {/* Left Vertical Stem */}
    <path d="M25 25 L25 155" stroke="url(#circuitGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
    {/* Top Horizontal Bar */}
    <path d="M25 25 L85 25" stroke="url(#circuitGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
    {/* Upper Curve */}
    <path d="M85 25 Q105 25 105 50" stroke="url(#circuitGradient)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M105 50 Q105 75 85 75" stroke="url(#circuitGradient)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M85 75 L25 75" stroke="url(#circuitGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
    {/* Middle Horizontal */}
    <path d="M25 95 L85 95" stroke="url(#circuitGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
    {/* Lower Stem */}
    <path d="M25 95 L25 155" stroke="url(#circuitGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
    {/* Bottom Horizontal */}
    <path d="M25 155 L85 155" stroke="url(#circuitGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>

    {/* Junction Nodes */}
    <circle cx="25" cy="25" r="5" fill="url(#nodeGradient)" filter="url(#glow)"/>
    <circle cx="85" cy="25" r="4" fill="url(#nodeGradient)"/>
    <circle cx="25" cy="75" r="4" fill="url(#nodeGradient)"/>
    <circle cx="85" cy="75" r="4" fill="url(#nodeGradient)"/>
    <circle cx="25" cy="95" r="5" fill="url(#nodeGradient)" filter="url(#glow)"/>
    <circle cx="85" cy="95" r="4" fill="url(#nodeGradient)"/>
    <circle cx="25" cy="155" r="5" fill="url(#nodeGradient)" filter="url(#glow)"/>
    <circle cx="85" cy="155" r="4" fill="url(#nodeGradient)"/>

    {/* Additional Circuit Elements */}
    <circle cx="55" cy="50" r="3" fill="url(#nodeGradient)"/>
    <circle cx="55" cy="125" r="3" fill="url(#nodeGradient)"/>
    <circle cx="35" cy="35" r="2" fill="url(#nodeGradient)"/>
    <circle cx="75" cy="35" r="2" fill="url(#nodeGradient)"/>
    <circle cx="35" cy="135" r="2" fill="url(#nodeGradient)"/>
    <circle cx="75" cy="135" r="2" fill="url(#nodeGradient)"/>

    {/* Capacitor-like Components */}
    <rect x="45" y="30" width="3" height="10" fill="url(#circuitGradient)"/>
    <rect x="42" y="35" width="9" height="3" fill="url(#circuitGradient)"/>
    <rect x="65" y="30" width="3" height="10" fill="url(#circuitGradient)"/>
    <rect x="62" y="35" width="9" height="3" fill="url(#circuitGradient)"/>
    <rect x="45" y="130" width="3" height="10" fill="url(#circuitGradient)"/>
    <rect x="42" y="135" width="9" height="3" fill="url(#circuitGradient)"/>
    <rect x="65" y="130" width="3" height="10" fill="url(#circuitGradient)"/>
    <rect x="62" y="135" width="9" height="3" fill="url(#circuitGradient)"/>

    {/* Connecting Traces */}
    <path d="M45 75 L45 95" stroke="url(#circuitGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M65 75 L65 95" stroke="url(#circuitGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 25 L35 75" stroke="url(#circuitGradient)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M55 25 L55 75" stroke="url(#circuitGradient)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M35 95 L35 155" stroke="url(#circuitGradient)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M55 95 L55 155" stroke="url(#circuitGradient)" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Main P letter overlay */}
    <text x="70" y="125" textAnchor="middle" className="p-letter" filter="url(#shadow)">P</text>

    {/* PCB Mounting Holes */}
    <circle cx="20" cy="20" r="3" fill="none" stroke="#666" strokeWidth="1"/>
    <circle cx="120" cy="20" r="3" fill="none" stroke="#666" strokeWidth="1"/>
    <circle cx="20" cy="160" r="3" fill="none" stroke="#666" strokeWidth="1"/>
    <circle cx="120" cy="160" r="3" fill="none" stroke="#666" strokeWidth="1"/>

    <style>
      {`
        .p-letter {
          font-size: 90px;
          font-weight: 900;
          font-family: 'Poppins', sans-serif;
          letter-spacing: -4px;
          fill: url(#pGradient);
          stroke: #ffffff;
          stroke-width: 2.5;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 0 15px rgba(255,255,255,0.2));
        }
        .p-letter:hover {
          stroke: url(#circuitGradient);
          stroke-width: 3.5;
          filter: drop-shadow(0 0 25px rgba(0,183,255,0.5));
          transform: scale(1.02);
        }
      `}
    </style>
  </svg>
);

export default CircuitLogo;
