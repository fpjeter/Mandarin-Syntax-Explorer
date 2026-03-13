import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * First-visit onboarding hint for mobile users.
 * Shows key interaction tips once per device (persisted in localStorage).
 * Auto-dismisses after 6 seconds or on tap.
 */
export const OnboardingHint: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Only show on touch devices, and only once per device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const alreadySeen = localStorage.getItem('onboardingSeen');
        if (isTouchDevice && !alreadySeen) {
            // Small delay so the tree renders first
            const showTimer = setTimeout(() => setShow(true), 800);
            return () => clearTimeout(showTimer);
        }
    }, []);

    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => {
            setShow(false);
            localStorage.setItem('onboardingSeen', '1');
        }, 6000);
        return () => clearTimeout(timer);
    }, [show]);

    const dismiss = () => {
        setShow(false);
        localStorage.setItem('onboardingSeen', '1');
    };

    if (!show) return null;

    return (
        <div
            className="absolute inset-x-4 bottom-16 z-30 pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-500"
            onClick={dismiss}
        >
            <div className="glass-panel rounded-2xl border border-slate-600/50 px-4 py-3 shadow-2xl relative">
                <button
                    onClick={dismiss}
                    className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
                <div className="flex flex-col gap-1.5 text-[11px] text-slate-300 font-medium pr-4">
                    <div className="flex items-center gap-2">
                        <span className="text-base">👆</span>
                        <span>Tap nodes to expand · Tap roles for definitions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-base">👌</span>
                        <span>Pinch to zoom · Drag to pan the tree</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-base">◀▶</span>
                        <span>Use arrows to browse sentences in each category</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
