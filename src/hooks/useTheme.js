import { useDebugValue, useState } from 'react';

export const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  useDebugValue(`darkTheme: ${darkTheme}`);

  return {
    darkTheme,
    toggleTheme,
  };
};
