import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './default.layout.scss';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { useAppContext } from '../context/AppContext';
import { Sidebar } from '../components/sidebar/';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const DefaultLayout = () => {
  const { selectedMenu, setSelectedMenu } = useAppContext();
  const [lightTheme, setLightTheme] = useLocalStorage('lightTheme', false);

  const changeTheme = () => {
    setLightTheme(!lightTheme);
  }

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
    <div data-theme={lightTheme ? "light" : "dark"} className="app">
      <Header lightTheme={lightTheme} changeTheme={changeTheme} checked={lightTheme}/>

      {selectedMenu && <Sidebar />}

      <Outlet />

      <Footer />
    </div>
  );
};
