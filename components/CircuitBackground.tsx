'use client'

export default function CircuitBackground() {
    const traces = [
        "M 0 150 H 250 V 350 H 500 V 150 H 750 V 350 H 1000",
        "M 0 550 H 200 V 350 H 450 V 550 H 700 V 350 H 1000",
        "M 150 0 V 200 H 350 V 600 H 150 V 800",
        "M 500 0 V 150 H 700 V 650 H 500 V 800",
        "M 850 0 V 300 H 650 V 500 H 850 V 800",
        "M 0 350 H 1000",
        "M 0 650 H 400 V 450 H 600 V 650 H 1000",
    ]

    const electrons = [
        { path: traces[0], dur: "18s", begin: "0s", color: "#818cf8" },
        { path: traces[0], dur: "18s", begin: "9s", color: "#a78bfa" },
        { path: traces[1], dur: "22s", begin: "3s", color: "#c084fc" },
        { path: traces[1], dur: "22s", begin: "13s", color: "#818cf8" },
        { path: traces[2], dur: "16s", begin: "2s", color: "#a78bfa" },
        { path: traces[3], dur: "20s", begin: "5s", color: "#818cf8" },
        { path: traces[3], dur: "20s", begin: "15s", color: "#c084fc" },
        { path: traces[4], dur: "17s", begin: "7s", color: "#a78bfa" },
        { path: traces[5], dur: "25s", begin: "0s", color: "#818cf8" },
        { path: traces[5], dur: "25s", begin: "12s", color: "#c084fc" },
        { path: traces[6], dur: "19s", begin: "4s", color: "#a78bfa" },
        { path: traces[6], dur: "19s", begin: "10s", color: "#818cf8" },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 800"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Neon glow: small core + wide diffuse halo */}
                    <filter id="neon" x="-200%" y="-200%" width="500%" height="500%">
                        {/* Wide outer glow */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur-wide" />
                        {/* Medium glow */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur-mid" />
                        {/* Tight core */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur-core" />
                        <feMerge>
                            <feMergeNode in="blur-wide" />
                            <feMergeNode in="blur-mid" />
                            <feMergeNode in="blur-core" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Static circuit traces */}
                {traces.map((d, i) => (
                    <path
                        key={i}
                        d={d}
                        stroke="white"
                        strokeWidth="0.4"
                        strokeOpacity="0.04"
                        fill="none"
                    />
                ))}

                {/* Junction dots */}
                {[
                    [250, 150], [500, 150], [750, 150],
                    [250, 350], [500, 350], [750, 350],
                    [200, 350], [450, 350], [700, 350],
                    [200, 550], [450, 550], [700, 550],
                    [150, 200], [350, 200], [350, 600], [150, 600],
                    [700, 150], [700, 650], [500, 650],
                    [650, 300], [850, 300], [650, 500], [850, 500],
                    [400, 450], [600, 450], [400, 650], [600, 650],
                ].map(([cx, cy], i) => (
                    <circle key={`dot-${i}`} cx={cx} cy={cy} r="1" fill="white" fillOpacity="0.06" />
                ))}

                {/* Electrons: tiny core (r=0.8) with massive neon glow */}
                {electrons.map((e, i) => (
                    <circle key={i} r="0.8" fill={e.color} filter="url(#neon)" opacity="0.9">
                        <animateMotion
                            dur={e.dur}
                            begin={e.begin}
                            repeatCount="indefinite"
                            path={e.path}
                        />
                    </circle>
                ))}
            </svg>

            {/* Edge fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
        </div>
    )
}
