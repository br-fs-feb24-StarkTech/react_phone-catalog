import { Outlet } from 'react-router-dom';
import './default.layout.scss';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { useAppContext } from '../context/AppContext';
import { Sidebar } from '../components/sidebar-refactor/SidebarRefactor'
// import { Navbar } from '../components/Navbar'; COMPONENT SUGGESTION

export const DefaultLayout = () => {
  const { selectedMenu } = useAppContext();
  
  return (
    <div className="app">
      <Header />

      {selectedMenu && <Sidebar />}

      <Outlet />

      <Footer />
    </div>
  );
};
