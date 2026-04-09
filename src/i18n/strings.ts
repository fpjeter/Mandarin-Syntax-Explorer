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
