import React from 'react';
import { ThemeProvider } from './ThemeProvider';

interface BaseLayoutProps {
  children: React.ReactNode;
  theme?: string;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, theme = 'base' }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-secondary">
        {children}
      </div>
    </ThemeProvider>
  );
};
