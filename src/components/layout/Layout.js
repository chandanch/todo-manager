import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Layout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);
  const appVersion = '1.0.0';
  return (
    <div
      className="container"
      data-theme={darkTheme ? 'dark' : 'light'}
    >
      <Header appVersion={appVersion} />
      {children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
