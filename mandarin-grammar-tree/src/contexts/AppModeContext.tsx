import { createContext, useContext } from 'react';

/**
 * Provides the current app mode (modern vs. classical) to any
 * descendant component without prop-drilling.
 */
const AppModeContext = createContext<boolean>(false);

export const AppModeProvider = AppModeContext.Provider;

/** Returns `true` when the app is in Classical Chinese mode. */
export const useIsClassical = () => useContext(AppModeContext);
