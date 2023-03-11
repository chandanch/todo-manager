import { useDebugValue, useState } from 'react';

export const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  useDebugValue(`${darkTheme ? 'light' : 'dark'}`, (val) => {
    if (val == 'light') {
      return 'Theme is light';
    } else {
      return 'Theme is dart';
    }
  });

  return {
    darkTheme,
    toggleTheme,
  };
};
