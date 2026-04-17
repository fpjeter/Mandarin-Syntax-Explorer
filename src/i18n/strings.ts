/**
 * Central dictionary for UI translations.
 * Allows the application to swap localized strings based on the LanguageContext.
 */

export interface BilingualString {
    en: string;
    zh?: string;
}

export const i18n = {
    // App Title & Subtitle
    APP_TITLE_MODERN: { en: "Mandarin Syntax Explorer", zh: "中文句法探索" },
    APP_TITLE_CLASSICAL: { en: "古文探秘 · Classical Texts", zh: "古文探秘 · 经典古籍" },
    APP_SUBTITLE_MODERN: { en: "Generative Grammar Visualization", zh: "生成语法可视化" },

    // Top Navigation
    NAV_GLOSSARY: { en: "Glossary", zh: "词汇表" },
    NAV_CLASSICAL: { en: "Famous Quotes · Grammar Analysis", zh: "名言名句 · 语法分析" },
    NAV_MODERN: { en: "Generative Grammar Visualization", zh: "生成语法可视化" },
    NAV_FRAMEWORK: { en: "Topic-Prominent Framework", zh: "话题优先框架" },
    NAV_SWITCH_CLASSICAL: { en: "Explore Classical Chinese", zh: "探索古代汉语" },
    NAV_SWITCH_MODERN: { en: "Return to Modern Mandarin", zh: "返回现代汉语" },
    
    // Mobile Tabs
    TAB_TREE: { en: "Tree", zh: "句法树" },
    TAB_SENTENCES: { en: "Sentences", zh: "例句" },
    TAB_GUIDE: { en: "Guide", zh: "指南" },

    // Sidebar Tabs
    TAB_QUOTES: { en: "Quotes", zh: "名言" },
    SIDEBAR_GUIDE: { en: "Framework Guide", zh: "框架指南" },
    SIDEBAR_CLASSICAL_GUIDE: { en: "Classical Grammar Guide", zh: "古文语法指南" },
    SIDEBAR_COLLAPSE: { en: "Collapse sidebar", zh: "收起侧栏" },
    SIDEBAR_EXPAND: { en: "Expand sidebar", zh: "展开侧栏" },
    LOADING_SENTENCES: { en: "Loading sentences\u2026", zh: "加载例句中\u2026" },
    LOADING_GUIDE: { en: "Loading guide\u2026", zh: "加载指南中\u2026" },
    THE_FRAMEWORK: { en: "The Framework", zh: "语法框架" },
    CLASSICAL_GRAMMAR: { en: "Classical Grammar", zh: "古文语法" },

    // Zoom Controls
    ZOOM_IN: { en: "Zoom in", zh: "放大" },
    ZOOM_OUT: { en: "Zoom out", zh: "缩小" },
    FIT_VIEW: { en: "Fit to view", zh: "适应视图" },
    SELECT_SENTENCE: { en: "Select a sentence to visualize", zh: "请选择一个句子来查看句法树" },

    // Toolbar
    TOOLBAR_EXPAND: { en: "Expand", zh: "展开" },
    TOOLBAR_COLLAPSE: { en: "Collapse", zh: "折叠" },
    TOOLBAR_GHOST: { en: "Implied Subjects", zh: "省略成分" },
    TOOLBAR_SEMANTIC: { en: "Semantic Roles", zh: "语义角色" },
    TOOLBAR_PRINT: { en: "Print", zh: "打印" },
    TOOLBAR_PNG: { en: "PNG", zh: "PNG" },
    TOOLBAR_RANDOM: { en: "Random", zh: "随机" },
    TOOLBAR_OPEN: { en: "Open toolbar", zh: "打开工具栏" },
    TOOLBAR_CLOSE: { en: "Close toolbar", zh: "关闭工具栏" },
    
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
