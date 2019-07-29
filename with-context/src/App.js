import React, { useState } from 'react';
import ToolBar from './ToolBar';
import { ThemeContext, themes } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleClick = () => {
    
    const currentTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(currentTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ToolBar onClick={handleClick} />
    </ThemeContext.Provider>
  );
}

export default App;
