import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './default.layout.scss';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { useAppContext } from '../context/AppContext';
import { Sidebar } from '../components/sidebar/Sidebar';

export const DefaultLayout = () => {
  const { selectedMenu, setSelectedMenu } = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639 && selectedMenu) {
        setSelectedMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedMenu, setSelectedMenu]);

  return (
    <div className="app">
      <Header />

      {selectedMenu && <Sidebar />}

      <Outlet />

      <Footer />
    </div>
  );
};
