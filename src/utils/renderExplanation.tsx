import React from 'react';

/**
 * Renders a small subset of markdown (** bold ** and * italic *)
 * into styled JSX spans. Used in both GrammarGuide and SentenceHeader.
 */
export const renderExplanation = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
        const key = `${i}-${part.slice(0, 8)}`;
        if (part.startsWith('**') && part.endsWith('**'))
            return <strong key={key} className="text-slate-100 font-semibold">{part.slice(2, -2)}</strong>;
        if (part.startsWith('*') && part.endsWith('*'))
            return <em key={key} className="italic text-slate-300">{part.slice(1, -1)}</em>;
        return <span key={key}>{part}</span>;
    });
};
