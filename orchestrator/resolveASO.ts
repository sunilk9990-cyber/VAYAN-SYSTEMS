export const resolveASO = (name: string) => {
  const asos = {
    'property-shelter': { theme: 'zillow' },
    'work-income': { theme: 'enterprise' },
    // ... define all ASOs
  };
  return asos[name] || { theme: 'base' };
};
