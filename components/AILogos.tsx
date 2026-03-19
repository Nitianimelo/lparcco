'use client'

import { motion } from 'framer-motion'

const aiLogos = [
    {
        name: 'OpenAI',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
            </svg>
        ),
    },
    {
        name: 'Anthropic',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.304 3.541 12.001 17.51 6.697 3.541H3L9.999 21h4.004L21 3.541h-3.696z" />
            </svg>
        ),
    },
    {
        name: 'Google Gemini',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
            </svg>
        ),
    },
    {
        name: 'Meta AI',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 2.93 1.22 1.586 0 2.964-.784 3.993-2.354.988-1.698 1.303-3.008 1.303-4.986 0-2.43-.593-4.877-1.973-6.693C21.4 5.226 19.88 4.03 18.085 4.03c-1.267 0-2.412.576-3.441 1.73-.505.57-.867 1.143-1.308 1.945l-.317.57-.162.29-.162-.29c-.317-.57-.68-1.143-1.185-1.713C10.327 4.606 9.182 4.03 7.915 4.03H6.915zm-.05 2.11c.95 0 1.773.427 2.596 1.41.822.982 1.35 2.24 1.35 3.59 0 1.35-.528 2.608-1.35 3.59-.823.982-1.646 1.41-2.596 1.41-.95 0-1.773-.428-2.596-1.41C3.696 13.748 3.168 12.49 3.168 11.14c0-1.35.528-2.608 1.35-3.59.823-.983 1.646-1.41 2.596-1.41h.75zm10.22 0c.95 0 1.773.427 2.596 1.41.822.982 1.35 2.24 1.35 3.59 0 1.35-.528 2.608-1.35 3.59-.823.982-1.646 1.41-2.596 1.41-.95 0-1.773-.428-2.596-1.41-.822-.982-1.35-2.24-1.35-3.59 0-1.35.528-2.608 1.35-3.59.823-.983 1.646-1.41 2.596-1.41h-.75z" />
            </svg>
        ),
    },
    {
        name: 'Mistral AI',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M0 0h4v4H0zm6.667 0h4v4h-4zM0 6.667h4v4H0zm6.667 0h4v4h-4zm6.666 0h4v4h-4zm4 0h2.667v4H17.333zM13.333 0h4v4h-4zM17.333 0H20v4h-2.667zM20 0h4v4h-4zm0 6.667h4v4h-4zM0 13.333h4v4H0zm6.667 0h4v4h-4zm6.666 0h4v4h-4zm6.667 0h4v4h-4zM0 20h4v4H0zm6.667 0h4v4h-4zm6.666 0h4v4h-4zm6.667 0h4v4h-4z" />
            </svg>
        ),
    },
    {
        name: 'Perplexity',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M22.3977 8.1716h-7.4865L12 4.7527 9.0888 8.1716H1.6023L7.1875 13.5H1.6023l5.5852 5.3284H12l2.9112-3.4189L17.8125 18.8284H12l5.5852-5.3284H12l5.5852-5.3284zM12 14.9189l-2.9112-3.4189H12l2.9112 3.4189z" />
            </svg>
        ),
    },
    {
        name: 'Grok',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Cohere',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
        ),
    },
    {
        name: 'Stability AI',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M7.083 7.083H0v9.834h7.083v-2.778H2.778v-4.28h4.305V7.083zm9.834 0H9.833v9.834h7.084v-2.778h-4.306v-1.25h4.306v-2.778h-4.306v-1.25h4.306V7.083zm7.083 0H21v2.778h2.778v4.278H21v2.778h3v-9.834z" />
            </svg>
        ),
    },
    {
        name: 'Hugging Face',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 6.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm2.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-2 3.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm4 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
            </svg>
        ),
    },
]

// Duplicate for seamless loop
const allLogos = [...aiLogos, ...aiLogos, ...aiLogos]

export default function AILogos() {
    return (
        <section id="ias" className="relative py-20 overflow-hidden bg-background border-y border-white/5">
            <style>{`
                @keyframes marquee-slide {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .marquee-track {
                    animation: marquee-slide 40s linear infinite;
                    display: flex;
                    gap: 4rem;
                    width: max-content;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background pointer-events-none" />

            <div className="relative container mx-auto px-4 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                        As melhores IAs do mundo
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Todas as IAs pagas que você realmente precisa — em um só lugar
                    </p>
                </motion.div>
            </div>

            {/* Marquee container */}
            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="marquee-track">
                    {allLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="inline-flex flex-col items-center gap-3 flex-shrink-0 group cursor-default"
                        >
                            <div className="text-white/15 group-hover:text-white/70 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">
                                {logo.svg}
                            </div>
                            <span className="text-[10px] text-white/15 group-hover:text-white/50 transition-colors duration-500 font-medium tracking-widest uppercase">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
