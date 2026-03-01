import React from 'react';
import { motion } from 'framer-motion';

/** True only on devices that support real hover (mouse / trackpad) — not iOS touch */
const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

interface RubyTextProps {
    hanzi: string;
    pinyin: string;
    className?: string;
    large?: boolean;
    displayFont?: boolean;
}

// Characters that are punctuation and should NOT consume a pinyin syllable.
const isPunctuation = (char: string) =>
    /[\p{P}\p{S}\s]/u.test(char);

/**
 * Pairs each Chinese character with its corresponding pinyin syllable and
 * renders them as individual <ruby> elements so each syllable is centered
 * directly above its character. Punctuation characters pass through without
 * consuming a syllable slot so alignment is never thrown off.
 */
export const RubyText: React.FC<RubyTextProps> = ({ hanzi, pinyin, className = '', large = false, displayFont = false }) => {
    const chars = Array.from(hanzi);
    // Strip punctuation-only tokens from the pinyin string (e.g. commas written
    // into the pinyin field as ", " separators) so they don't consume syllable slots.
    const syllables = pinyin.trim().split(/\s+/).filter(t => !/^[\p{P}\p{S}]+$/u.test(t));


    // Walk through chars, only advancing the syllable index for non-punctuation.
    let sylIdx = 0;
    const pairs = chars.map((char) => {
        if (isPunctuation(char)) {
            return { char, syllable: '' };
        }
        return { char, syllable: syllables[sylIdx++] ?? '' };
    });

    return (
        <motion.span
            className={`inline-flex flex-wrap justify-center items-end leading-none text-center ${large ? 'text-3xl' : 'text-xl'} ${className}`}
            whileHover={canHover ? { scale: 1.05 } : undefined}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {pairs.map(({ char, syllable }, i) => (
                <ruby key={i} className="inline-flex flex-col items-center" style={{ rubyAlign: 'center' }}>
                    <span className={`font-semibold text-slate-50 tracking-widest ${displayFont ? 'font-chinese-display' : 'font-chinese-ui'}`}>{char}</span>
                    <rt className="text-[0.42em] text-[var(--color-mandarin-gold)] font-medium not-italic mb-0.5 whitespace-nowrap">
                        {syllable}
                    </rt>
                </ruby>
            ))}
        </motion.span>
    );
};
