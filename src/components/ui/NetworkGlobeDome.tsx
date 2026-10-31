import React from "react";

interface NetworkGlobeDomeProps {
  className?: string;
  theme?: "light" | "dark";
}

export const NetworkGlobeDome: React.FC<NetworkGlobeDomeProps> = ({
  className = "",
  theme = "light",
}) => {
  const isLight = theme === "light";

  // Coordinates normalized for a 1000 x 400 viewBox
  // Refined, low-opacity technical lines that act as a subtle watermark background
  const lineColor = isLight ? "#2563eb" : "#38bdf8";
  const lineSecondary = isLight ? "#60a5fa" : "#0284c7";
  const hexStroke = isLight ? "#2563eb" : "#38bdf8";
  const hexFill = "transparent";
  const dotColor = isLight ? "#3b82f6" : "#38bdf8";

  // Hexagon helper: generates 6 vertices around (cx, cy) with radius r
  const makeHex = (cx: number, cy: number, r: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points.join(" ");
  };

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Pure Vector Geometric Network SVG - Static, Low Opacity, Zero Raster BG */}
      <svg
        viewBox="0 0 1000 400"
        className="w-full h-auto max-w-[1200px] mx-auto relative z-10"
        fill="none"
      >
        {/* Outer Sphere Horizon Curved Arcs (Subtle Guides) */}
        <path
          d="M 60,160 Q 500,420 940,160"
          stroke={lineColor}
          strokeWidth="1"
          strokeOpacity="0.12"
          strokeDasharray="4 4"
        />
        <path
          d="M 120,190 Q 500,380 880,190"
          stroke={lineSecondary}
          strokeWidth="0.8"
          strokeOpacity="0.15"
        />

        {/* Primary Geodesic Triangulation Lines (Delicate & Low Opacity) */}
        {/* Radiating from Top Apex (500, 25) */}
        <line x1="500" y1="25" x2="180" y2="175" stroke={lineColor} strokeWidth="1" strokeOpacity="0.18" />
        <line x1="500" y1="25" x2="260" y2="135" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="500" y1="25" x2="350" y2="90" stroke={lineColor} strokeWidth="1" strokeOpacity="0.22" />
        <line x1="500" y1="25" x2="495" y2="140" stroke={lineColor} strokeWidth="1" strokeOpacity="0.24" />
        <line x1="500" y1="25" x2="650" y2="90" stroke={lineColor} strokeWidth="1" strokeOpacity="0.22" />
        <line x1="500" y1="25" x2="740" y2="135" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="500" y1="25" x2="820" y2="175" stroke={lineColor} strokeWidth="1" strokeOpacity="0.18" />

        {/* Horizontal & Diagonal Cross Interconnects (Mid Tier) */}
        <line x1="80" y1="210" x2="180" y2="175" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="180" y1="175" x2="260" y2="280" stroke={lineColor} strokeWidth="1" strokeOpacity="0.22" />
        <line x1="180" y1="175" x2="360" y2="245" stroke={lineColor} strokeWidth="1" strokeOpacity="0.18" />
        <line x1="260" y1="280" x2="360" y2="245" stroke={lineColor} strokeWidth="1" strokeOpacity="0.22" />
        <line x1="260" y1="280" x2="400" y2="340" stroke={lineColor} strokeWidth="1" strokeOpacity="0.24" />
        <line x1="360" y1="245" x2="495" y2="140" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="360" y1="245" x2="520" y2="285" stroke={lineColor} strokeWidth="1" strokeOpacity="0.24" />
        <line x1="400" y1="340" x2="520" y2="285" stroke={lineColor} strokeWidth="1" strokeOpacity="0.26" />
        <line x1="400" y1="340" x2="560" y2="365" stroke={lineColor} strokeWidth="1" strokeOpacity="0.26" />

        {/* Right Section Triangulations */}
        <line x1="495" y1="140" x2="680" y2="240" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="520" y1="285" x2="680" y2="240" stroke={lineColor} strokeWidth="1" strokeOpacity="0.24" />
        <line x1="520" y1="285" x2="560" y2="365" stroke={lineColor} strokeWidth="1" strokeOpacity="0.26" />
        <line x1="560" y1="365" x2="680" y2="240" stroke={lineColor} strokeWidth="1" strokeOpacity="0.24" />
        <line x1="560" y1="365" x2="720" y2="345" stroke={lineColor} strokeWidth="1" strokeOpacity="0.22" />
        <line x1="680" y1="240" x2="820" y2="175" stroke={lineColor} strokeWidth="1" strokeOpacity="0.22" />
        <line x1="680" y1="240" x2="770" y2="280" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="720" y1="345" x2="770" y2="280" stroke={lineColor} strokeWidth="1" strokeOpacity="0.18" />
        <line x1="820" y1="175" x2="920" y2="210" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />

        {/* Outer Perimeter Struts */}
        <line x1="70" y1="90" x2="80" y2="210" stroke={lineSecondary} strokeWidth="0.8" strokeOpacity="0.16" />
        <line x1="70" y1="90" x2="180" y2="175" stroke={lineSecondary} strokeWidth="0.8" strokeOpacity="0.14" />
        <line x1="80" y1="210" x2="170" y2="330" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="170" y1="330" x2="260" y2="280" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="170" y1="330" x2="310" y2="360" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="310" y1="360" x2="400" y2="340" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />

        <line x1="930" y1="90" x2="920" y2="210" stroke={lineSecondary} strokeWidth="0.8" strokeOpacity="0.16" />
        <line x1="930" y1="90" x2="820" y2="175" stroke={lineSecondary} strokeWidth="0.8" strokeOpacity="0.14" />
        <line x1="920" y1="210" x2="850" y2="310" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />
        <line x1="850" y1="310" x2="770" y2="280" stroke={lineColor} strokeWidth="1" strokeOpacity="0.20" />

        {/* Static Hexagonal Hubs (Subtle, Clean & Non-Moving) */}
        {/* Apex Hub */}
        <g opacity="0.45">
          <polygon
            points={makeHex(500, 25, 8)}
            stroke={hexStroke}
            strokeWidth="1.2"
            fill={hexFill}
          />
          <polygon points={makeHex(500, 25, 3.5)} fill={hexStroke} />
        </g>

        {/* Mid-Left Hex Hub */}
        <g opacity="0.45">
          <polygon
            points={makeHex(180, 175, 7.5)}
            stroke={hexStroke}
            strokeWidth="1.2"
            fill={hexFill}
          />
          <polygon points={makeHex(180, 175, 3)} fill={hexStroke} />
        </g>

        {/* Center Lower Hex Hub */}
        <g opacity="0.5">
          <polygon
            points={makeHex(520, 285, 8.5)}
            stroke={hexStroke}
            strokeWidth="1.4"
            fill={hexFill}
          />
          <polygon points={makeHex(520, 285, 3.5)} fill={hexStroke} />
        </g>

        {/* Bottom Apex Hex Hub */}
        <g opacity="0.45">
          <polygon
            points={makeHex(560, 365, 8)}
            stroke={hexStroke}
            strokeWidth="1.2"
            fill={hexFill}
          />
          <polygon points={makeHex(560, 365, 3)} fill={hexStroke} />
        </g>

        {/* Right Hex Hub */}
        <g opacity="0.45">
          <polygon
            points={makeHex(820, 175, 7.5)}
            stroke={hexStroke}
            strokeWidth="1.2"
            fill={hexFill}
          />
          <polygon points={makeHex(820, 175, 3)} fill={hexStroke} />
        </g>

        {/* Static Telemetry Nodes (Soft & Low Opacity) */}
        {/* Left Side Nodes */}
        <circle cx="70" cy="90" r="4" fill={dotColor} opacity="0.35" />
        <circle cx="80" cy="210" r="5" fill={dotColor} opacity="0.4" />
        <circle cx="170" cy="330" r="3.5" fill={dotColor} opacity="0.3" />
        <circle cx="260" cy="280" r="4" fill={dotColor} opacity="0.35" />
        <circle cx="310" cy="360" r="4.5" fill={dotColor} opacity="0.35" />
        <circle cx="360" cy="245" r="3.5" fill={dotColor} opacity="0.3" />
        <circle cx="400" cy="340" r="4" fill={dotColor} opacity="0.35" />

        {/* Center Node */}
        <circle cx="495" cy="140" r="3.5" fill={dotColor} opacity="0.3" />

        {/* Right Side Nodes */}
        <circle cx="680" cy="240" r="4" fill={dotColor} opacity="0.35" />
        <circle cx="720" cy="345" r="3.5" fill={dotColor} opacity="0.3" />
        <circle cx="770" cy="280" r="4" fill={dotColor} opacity="0.35" />
        <circle cx="850" cy="310" r="4.5" fill={dotColor} opacity="0.35" />
        <circle cx="920" cy="210" r="5" fill={dotColor} opacity="0.4" />
        <circle cx="930" cy="90" r="4" fill={dotColor} opacity="0.35" />
      </svg>
    </div>
  );
};
