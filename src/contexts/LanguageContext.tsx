import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageMode = 'en' | 'zh';

interface LanguageContextProps {
    language: LanguageMode;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageMode>('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
