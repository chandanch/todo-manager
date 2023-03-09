import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const withTheme = (Component) => {
  function Func(props) {
    const { toggleTheme, darkTheme } = useContext(ThemeContext);

    return (
      <Component
        {...props}
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
      />
    );
  }
  return Func;
};
