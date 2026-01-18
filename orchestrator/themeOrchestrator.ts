import { baseTheme } from '../design-system/themes/base.theme';

export const themeOrchestrator = (themeName: string) => {
  switch (themeName) {
    case 'base':
      return baseTheme;
    // Add other cases
    default:
      return baseTheme;
  }
};
