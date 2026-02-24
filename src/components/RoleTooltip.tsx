import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';

// ── Shared mousemove listener ────────────────────────────────────────────────
// A single document-level listener checks all registered tooltips. When
// multiple overlapping triggers are hovered (e.g. a badge inside a node),
// only the *innermost* (smallest-area) one fires — "innermost wins."
//
// On touch-primary devices (phones, tablets) this listener is completely
// skipped — tooltips only appear via long-press. The CSS (hover: hover)
// media query reliably detects whether the device supports real hover.

type TooltipRegistration = {
    el: HTMLElement;
    onInside: (rect: DOMRect) => void;
    onOutside: () => void;
};

const activeTooltips = new Set<TooltipRegistration>();
let listenerRegistered = false;

/** true only on devices with a real hover capability (mouse / trackpad) */
const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

function handleSharedMouseMove(e: MouseEvent) {
    // Touch-primary devices: never show tooltips via mousemove
    if (!canHover) return;

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

const TOOLTIP_MARGIN = 8; // px from viewport edge

function TooltipPopup({ pos, headline, detail }: { pos: { x: number; y: number }; headline: string; detail: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [adjusted, setAdjusted] = useState<{
        left: number; top: number; flipped: boolean; caretLeft: number;
    } | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vw = window.innerWidth;

        // Vertical: flip below if clipping top
        const flipped = pos.y - 8 - rect.height < TOOLTIP_MARGIN;
        const top = flipped
            ? pos.y + 12           // below trigger
            : pos.y - 8 - rect.height; // above trigger

        // Horizontal: clamp so tooltip doesn't overflow left/right
        let left = pos.x - rect.width / 2;
        left = Math.max(TOOLTIP_MARGIN, Math.min(left, vw - rect.width - TOOLTIP_MARGIN));

        // Caret follows: calculate where the trigger center is relative to tooltip left
        const caretLeft = Math.max(12, Math.min(pos.x - left, rect.width - 12));

        setAdjusted({ left, top, flipped, caretLeft });
    }, [pos.x, pos.y]);

    return createPortal(
        <div
            ref={ref}
            role="tooltip"
            style={{
                position: 'fixed',
                left: adjusted?.left ?? pos.x,
                top: adjusted?.top ?? (pos.y - 8),
                transform: adjusted ? 'none' : 'translate(-50%, -100%)',
                zIndex: 99999,
                pointerEvents: 'none',
                opacity: adjusted ? 1 : 0,
            }}
            className={`
                w-52 rounded-xl px-3 py-2.5
                bg-slate-800/95 border border-slate-600/60
                backdrop-blur-md
                shadow-[0_8px_32px_rgba(0,0,0,0.65)]
                transition-opacity duration-75
            `}
        >
            <p className="text-[11px] font-bold text-slate-100 mb-0.5 leading-tight">
                {headline}
            </p>
            <p className="text-[10px] text-slate-400 leading-snug">
                {detail}
            </p>
            {/* Caret arrow */}
            <div
                className={`absolute w-2.5 h-2.5 bg-slate-800 border-slate-600/60 ${adjusted?.flipped
                    ? '-top-[5px] border-l border-t'
                    : '-bottom-[5px] border-r border-b'
                    }`}
                style={{
                    left: adjusted ? `${adjusted.caretLeft}px` : '50%',
                    transform: adjusted
                        ? 'translateX(-50%) rotate(45deg)'
                        : 'translateX(-50%) rotate(45deg)',
                }}
            />
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
    const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const longPressFired = useRef(false);

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

    // ── Long-press for mobile ────────────────────────────────────────────────
    const cancelLongPress = () => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
    };

    const handleTouchStart = (_e: React.TouchEvent) => {
        longPressFired.current = false;
        cancelLongPress();
        longPressTimer.current = setTimeout(() => {
            const el = triggerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            setPos({ x: rect.left + rect.width / 2, y: rect.top });
            longPressFired.current = true;

            // Dismiss on next touch anywhere
            const dismiss = () => {
                setPos(null);
                document.removeEventListener('touchstart', dismiss);
            };
            // Use setTimeout to avoid catching the current touch event
            setTimeout(() => document.addEventListener('touchstart', dismiss, { once: true }), 0);
        }, 500);
    };

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        cancelLongPress();
        // If long-press fired, prevent the tap from also triggering expand/collapse
        if (longPressFired.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, []);

    const handleTouchMove = useCallback(() => {
        cancelLongPress();
    }, []);

    // Always prevent native context menu on tooltip triggers — the browser's
    // default long-press context menu (~500ms) would otherwise steal the gesture.
    const handleContextMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
    }, []);

    return (
        <>
            <Tag
                ref={triggerRef as React.RefObject<HTMLDivElement & HTMLSpanElement>}
                className={className ?? 'cursor-help'}
                style={{ pointerEvents: 'all', WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' } as React.CSSProperties}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                onTouchCancel={handleTouchMove}
                onContextMenu={handleContextMenu}
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
