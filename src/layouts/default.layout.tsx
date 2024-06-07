import { Outlet } from 'react-router-dom';
import './default.layout.scss';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

export const DefaultLayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
