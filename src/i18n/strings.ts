/**
 * Central dictionary for UI translations.
 * Allows the application to swap localized strings based on the LanguageContext.
 */

export interface BilingualString {
    en: string;
    zh?: string;
}

export const i18n = {
    // Top Navigation
    NAV_GLOSSARY: { en: "Glossary", zh: "词汇表" },
    NAV_CLASSICAL: { en: "Classical Explorer", zh: "文言文探索" },
    NAV_MODERN: { en: "Modern Explorer", zh: "现代汉语探索" },
    
    // Toolbar
    TOOLBAR_EXPAND: { en: "Expand All", zh: "全部展开" },
    TOOLBAR_COLLAPSE: { en: "Collapse All", zh: "全部折叠" },
    TOOLBAR_GHOST: { en: "Pro-Drop (Ghost)", zh: "省略成分 (Ghost)" },
    TOOLBAR_SEMANTIC: { en: "Semantic Roles", zh: "语义角色" },
    TOOLBAR_PRINT: { en: "Print / PDF", zh: "打印 / PDF" },
    TOOLBAR_PNG: { en: "Save as PNG", zh: "保存为 PNG" },
    
    // Node Tooltips & UI
    TOGGLE_LANGUAGE: { en: "中文", zh: "English" }, // The button label
};

/**
 * Shape of a single glossary entry.
 * headlineZh / detailZh are optional — filled in by the Educational Publisher.
 * When absent the UI gracefully falls back to the English strings.
 */
export interface GlossaryEntry {
    headline: string;
    detail: string;
    headlineZh?: string;
    detailZh?: string;
}

/**
 * Resolve a glossary entry to a display-ready { headline, detail } pair
 * based on the active language. Falls back to English when zh fields are absent.
 */
export function resolveGlossaryEntry(
    entry: GlossaryEntry,
    language: 'en' | 'zh'
): { headline: string; detail: string } {
    if (language === 'zh' && entry.headlineZh) {
        return {
            headline: entry.headlineZh,
            detail: entry.detailZh ?? entry.detail,
        };
    }
    return { headline: entry.headline, detail: entry.detail };
}

/**
 * Resolve a single BilingualString to the appropriate language.
 * Falls back to English when the zh field is absent.
 */
export function resolveBilingual(
    entry: BilingualString,
    language: 'en' | 'zh'
): string {
    if (language === 'zh' && entry.zh) return entry.zh;
    return entry.en;
}
