import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './default.layout.scss';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
<<<<<<< HEAD
=======
import { useAppContext } from '../context/AppContext';
import { Sidebar } from '../components/sidebar/Sidebar';
>>>>>>> 8d1a53a4eb85cf83d5e71cfe8bb252a16a1e5ee1

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
