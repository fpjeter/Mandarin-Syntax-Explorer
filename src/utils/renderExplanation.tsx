import React from 'react';

/**
 * Renders a small subset of markdown (** bold ** and * italic *)
 * into styled JSX spans. Used in both GrammarGuide and SentenceHeader.
 */
export const renderExplanation = (text: string): React.ReactNode[] => {
    // Splits by bold, italics, and explicit literal translations
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\("\w[^"]*"\)|\("[^"]*"\))/g);
    return parts.map((part, i) => {
        const key = `${i}-${part.slice(0, 8)}`;
        if (part.startsWith('**') && part.endsWith('**'))
            return <strong key={key} className="text-slate-100 font-semibold">{part.slice(2, -2)}</strong>;
        if (part.startsWith('*') && part.endsWith('*'))
            return <em key={key} className="italic text-slate-300">{part.slice(1, -1)}</em>;
        if (part.startsWith('("') && part.endsWith('")'))
            return <span key={key} className="text-slate-400 italic opacity-90 whitespace-nowrap">"{part.slice(2, -2)}"</span>;
        return <span key={key}>{part}</span>;
    });
};
