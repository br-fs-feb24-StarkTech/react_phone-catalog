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
import TabletsPage from './pages/tablets-page/TabletsPage';
import AccessoriesPage from './pages/accessories-page/AccessoriesPage';
import { FavouritesPage } from './pages/favourites-page/FavouritesPage';
import LoginPage from './pages/login-page/LoginPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PrivateRoutesProvider } from './context/PrivateRoutesContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Ajuste o caminho conforme necessário
import { AuthProvider } from './context/AuthContext'; // Importar o AuthProvider

export const App: React.FC = () => (
  <AuthProvider> {/* Envolva tudo com AuthProvider */}
    <AppProvider>
      <Router>
        <PrivateRoutesProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="phones" element={<ProtectedRoute element={<PhonesPage />} />} />
              <Route path="cart" element={<ProtectedRoute element={<CartPage />} />} />
              <Route path="tablets" element={<ProtectedRoute element={<TabletsPage />} />} />
              <Route path="accessories" element={<ProtectedRoute element={<AccessoriesPage />} />} />
              <Route path="favourites" element={<ProtectedRoute element={<FavouritesPage />} />} />
              <Route path="products/:productId" element={<ProtectedRoute element={<ItemDetails />} />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </PrivateRoutesProvider>
      </Router>
    </AppProvider>
  </AuthProvider>
);

