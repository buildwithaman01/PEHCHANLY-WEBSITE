const PehchanlyLogo = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Enhanced glow effect */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Vibrant gradient */}
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="1" />
                    <stop offset="50%" stopColor="#7000ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffd700" stopOpacity="1" />
                </linearGradient>

                {/* Accent gradient */}
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7000ff" stopOpacity="0.8" />
                </linearGradient>
            </defs>

            {/* Background circle for depth */}
            <circle cx="60" cy="60" r="55" fill="url(#mainGradient)" opacity="0.1" />

            {/* Main "P" shape - Bold and modern */}
            <path
                d="M 35 30 L 35 90 L 45 90 L 45 65 L 70 65 C 85 65 95 55 95 47.5 C 95 40 85 30 70 30 Z M 45 40 L 70 40 C 78 40 85 44 85 47.5 C 85 51 78 55 70 55 L 45 55 Z"
                fill="url(#mainGradient)"
                filter="url(#glow)"
                strokeWidth="1"
                stroke="url(#mainGradient)"
                opacity="0.95"
            />

            {/* Identity fingerprint pattern - more visible */}
            <g opacity="0.7">
                {/* Curved lines representing fingerprint */}
                <path
                    d="M 75 42 Q 80 42 82 45"
                    stroke="#00f0ff"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 75 47 Q 82 47 85 50"
                    stroke="#7000ff"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 73 52 Q 80 52 83 55"
                    stroke="#ffd700"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                />
            </g>

            {/* Accent dots - identity markers */}
            <circle cx="88" cy="43" r="2" fill="#00f0ff" opacity="0.9">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="90" cy="49" r="2" fill="#7000ff" opacity="0.9">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="88" cy="55" r="2" fill="#ffd700" opacity="0.9">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>

            {/* Bottom accent - digital identity lines */}
            <g opacity="0.5">
                <line x1="40" y1="72" x2="55" y2="72" stroke="url(#accentGradient)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="40" y1="77" x2="60" y2="77" stroke="url(#accentGradient)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="40" y1="82" x2="50" y2="82" stroke="url(#accentGradient)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
        </svg>
    );
};

export default PehchanlyLogo;
