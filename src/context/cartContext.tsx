import { createContext, useContext, useState } from "react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface CartContextType {
  cart: Plan[];
  addToCart: (plan: Plan) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
}

// Create Context with Default Empty State
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Plan[]>([]);

  const addToCart = (plan: Plan) => {
    setCart((prevCart) => [...prevCart, plan]);
  };

  const removeFromCart = (name: string) => {
    setCart((prevCart) => prevCart.filter((plan) => plan.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
