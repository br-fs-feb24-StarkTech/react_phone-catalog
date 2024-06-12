import './assets/scss/variables.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from './layouts/default.layout';
import { HomePage } from './pages/home-page/HomePage';
import { PageNotFound } from './pages/page-not-found/PageNotFound';
import PhonesPage from './pages/phones-page/PhonesPage';
import { CartPage } from './pages/cart-page/CartPage';
import './App.css';
import { AppProvider } from './context/AppContext';
import { ItemDetails } from './pages/item-details/ItemDetails';
import { TabletsPage } from './pages/tablets-page/TabletsPage';
import { AccessoriesPage } from './pages/accessories-page/AccessoriesPage';

export const App = () => (
  <AppProvider
    children={
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="phones" element={<PhonesPage />} />
            <Route path="item-details/1" element={<ItemDetails />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="tablets" element={<TabletsPage />} />
            <Route path="accessories" element={<AccessoriesPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    }
  />
);
