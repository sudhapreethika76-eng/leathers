import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Footer from './Footer';

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'cod',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bankName: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateTax = () => {
    return Math.round(calculateSubtotal() * 0.18);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      setLoading(false);
    }, 2000);
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const total = calculateTotal();

  if (orderPlaced) {
    return (
      <>
        

        {/* ORDER SUCCESS */}
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg border-0" data-aos="fade-up">
                <div className="card-body text-center py-5">
                  <div className="mb-4">
                    <i className="fas fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
                  </div>
                  <h2 className="fw-bold mb-3">Order Placed Successfully!</h2>
                  <p className="text-muted mb-4">
                    Thank you for your purchase. Your order has been received and is being processed.
                  </p>
                  <div className="bg-light rounded p-3 mb-4">
                    <p className="mb-2"><strong>Order Number:</strong> #ORD{Date.now()}</p>
                    <p className="mb-0"><strong>Total Amount:</strong> <span className="text-primary">₹{total.toLocaleString('en-IN')}</span></p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center">
                    <Link to="/shop" className="btn btn-primary" style={{ backgroundColor: '#3E2723', borderColor: '#3E2723' }}>
                      Continue Shopping
                    </Link>
                    <Link to="/" className="btn btn-outline-primary">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </>
    );
  }

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
                <Link to="/cart" className="nav-link text-white">Cart</Link>
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
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                    <span className="visually-hidden">cart items</span>
                  </span>
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
              Secure Checkout
          </h1>
          <p className="mb-0" data-aos="fade-up">
            Complete your order details
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          {/* ORDER SUMMARY */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }} data-aos="fade-right">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Order Summary</h5>
              </div>
              <div className="card-body">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`d-flex justify-content-between align-items-center ${index !== cartItems.length - 1 ? 'mb-3 pb-3 border-bottom' : ''}`}>
                    <div className="d-flex align-items-center">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="rounded me-3"
                          style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        />
                      ) : (
                        <div className="bg-light rounded d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
                          <i className="fas fa-tshirt text-muted"></i>
                        </div>
                      )}
                      <div>
                        <h6 className="mb-0 small fw-bold">{item.name}</h6>
                        <p className="mb-0 text-muted small">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="fw-bold">₹{(!isNaN(item.price * item.quantity) ? item.price * item.quantity : 0).toLocaleString('en-IN')}</span>
                  </div>
                ))}
                
                <div className="mt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">₹{(!isNaN(subtotal) ? subtotal : 0).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (18%):</span>
                    <span className="fw-bold">₹{(!isNaN(tax) ? tax : 0).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping:</span>
                    <span className="fw-bold text-success">FREE</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">Total:</h6>
                    <h5 className="mb-0 text-primary">₹{(!isNaN(total) ? total : 0).toLocaleString('en-IN')}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHECKOUT FORM */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0" data-aos="fade-left">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Billing & Shipping Information</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Personal Information</h6>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label small fw-bold">First Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-bold">Last Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label small fw-bold">Email *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-bold">Phone *</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Shipping Address</h6>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Address *</label>
                      <textarea 
                        className="form-control" 
                        rows="2" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4 mb-3 mb-md-0">
                        <label className="form-label small fw-bold">City *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3 mb-md-0">
                        <label className="form-label small fw-bold">State *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label small fw-bold">ZIP Code *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Payment Method</h6>
                    <div className="mb-3">
                      <select 
                        className="form-select" 
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                      >
                        <option value="cod">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="netbanking">Net Banking</option>
                      </select>
                    </div>

                    {/* Card Payment Fields */}
                    {formData.paymentMethod === 'card' && (
                      <div className="card bg-light p-3">
                        <div className="mb-3">
                          <label className="form-label small fw-bold">Card Number *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label small fw-bold">Cardholder Name *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3 mb-md-0">
                            <label className="form-label small fw-bold">Expiry Date *</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small fw-bold">CVV *</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* UPI Payment Fields */}
                    {formData.paymentMethod === 'upi' && (
                      <div className="card bg-light p-3">
                        <div className="mb-3">
                          <label className="form-label small fw-bold">UPI ID *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="upiId"
                            value={formData.upiId}
                            onChange={handleInputChange}
                            placeholder="yourname@upi"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Net Banking Fields */}
                    {formData.paymentMethod === 'netbanking' && (
                      <div className="card bg-light p-3">
                        <div className="mb-3">
                          <label className="form-label small fw-bold">Select Bank *</label>
                          <select 
                            className="form-select" 
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select your bank</option>
                            <option value="sbi">State Bank of India</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                            <option value="pnb">Punjab National Bank</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3">
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={() => navigate('/cart')}
                    >
                      <i className="fas fa-arrow-left me-2"></i>
                      Back to Cart
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-success flex-grow-1 fw-bold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-lock me-2"></i>
                          Place Order - ₹{total.toLocaleString('en-IN')}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    <Footer />
    </>
  );
}

export default Checkout;
