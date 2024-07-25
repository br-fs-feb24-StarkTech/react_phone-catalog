import React, { createContext, useCallback, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CartItemProps } from '../types/CartItemProps';
import { ProductType } from '../types/ProductType';
import { AuthProvider } from './AuthContext';
import { deleteFavoritesUser, fetchFavorites, postFavoritesUser } from '../services/serviceAPI';

type Props = {
  children: React.ReactNode;
};

type AppContextType = {
  favorites: ProductType[];
  ids: number[];
  favoritesUser: (userId: string | null) => void;
  addToFavorites: (productId: number, product: ProductType) => void;
  removeFromFavorites: (userId: string | null, productId: number) => void;
  cart: CartItemProps[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  calculateTotalPrice: () => number;
  clearCart: () => void;
  selectedMenu: boolean;
  setSelectedMenu: (isOpen: boolean) => void;
  selectedNavItem: string;
  setSelectedNavItem: (item: string) => void;
};

const AppContext = createContext<AppContextType>({
  favorites: [],
  ids: [],
  favoritesUser: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartQuantity: () => {},
  calculateTotalPrice: () => 0,
  clearCart: () => {},
  selectedMenu: false,
  setSelectedMenu: () => {},
  selectedNavItem: 'Home',
  setSelectedNavItem: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<ProductType[]>([]);
  const [cart, setCart] = useLocalStorage<CartItemProps[]>('cart', []);
  const [selectedMenu, setSelectedMenu] = useState<boolean>(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Home');
  const [ids, setIds] = useState<number[]>([]);
  const idsFav:number[] = [];
  const [loadFav, setLoadFav] = useState(true);

  const favoritesUser = useCallback(
    (tokenId: string | null) => {
      if (loadFav === true) {
        tokenId !== null ?
        fetchFavorites(tokenId)
          .then(res => {
            setFavorites(res.data);
            setLoadFav(false);
          })
          .catch(function (error) {
            console.log(error);
          }) : {};
      }

      favorites.map(x => postDetails(x));

        function postDetails(post: ProductType) {
          const { id } = post;
          idsFav.push(id);
        }

        setIds(idsFav);
    },
    [loadFav, idsFav],
  );

  const addToFavorites = useCallback(
    (productId: number, product: ProductType) => {

      const params = {
        userId: 5,
        productId: productId
      }

      postFavoritesUser(params);
      setFavorites((prevFavorites: ProductType[]) => [...prevFavorites, product]);
    },
    [setFavorites],
  );

  const removeFromFavorites = useCallback(
    (userId: number, productId: number) => {
      deleteFavoritesUser(userId, productId)
      setFavorites((prevFavorites: ProductType[]) =>
        prevFavorites.filter(product => product.id !== productId),
      );
    },

    [setFavorites, favorites],
  );

  const addToCart = useCallback(
    (product: ProductType) => {
      setCart(prevCart => [...prevCart, { product, quantity: 1 }]);
    },
    [setCart],
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      setCart((prevCart: CartItemProps[]) =>
        prevCart.filter(item => item.product.id !== productId),
      );
    },
    [setCart],
  );

  const updateCartQuantity = useCallback(
    (productId: number, delta: number) => {
      setCart(currentCart =>
        currentCart.map(cartItem => {
          if (cartItem.product.id === productId) {
            const newQuantity = Math.max(cartItem.quantity + delta, 1);

            return { ...cartItem, quantity: newQuantity };
          }

          return cartItem;
        }),
      );
    },
    [setCart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  const calculateTotalPrice = useCallback(() => {
    return Math.floor(
      cart.reduce((total, { product, quantity }) => total + product.price * quantity, 0),
    );
  }, [cart]);

  return (
    <AuthProvider>
      <AppContext.Provider
        value={{
          favorites,
          ids,
          favoritesUser,
          addToFavorites,
          removeFromFavorites,
          cart,
          addToCart,
          removeFromCart,
          updateCartQuantity,
          calculateTotalPrice,
          clearCart,
          selectedMenu,
          setSelectedMenu,
          selectedNavItem,
          setSelectedNavItem,
        }}
      >
        {children}
      </AppContext.Provider>
    </AuthProvider>
  );
};
