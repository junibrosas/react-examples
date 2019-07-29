import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ToolBar(props) {
  const context = useContext(ThemeContext);

  return <>
    <button
      {...props}
      style={{backgroundColor: context.background}}>
        Click me
    </button>
  </>
}

ToolBar.contextType = ThemeContext;

export default ToolBar;
