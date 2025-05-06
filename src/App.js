import { useState } from 'react';
//import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './state/store/store';
import { lightTheme, darkTheme } from './theme.js';
import ThemeContext from './components/ThemeContext';
import RouterComponent from './components/RouterComponent';
import FooterComponent from './components/Footer';
import './App.css';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
        <div className={`app ${themeMode}`}>
          <RouterComponent toggleTheme={toggleTheme} />
          <FooterComponent />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}


export default App;
