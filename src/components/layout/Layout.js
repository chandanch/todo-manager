import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Layout = (props) => {
  const { darkTheme } = useContext(ThemeContext);
  const appVersion = '1.0.0';
  return (
    <div
      className="container"
      data-theme={darkTheme ? 'dark' : 'light'}
    >
      <Header appVersion={appVersion} />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
