import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/animations.css';
import Footer from './Footer';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [cartItems]);

  const removeItem = (id) => {
    removeFromCart(id);
  };

  const calculateSubtotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }
    
    let total = 0;
    cartItems.forEach((item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      const itemTotal = itemPrice * itemQuantity;
      total += itemTotal;
    });
    
    return total;
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const tax = Math.round(subtotal * 0.18);
    return tax;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    const total = subtotal + tax;
    return total;
  };


  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const total = calculateTotal();
  

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg px-4 shadow-sm"
        style={{ backgroundColor: "#3E2723" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold" to="/">
            <span style={{ color: '#D7A86E' }}>LEATHER</span><span style={{ color: '#ffffff' }}>LUXE</span>
          </Link>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mx-1">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/shop" className="nav-link text-white">Shop</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/contact" className="nav-link text-white">Contact</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/cart" className="btn btn-outline-light position-relative">
                  <i className="fas fa-shopping-cart"></i>
                  <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge ${
                        getCartCount() === 0 ? '' : 
                        getCartCount() === 1 ? 'count-single' : 
                        getCartCount() <= 9 ? 'count-double' : 
                        getCartCount() <= 99 ? 'count-triple' : 'count-many'
                      }`} 
                        style={{
                          backgroundColor: getCartCount() === 0 ? '#6c757d' : '#D7A86E',
                          color: getCartCount() === 0 ? '#ffffff' : '#3E2723',
                          border: '2px solid #ffffff',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          fontVariantNumeric: 'tabular-nums',
                          letterSpacing: '-0.02em',
                          lineHeight: '1',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          opacity: getCartCount() === 0 ? '0.7' : '1'
                        }}>
                    {getCartCount()}
                    <span className="visually-hidden">cart items</span>
                  </span>
                </Link>
              </li>
              
              <li className="nav-item mx-2">
                <Link to="/login" className="btn btn-primary fw-bold">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <div 
        className="py-4 mb-4"
        style={{ 
          background: "linear-gradient(135deg, #3E2723 0%, #5D4037 100%)",
          color: "white"
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold mb-2" data-aos="fade-down">
              Your Leather Cart
          </h1>
          <p className="mb-0" data-aos="fade-up">
            Review your items and proceed to checkout
          </p>
        </div>
      </div>

      <div className="container mb-5">
        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h3 className="mb-3">Your cart is empty</h3>
            <p className="text-muted mb-4">Add some products to your cart to continue shopping</p>
            <Link to="/shop" className="btn btn-primary btn-lg" style={{ backgroundColor: '#3E2723', borderColor: '#3E2723' }}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row">
            {/* CART ITEMS */}
            <div className="col-lg-8 mb-4">
              <div className="card shadow-sm border-0" data-aos="fade-right">
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0 fw-bold">Cart Items ({cartItems.length})</h5>
                </div>
                <div className="card-body p-0">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className={`p-3 ${index !== cartItems.length - 1 ? 'border-bottom' : ''} animate-slide-in-right`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="row align-items-center">
                        <div className="col-md-2 col-3">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="img-fluid rounded"
                              style={{ height: "80px", objectFit: "cover" }}
                            />
                          ) : (
                            <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ height: "80px" }}>
                              <i className="fas fa-tshirt text-muted fa-2x"></i>
                            </div>
                          )}
                        </div>
                        <div className="col-md-4 col-6">
                          <h6 className="mb-1 fw-bold">{item.name}</h6>
                          <p className="text-muted mb-0 small">Premium Quality</p>
                          <p className="mb-0 fw-bold text-primary">₹{(item.price || 0).toLocaleString('en-IN')}</p>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="input-group input-group-sm" style={{ maxWidth: "120px" }}>
                            <button 
                              className="btn btn-outline-secondary" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <input 
                              type="text" 
                              className="form-control text-center" 
                              value={item.quantity} 
                              readOnly 
                            />
                            <button 
                              className="btn btn-outline-secondary" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2 col-3 text-end">
                          <p className="mb-0 fw-bold">₹{((item.price || 0) * (item.quantity || 0)).toLocaleString('en-IN')}</p>
                          <button 
                            className="btn btn-sm btn-danger mt-2" 
                            onClick={() => removeItem(item.id)}
                            style={{ fontSize: '0.8rem' }}
                          >
                            <i className="fas fa-trash me-1"></i>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 mb-4" data-aos="fade-left">
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0 fw-bold">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (18%):</span>
                    <span className="fw-bold">₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping:</span>
                    <span className="fw-bold text-success">FREE</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">Total:</h6>
                    <h5 className="mb-0 text-primary">₹{total.toLocaleString('en-IN')}</h5>
                  </div>
                  
                  <Link 
                    to="/checkout" 
                    className="btn btn-primary w-100 fw-bold text-decoration-none" 
                    style={{ backgroundColor: '#3E2723', borderColor: '#3E2723' }}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      
    <Footer />
    </>
  );
}

export default Cart;
