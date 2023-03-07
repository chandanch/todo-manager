import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const Header = ({ appVersion }) => {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);

  return (
    <header>
      <h2>To-do Manager</h2>
      <span className="nav-item">
        <input
          type="checkbox"
          checked={darkTheme === true}
          className="theme-toggle-checkbox"
          autoComplete="off"
          id="toggleThemeId"
          onChange={() => {
            toggleTheme();
          }}
        />
        <label
          htmlFor="toggleThemeId"
          className="theme-toggle-checkbox-label"
        >
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
        <span>{appVersion}</span>
      </span>
    </header>
  );
};

export default Header;
