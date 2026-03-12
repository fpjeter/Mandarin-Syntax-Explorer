import type { ReactNode } from 'react';

interface ClassicalThemeProviderProps {
    active: boolean;
    children: ReactNode;
}

/**
 * Thin wrapper that swaps CSS custom properties for the classical
 * amber/sepia palette. When `active` is false it renders children
 * as-is with no extra DOM.
 */
export const ClassicalThemeProvider: React.FC<ClassicalThemeProviderProps> = ({ active, children }) => {
    if (!active) return <>{children}</>;

    return (
        <div className="classical-theme contents">
            {children}
            {/* Portal-free override: CSS custom properties applied via .classical-theme */}
        </div>
    );
};
