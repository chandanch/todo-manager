import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export const withTheme = (Component) => {
  function Func(props) {
    const { toggleTheme, darkTheme } = useContext(ThemeContext);

    return (
      <Component darkTheme={darkTheme} toggleTheme={toggleTheme} />
    );
  }
  return Func;
};
