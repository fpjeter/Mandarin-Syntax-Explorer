import React, { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';

interface RoleTooltipProps {
    role: GrammarRole;
    children: React.ReactNode;
}

/**
 * Hover tooltip for grammar role labels.
 *
 * Uses a document-level mousemove listener to detect when the cursor is
 * over the trigger element. This bypasses React Flow's synthetic event
 * system, which suppresses onMouseEnter/onPointerEnter inside node
 * components. The tooltip itself is rendered via a React portal directly
 * on document.body so it is never clipped by any parent overflow.
 */
export const RoleTooltip: React.FC<RoleTooltipProps> = ({ role, children }) => {
    const triggerRef = useRef<HTMLSpanElement>(null);
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

    const entry = glossary[role];

    // Track cursor via document-level mousemove, check if it's inside trigger
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const el = triggerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
        if (inside) {
            setPos({ x: rect.left + rect.width / 2, y: rect.top });
        } else {
            setPos(null);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    if (!entry) return <>{children}</>;

    return (
        <>
            <span
                ref={triggerRef}
                className="cursor-help"
                style={{ pointerEvents: 'all', display: 'inline' }}
            >
                {children}
            </span>

            {pos &&
                createPortal(
                    <div
                        role="tooltip"
                        style={{
                            position: 'fixed',
                            left: pos.x,
                            top: pos.y - 8,
                            transform: 'translate(-50%, -100%)',
                            zIndex: 99999,
                            pointerEvents: 'none',
                        }}
                        className="
                            w-52 rounded-xl px-3 py-2.5
                            bg-slate-800/95 border border-slate-600/60
                            backdrop-blur-md
                            shadow-[0_8px_32px_rgba(0,0,0,0.65)]
                            animate-in fade-in zoom-in-95 duration-100 origin-bottom
                        "
                    >
                        <p className="text-[11px] font-bold text-slate-100 mb-0.5 leading-tight">
                            {entry.headline}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-snug">
                            {entry.detail}
                        </p>
                        {/* Caret */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2.5 h-2.5 rotate-45 bg-slate-800 border-r border-b border-slate-600/60" />
                    </div>,
                    document.body
                )}
        </>
    );
};
