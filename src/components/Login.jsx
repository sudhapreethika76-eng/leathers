














import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaCheckCircle, FaExclamationCircle, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Footer from './Footer';

function Login() {
  const { getCartCount } = useCart();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock authentication logic
      if (formData.username === 'admin' && formData.password === 'password') {
        setLoginSuccess(true);
        // Store login state (you could use context, localStorage, etc.)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.username);
        
        // Redirect to home page after successful login
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setErrors({ general: 'Invalid username or password' });
      }
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    // Navigate to signup page or show signup modal
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page or show modal
    navigate('/forgot-password');
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

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
              {/* Cart */}
              <li className="nav-item mx-2">
                <Link to="/cart" className="btn btn-outline-light position-relative">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger" style={{transform: 'translate(25%, -50%)'}}>
                    {getCartCount()}
                    <span className="visually-hidden">cart items</span>
                  </span>
                </Link>
              </li>
              {/* Login */}
              <li className="nav-item mx-2">
                <Link to="/login" className="btn btn-primary fw-bold">
                  Login 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* LOGIN HERO SECTION */}
      <div className="position-relative" style={{ 
        background: 'linear-gradient(135deg, #2C1810 0%, #1A0E0A 50%, #0F0704 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Premium background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D7A86E' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4
        }}></div>
        
        <div className="container position-relative">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-lg-5 col-md-7 col-sm-9">
              <div className="card border-0 shadow-2xl" style={{ 
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 245, 240, 0.95) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderRadius: '24px',
                border: '1px solid rgba(215, 168, 110, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }} data-aos="fade-up" data-aos-duration="800">
                <div className="card-body p-3 p-lg-4">
                  {/* Premium Header */}
                  <div className="text-center mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center mb-2">
                      <div style={{
                        width: '60px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #D7A86E, #8B6914)',
                        borderRadius: '2px'
                      }}></div>
                    </div>
                    <h2 className="fw-bold mb-2" style={{ 
                      color: '#2C1810',
                      fontSize: '1.8rem',
                      letterSpacing: '-0.5px'
                    }}>
                      Login LUXE
                    </h2>
                    <p className="text-muted small" style={{ fontSize: '0.9rem' }}>
                      Welcome back to our exclusive leather community
                    </p>
                  </div>
                  {/* Success/Error Messages */}
                  {loginSuccess && (
                    <div className="alert alert-success d-flex align-items-center py-2 px-3 mb-3" role="alert" style={{
                      background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
                      border: '1px solid #c3e6cb',
                      borderRadius: '12px'
                    }}>
                      <FaCheckCircle className="me-2" style={{ color: '#155724' }} />
                      <div className="small">
                        Login successful! Redirecting...
                      </div>
                    </div>
                  )}
                  
                  {errors.general && (
                    <div className="alert alert-danger d-flex align-items-center py-2 px-3 mb-3" role="alert" style={{
                      background: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
                      border: '1px solid #f5c6cb',
                      borderRadius: '12px'
                    }}>
                      <FaExclamationCircle className="me-2" style={{ color: '#721c24' }} />
                      <div className="small">
                        {errors.general}
                      </div>
                    </div>
                  )}
                  
                  {/* Compact Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label className="form-label small fw-semibold mb-1" style={{ color: '#2C1810' }}>
                        <FaUser className="me-1" style={{ color: '#D7A86E', fontSize: '0.75rem' }} />
                        Username
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${errors.username ? 'is-invalid' : ''}`}
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        autoComplete="off"
                        style={{ 
                          borderRadius: '8px',
                          border: '1px solid #e0d5c7',
                          fontSize: '0.85rem',
                          padding: '0.6rem 0.75rem'
                        }}
                      />
                      {errors.username && (
                        <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.username}</div>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="form-label small fw-semibold mb-1" style={{ color: '#2C1810' }}>
                        <FaLock className="me-1" style={{ color: '#D7A86E', fontSize: '0.75rem' }} />
                        Password
                      </label>
                      <div className="input-group input-group-sm">
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          style={{ 
                            borderRadius: '8px 0 0 8px',
                            border: '1px solid #e0d5c7',
                            fontSize: '0.85rem',
                            padding: '0.6rem 0.75rem'
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ 
                            borderRadius: '0 8px 8px 0', 
                            border: '1px solid #e0d5c7',
                            padding: '0.6rem 0.75rem'
                          }}
                        >
                          {showPassword ? <FaEyeSlash style={{ fontSize: '0.75rem' }} /> : <FaEye style={{ fontSize: '0.75rem' }} />}
                        </button>
                      </div>
                      {errors.password && (
                        <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.password}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn w-100 py-2 fw-semibold mb-2"
                        disabled={isLoading}
                        style={{
                          background: 'linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: '0.9rem',
                          color: '#ffffff',
                          boxShadow: '0 4px 15px rgba(215, 168, 110, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          if (!isLoading) {
                            e.target.style.background = 'linear-gradient(135deg, #8B6914 0%, #D7A86E 50%, #6B5610 100%)';
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(215, 168, 110, 0.4)';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (!isLoading) {
                            e.target.style.background = 'linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(215, 168, 110, 0.3)';
                          }
                        }}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" style={{ width: '1rem', height: '1rem' }}></span>
                            Logging in...
                          </>
                        ) : (
                          'Login'
                        )}
                      </button>
                      
                      <div className="d-flex gap-2 mb-2">
                        <Link to="/Sign" className="btn btn-outline-secondary w-50 py-2 fw-semibold" style={{
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          borderColor: '#D7A86E',
                          color: '#D7A86E',
                          transition: 'all 0.3s ease'
                        }} onMouseOver={(e) => {
                          e.target.style.background = '#D7A86E';
                          e.target.style.color = '#ffffff';
                        }} onMouseOut={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#D7A86E';
                        }}>
                          Sign Up
                        </Link>
                        <button
                          type="button"
                          className="btn btn-link w-50 py-2 fw-semibold text-decoration-none"
                          onClick={handleForgotPassword}
                          style={{
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            color: '#D7A86E',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Forgot Password?
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Login;
