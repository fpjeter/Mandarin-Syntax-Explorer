import { motion, AnimatePresence } from 'framer-motion';

interface InkWashTransitionProps {
    active: boolean;
    targetMode: 'modern' | 'classical';
}

/* ── Floating ink particles ── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: `${10 + Math.random() * 80}%`,
    y: `${10 + Math.random() * 80}%`,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 0.6,
    duration: 1.5 + Math.random() * 1.5,
    yDrift: -20 - Math.random() * 30,
}));

/**
 * Cinematic mode-switch overlay with enhanced visuals.
 *
 * Sequence:
 *   1. Screen fades to near-black (0 -> 450ms)
 *   2. Floating particles drift + glow behind title
 *   3. Title card sweeps in with shimmer effect (300ms -> 800ms)
 *   4. Hold at full opacity (mode switches underneath)
 *   5. Everything fades out together (active set to false -> 600ms exit)
 */
export default function InkWashTransition({ active, targetMode }: InkWashTransitionProps) {
    const isToClassical = targetMode === 'classical';

    const bgColor = isToClassical
        ? 'radial-gradient(ellipse at center, rgba(20, 12, 5, 0.98) 0%, rgba(8, 4, 2, 1) 100%)'
        : 'radial-gradient(ellipse at center, rgba(8, 10, 20, 0.98) 0%, rgba(3, 4, 10, 1) 100%)';

    const accentHsl = isToClassical ? '35, 90%, 55%' : '215, 80%, 60%';
    const glowColor = isToClassical
        ? 'rgba(217, 119, 6, 0.25)'
        : 'rgba(96, 165, 250, 0.25)';

    return (
        <AnimatePresence mode="wait">
            {active && (
                <motion.div
                    key="ink-transition"
                    className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
                    style={{ background: bgColor }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }}
                    exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
                >
                    {/* ── Floating ink particles ── */}
                    {PARTICLES.map(p => (
                        <motion.div
                            key={p.id}
                            className="absolute rounded-full"
                            style={{
                                left: p.x,
                                top: p.y,
                                width: p.size,
                                height: p.size,
                                background: `hsla(${accentHsl}, 0.4)`,
                                boxShadow: `0 0 ${p.size * 3}px hsla(${accentHsl}, 0.3)`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0.4, 0.7, 0],
                                scale: [0, 1.2, 0.8, 1, 0.5],
                                y: [0, p.yDrift],
                            }}
                            transition={{
                                delay: p.delay,
                                duration: p.duration,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}

                    {/* ── Radial glow pulse behind title ── */}
                    <motion.div
                        className="absolute"
                        style={{
                            width: 400,
                            height: 400,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0, 0.6, 0.3, 0.5],
                            scale: [0.5, 1.2, 1.0, 1.1],
                        }}
                        transition={{
                            delay: 0.15,
                            duration: 1.8,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* ── Title card ── */}
                    <motion.div
                        className="flex flex-col items-center gap-4 relative z-10"
                        initial={{ opacity: 0, y: 16, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.95,
                            transition: { duration: 0.25, ease: 'easeIn' },
                        }}
                    >
                        {/* Top decorative line */}
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
                        >
                            <motion.div
                                className="h-px origin-right"
                                style={{ background: `linear-gradient(to left, hsla(${accentHsl}, 0.6), transparent)`, width: 80 }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1, transition: { delay: 0.35, duration: 0.4, ease: 'easeOut' } }}
                            />
                            <div
                                className="w-1.5 h-1.5 rotate-45"
                                style={{ background: `hsla(${accentHsl}, 0.5)`, boxShadow: `0 0 8px hsla(${accentHsl}, 0.4)` }}
                            />
                            <motion.div
                                className="h-px origin-left"
                                style={{ background: `linear-gradient(to right, hsla(${accentHsl}, 0.6), transparent)`, width: 80 }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1, transition: { delay: 0.35, duration: 0.4, ease: 'easeOut' } }}
                            />
                        </motion.div>

                        {/* Main title — large brush calligraphy feel */}
                        <motion.span
                            className="relative"
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 700,
                                letterSpacing: '0.4em',
                                color: `hsla(${accentHsl}, 0.95)`,
                                textShadow: `0 0 40px ${glowColor}, 0 0 80px ${glowColor}`,
                                ...(isToClassical && { fontFamily: "'Ma Shan Zheng', serif" }),
                            }}
                            initial={{ opacity: 0, letterSpacing: '0.8em' }}
                            animate={{
                                opacity: 1,
                                letterSpacing: '0.4em',
                                transition: { delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                            }}
                        >
                            {isToClassical ? '古文探秘' : '现代中文'}
                            {/* Shimmer sweep overlay */}
                            <motion.span
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: `linear-gradient(105deg, transparent 40%, hsla(${accentHsl}, 0.3) 50%, transparent 60%)`,
                                    backgroundSize: '200% 100%',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    mixBlendMode: 'overlay',
                                }}
                                initial={{ backgroundPosition: '200% 0' }}
                                animate={{ backgroundPosition: '-200% 0' }}
                                transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
                            >
                                {isToClassical ? '古文探秘' : '现代中文'}
                            </motion.span>
                        </motion.span>

                        {/* Subtitle */}
                        <motion.span
                            className="text-sm tracking-[0.25em] uppercase font-light"
                            style={{ color: `hsla(${accentHsl}, 0.5)` }}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.45, duration: 0.35, ease: 'easeOut' },
                            }}
                        >
                            {isToClassical ? 'Classical Chinese' : 'Modern Mandarin'}
                        </motion.span>

                        {/* Bottom decorative line */}
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
                        >
                            <motion.div
                                className="h-px origin-right"
                                style={{ background: `linear-gradient(to left, hsla(${accentHsl}, 0.6), transparent)`, width: 80 }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeOut' } }}
                            />
                            <div
                                className="w-1.5 h-1.5 rotate-45"
                                style={{ background: `hsla(${accentHsl}, 0.5)`, boxShadow: `0 0 8px hsla(${accentHsl}, 0.4)` }}
                            />
                            <motion.div
                                className="h-px origin-left"
                                style={{ background: `linear-gradient(to right, hsla(${accentHsl}, 0.6), transparent)`, width: 80 }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeOut' } }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
