import './assets/scss/variables.scss';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from './layouts/default.layout';
import { HomePage } from './pages/home-page/HomePage';
import { PageNotFound } from './pages/pagenotfound/PageNotFound';
import PhonesPage from './pages/phonespage/PhonesPage';
import { CartPage } from './pages/cartpage/CartPage';
import { ItemDetails } from './pages/item-details/ItemDetails';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="phonespage" element={<PhonesPage />} />
        <Route path="item-details/1" element={<ItemDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
