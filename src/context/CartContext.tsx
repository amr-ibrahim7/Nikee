'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ProductTypeFil } from "@/Types/Products";

type CartContextValue = {
  cart: Array<ProductTypeFil>;
  addToCart: (item: ProductTypeFil) => void;
  deleteFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateSize: (id: number, size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  updateQuantity: () => {},
  updateSize: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Array<ProductTypeFil>>([]);
  const [cookies, setCookie] = useCookies(["cart"]);

  useEffect(() => {
    const storedCart = cookies.cart;
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    setCookie("cart", cart, { path: "/" });
  }, [cart, setCookie]);

  const addToCart = (item: ProductTypeFil) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
        return [...prevCart];
      } else {
        return [...prevCart, item];
      }
    });
  };

  const deleteFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      const itemToUpdate = prevCart.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        return [...prevCart];
      } else {
        return prevCart;
      }
    });
  };

  const updateSize = (id: number, size: string) => {
    setCart((prevCart) => {
      const itemToUpdate = prevCart.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.size = size;
        return [...prevCart];
      } else {
        return prevCart;
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const value: CartContextValue = {
    cart,
    addToCart,
    deleteFromCart,
    updateQuantity,
    updateSize,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
