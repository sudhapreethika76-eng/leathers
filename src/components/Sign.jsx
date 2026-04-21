

















import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Footer from './Footer';

function Sign() {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    agreeToTerms: false
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  
  // Password strength
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  
  // Check password strength
  useEffect(() => {
    if (formData.password) {
      let strength = 0;
      if (formData.password.length >= 8) strength++;
      if (formData.password.match(/[a-z]/)) strength++;
      if (formData.password.match(/[A-Z]/)) strength++;
      if (formData.password.match(/[0-9]/)) strength++;
      if (formData.password.match(/[^a-zA-Z0-9]/)) strength++;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [formData.password]);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 3) {
      newErrors.password = 'Password is too weak. Include uppercase, lowercase, numbers, and special characters';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store user data (in real app, this would be sent to backend)
      const userData = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      
      // Store in localStorage (temporary solution)
      localStorage.setItem('user', JSON.stringify(userData));
      
      setSignupSuccess(true);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get password strength color
  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'danger';
    if (passwordStrength <= 3) return 'warning';
    return 'success';
  };
  
  // Get password strength text
  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };
  
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
                  <span className="position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger" style={{transform: 'translate(25%, -50%)'}}>
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

      {/* SIGNUP HERO SECTION */}
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
                      Signup LUXE
                    </h2>
                    <p className="text-muted small" style={{ fontSize: '0.9rem' }}>
                      Join our exclusive leather community
                    </p>
                  </div>
                  
                  {/* Success/Error Messages */}
                  {signupSuccess && (
                    <div className="alert alert-success d-flex align-items-center py-2 px-3 mb-3" role="alert" style={{
                      background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
                      border: '1px solid #c3e6cb',
                      borderRadius: '12px'
                    }}>
                      <FaCheckCircle className="me-2" style={{ color: '#155724' }} />
                      <div className="small">
                        Account created! Redirecting...
                      </div>
                    </div>
                  )}
                  
                  {errors.submit && (
                    <div className="alert alert-danger d-flex align-items-center py-2 px-3 mb-3" role="alert" style={{
                      background: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
                      border: '1px solid #f5c6cb',
                      borderRadius: '12px'
                    }}>
                      <FaExclamationCircle className="me-2" style={{ color: '#721c24' }} />
                      <div className="small">
                        {errors.submit}
                      </div>
                    </div>
                  )}
                  
                  {/* Compact Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="row g-2 mb-2">
                      <div className="col-6">
                        <label className="form-label small fw-semibold mb-1" style={{ color: '#2C1810' }}>
                          <FaUser className="me-1" style={{ color: '#D7A86E', fontSize: '0.75rem' }} />
                          First Name
                        </label>
                        <input
                          type="text"
                          className={`form-control form-control-sm ${errors.firstName ? 'is-invalid' : ''}`}
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          style={{ 
                            borderRadius: '8px',
                            border: '1px solid #e0d5c7',
                            fontSize: '0.85rem',
                            padding: '0.6rem 0.75rem'
                          }}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.firstName}</div>
                        )}
                      </div>
                      
                      <div className="col-6">
                        <label className="form-label small fw-semibold mb-1" style={{ color: '#2C1810' }}>
                          <FaUser className="me-1" style={{ color: '#D7A86E', fontSize: '0.75rem' }} />
                          Last Name
                        </label>
                        <input
                          type="text"
                          className={`form-control form-control-sm ${errors.lastName ? 'is-invalid' : ''}`}
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          style={{ 
                            borderRadius: '8px',
                            border: '1px solid #e0d5c7',
                            fontSize: '0.85rem',
                            padding: '0.6rem 0.75rem'
                          }}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.lastName}</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <label className="form-label small fw-semibold mb-1" style={{ color: '#2C1810' }}>
                        <FaEnvelope className="me-1" style={{ color: '#D7A86E', fontSize: '0.75rem' }} />
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={{ 
                          borderRadius: '8px',
                          border: '1px solid #e0d5c7',
                          fontSize: '0.85rem',
                          padding: '0.6rem 0.75rem'
                        }}
                      />
                      {errors.email && (
                        <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.email}</div>
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
                          placeholder="Create password"
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
                      
                      {/* Compact Password Strength */}
                      {formData.password && (
                        <div className="mt-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted" style={{ fontSize: '0.7rem' }}>Strength:</small>
                            <small className={`text-${getPasswordStrengthColor()} fw-semibold`} style={{ fontSize: '0.7rem' }}>
                              {getPasswordStrengthText()}
                            </small>
                          </div>
                          <div className="progress" style={{ height: '3px' }}>
                            <div
                              className={`progress-bar bg-${getPasswordStrengthColor()}`}
                              role="progressbar"
                              style={{ width: `${(passwordStrength / 5) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-2">
                      <label className="form-label small fw-semibold mb-1" style={{ color: '#2C1810' }}>
                        <FaLock className="me-1" style={{ color: '#D7A86E', fontSize: '0.75rem' }} />
                        Confirm
                      </label>
                      <div className="input-group input-group-sm">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
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
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          style={{ 
                            borderRadius: '0 8px 8px 0', 
                            border: '1px solid #e0d5c7',
                            padding: '0.6rem 0.75rem'
                          }}
                        >
                          {showConfirmPassword ? <FaEyeSlash style={{ fontSize: '0.75rem' }} /> : <FaEye style={{ fontSize: '0.75rem' }} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.confirmPassword}</div>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className={`form-check-input ${errors.agreeToTerms ? 'is-invalid' : ''}`}
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          style={{ 
                            borderColor: '#D7A86E',
                            borderRadius: '4px'
                          }}
                        />
                        <label className="form-check-label small" style={{ color: '#2C1810' }}>
                          I agree to <a href="#" className="text-decoration-none" style={{ color: '#D7A86E' }}>Terms</a> & <a href="#" className="text-decoration-none" style={{ color: '#D7A86E' }}>Privacy</a>
                        </label>
                      </div>
                      {errors.agreeToTerms && (
                        <div className="invalid-feedback" style={{ fontSize: '0.75rem' }}>{errors.agreeToTerms}</div>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="btn w-100 py-2 fw-semibold mb-2"
                      disabled={isSubmitting}
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
                        e.target.style.background = 'linear-gradient(135deg, #8B6914 0%, #D7A86E 50%, #6B5610 100%)';
                        e.target.style.transform = 'translateY(-1px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(215, 168, 110, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(215, 168, 110, 0.3)';
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" style={{ width: '1rem', height: '1rem' }}></span>
                          Creating...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                    
                    <div className="text-center">
                      <p className="mb-0 small" style={{ color: '#2C1810' }}>
                        Already have an account? <Link to="/login" className="text-decoration-none fw-semibold" style={{ color: '#D7A86E' }}>Sign In</Link>
                      </p>
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

export default Sign;
