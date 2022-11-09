import { FunctionComponent } from 'react';
import Header from '../../partials/header/Header';
import Footer from '../../partials/footer/Footer';

const MainLayout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <main id="main-layout">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
