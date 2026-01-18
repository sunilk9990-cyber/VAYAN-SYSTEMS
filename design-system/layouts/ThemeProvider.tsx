'use client';

import React, { createContext, useContext } from 'react';
import { baseTheme } from '../themes/base.theme';
// Import other themes...

const ThemeContext = createContext(baseTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode; theme?: string }> = ({ children, theme = 'base' }) => {
  const selectedTheme = theme === 'base' ? baseTheme : baseTheme; // Placeholder, implement dynamic theme selection
  return <ThemeContext.Provider value={selectedTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
