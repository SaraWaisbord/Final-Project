import { createContext } from 'react';
//ערכת נושא
const ThemeContext = createContext({
  themeMode: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
