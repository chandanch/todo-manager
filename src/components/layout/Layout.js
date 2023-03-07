import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const appVersion = '1.0.0';
  return (
    <div
      className="container"
      data-theme={props.darkTheme ? 'dark' : 'light'}
    >
      <Header {...props} appVersion={appVersion} />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
