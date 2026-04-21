import React from 'react';
import { useCart } from '../contexts/CartContext';

function CartTest() {
  const { cartItems, addToCart, getCartCount } = useCart();
  
  const testProduct = {
    id: 999,
    name: "Test Product",
    price: "999",
    image: null
  };

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
      <h3>Cart Debug Test</h3>
      <p>Current cart items: {cartItems.length}</p>
      <p>Cart count: {getCartCount()}</p>
      <button 
        onClick={() => {
          console.log('Test button clicked');
          addToCart(testProduct);
        }}
        style={{ 
          padding: '10px 20px', 
          background: '#3E2723', 
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Add Test Product to Cart
      </button>
      <div style={{ marginTop: '20px' }}>
        <h4>Cart Contents:</h4>
        {cartItems.map(item => (
          <div key={item.id} style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartTest;
