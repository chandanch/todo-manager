import { useState } from 'react';

const App = ({ darkTheme, toggleTheme }) => {
  return (
    <div
      className="container"
      data-theme={darkTheme ? 'dark' : 'light'}
      onClick={toggleTheme}
    >
      <h2>HOC Sample</h2>
    </div>
  );
};

const withTheme = (Component) => {
  function Func(props) {
    const [darkTheme, setTheme] = useState(false);

    return (
      <Component
        darkTheme={darkTheme}
        toggleTheme={() => setTheme(!darkTheme)}
      />
    );
  }
  return Func;
};

export default withTheme(App);
