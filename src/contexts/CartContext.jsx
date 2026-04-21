import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.error('useCart must be used within a CartProvider');
    // Return a fallback instead of throwing to prevent app crash
    return {
      cartItems: [],
      addToCart: () => console.error('addToCart not available - CartContext not found'),
      removeFromCart: () => console.error('removeFromCart not available - CartContext not found'),
      updateQuantity: () => console.error('updateQuantity not available - CartContext not found'),
      clearCart: () => console.error('clearCart not available - CartContext not found'),
      getCartTotal: () => 0,
      getCartCount: () => 0
    };
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('cart');
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
    }
  }, [cartItems]);

  const addToCart = (product) => {
    if (!product || !product.id) {
      return;
    }
    
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // If item exists, increase quantity
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item doesn't exist, add it with quantity 1
      let parsedPrice = 0;
      
      if (typeof product.price === 'string') {
        // Remove currency symbols and commas, then parse
        const cleanPrice = product.price.replace(/[^\d]/g, '').trim();
        parsedPrice = parseInt(cleanPrice) || 0;
      } else {
        parsedPrice = product.price || 0;
      }
      
      const cartItem = {
        id: product.id,
        name: product.name || 'Unknown Product',
        price: parsedPrice,
        quantity: 1,
        image: product.image || null,
        category: product.category || 'unknown'
      };
      
      setCartItems(prevItems => [...prevItems, cartItem]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
