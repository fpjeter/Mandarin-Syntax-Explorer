import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';

// ── Shared mousemove listener ────────────────────────────────────────────────
// A single document-level listener checks all registered tooltips. When
// multiple overlapping triggers are hovered (e.g. a badge inside a node),
// only the *innermost* (smallest-area) one fires — "innermost wins."

type TooltipRegistration = {
    el: HTMLElement;
    onInside: (rect: DOMRect) => void;
    onOutside: () => void;
};

const activeTooltips = new Set<TooltipRegistration>();
let listenerRegistered = false;

function handleSharedMouseMove(e: MouseEvent) {
    // Collect all tooltips the cursor is inside of
    const hits: { entry: TooltipRegistration; rect: DOMRect; area: number }[] = [];

    activeTooltips.forEach(entry => {
        const rect = entry.el.getBoundingClientRect();
        const inside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
        if (inside) {
            hits.push({ entry, rect, area: rect.width * rect.height });
        } else {
            entry.onOutside();
        }
    });

    if (hits.length === 0) return;

    // Sort by area ascending — smallest (innermost) first
    hits.sort((a, b) => a.area - b.area);

    // Only the innermost tooltip gets shown; all others are suppressed
    hits[0].entry.onInside(hits[0].rect);
    for (let i = 1; i < hits.length; i++) {
        hits[i].entry.onOutside();
    }
}

function registerTooltip(entry: TooltipRegistration) {
    activeTooltips.add(entry);
    if (!listenerRegistered) {
        document.addEventListener('mousemove', handleSharedMouseMove, { passive: true });
        listenerRegistered = true;
    }
    return () => {
        activeTooltips.delete(entry);
        if (activeTooltips.size === 0 && listenerRegistered) {
            document.removeEventListener('mousemove', handleSharedMouseMove);
            listenerRegistered = false;
        }
    };
}

// ── Tooltip popup (shared rendering) ─────────────────────────────────────────

function TooltipPopup({ pos, headline, detail }: { pos: { x: number; y: number }; headline: string; detail: string }) {
    return createPortal(
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
                {headline}
            </p>
            <p className="text-[10px] text-slate-400 leading-snug">
                {detail}
            </p>
            {/* Caret */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2.5 h-2.5 rotate-45 bg-slate-800 border-r border-b border-slate-600/60" />
        </div>,
        document.body
    );
}

// ── Generic HoverTooltip ─────────────────────────────────────────────────────
// Wraps any element. On hover shows a tooltip with the given headline/detail.
// Uses the shared mousemove listener so it works inside React Flow nodes.

interface HoverTooltipProps {
    headline: string;
    detail: string;
    /** 'div' for block wrappers, 'span' for inline. Default: 'div' */
    as?: 'div' | 'span';
    className?: string;
    children: React.ReactNode;
}

export const HoverTooltip: React.FC<HoverTooltipProps> = ({ headline, detail, as: Tag = 'div', className, children }) => {
    const triggerRef = useRef<HTMLElement>(null);
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const el = triggerRef.current;
        if (!el) return;

        const registration: TooltipRegistration = {
            el,
            onInside: (rect: DOMRect) => {
                setPos({ x: rect.left + rect.width / 2, y: rect.top });
            },
            onOutside: () => {
                setPos(null);
            },
        };

        return registerTooltip(registration);
    }, [headline, detail]);

    return (
        <>
            <Tag
                ref={triggerRef as React.RefObject<HTMLDivElement & HTMLSpanElement>}
                className={className ?? 'cursor-help'}
                style={{ pointerEvents: 'all' }}
            >
                {children}
            </Tag>

            {pos && <TooltipPopup pos={pos} headline={headline} detail={detail} />}
        </>
    );
};

// ── RoleTooltip (convenience wrapper) ────────────────────────────────────────
// Looks up the glossary for the given role and wraps children in HoverTooltip.

interface RoleTooltipProps {
    role: GrammarRole;
    children: React.ReactNode;
}

export const RoleTooltip: React.FC<RoleTooltipProps> = ({ role, children }) => {
    const entry = glossary[role];
    if (!entry) return <>{children}</>;

    return (
        <HoverTooltip headline={entry.headline} detail={entry.detail}>
            {children}
        </HoverTooltip>
    );
};
