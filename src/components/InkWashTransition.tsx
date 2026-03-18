import { motion, AnimatePresence } from 'framer-motion';

interface InkWashTransitionProps {
    active: boolean;
    targetMode: 'modern' | 'classical';
}

/**
 * Cinematic mode-switch overlay.
 *
 * Sequence:
 *   1. Screen fades to near-black (0 -> 400ms)
 *   2. Title card appears at center (250ms -> 700ms)
 *   3. Hold briefly at full opacity (mode switches underneath)
 *   4. Everything fades out together (active set to false -> 500ms exit)
 */
export default function InkWashTransition({ active, targetMode }: InkWashTransitionProps) {
    const isToClassical = targetMode === 'classical';

    const bgColor = isToClassical
        ? 'radial-gradient(ellipse at center, rgba(20, 12, 5, 0.98) 0%, rgba(8, 4, 2, 1) 100%)'
        : 'radial-gradient(ellipse at center, rgba(8, 10, 20, 0.98) 0%, rgba(3, 4, 10, 1) 100%)';

    return (
        <AnimatePresence mode="wait">
            {active && (
                <motion.div
                    key="ink-transition"
                    className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
                    style={{ background: bgColor }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
                    exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
                >
                    {/* Title card */}
                    <motion.div
                        className="flex flex-col items-center gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
                        }}
                        exit={{
                            opacity: 0,
                            y: -6,
                            transition: { duration: 0.2, ease: 'easeIn' },
                        }}
                    >
                        <motion.div
                            className={`h-px w-16 origin-center ${isToClassical ? 'bg-amber-500/50' : 'bg-blue-400/50'}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, transition: { delay: 0.25, duration: 0.25 } }}
                        />

                        <span
                            className={`text-3xl md:text-4xl font-bold tracking-[0.35em] ${
                                isToClassical ? 'text-amber-200/90' : 'text-blue-200/90'
                            }`}
                            style={{
                                textShadow: isToClassical
                                    ? '0 0 30px rgba(217, 119, 6, 0.3)'
                                    : '0 0 30px rgba(96, 165, 250, 0.3)',
                                ...(isToClassical && { fontFamily: "'Ma Shan Zheng', serif" }),
                            }}
                        >
                            {isToClassical ? '古文探秘' : '现代中文'}
                        </span>

                        <span
                            className={`text-xs tracking-[0.2em] uppercase ${
                                isToClassical ? 'text-amber-400/50' : 'text-blue-300/50'
                            }`}
                        >
                            {isToClassical ? 'Classical Chinese' : 'Modern Mandarin'}
                        </span>

                        <motion.div
                            className={`h-px w-16 origin-center ${isToClassical ? 'bg-amber-500/50' : 'bg-blue-400/50'}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, transition: { delay: 0.25, duration: 0.25 } }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
