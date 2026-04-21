









import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Footer from './Footer';

function Contact() {
  const { getCartCount } = useCart();

  // Add Bootstrap Icons CSS via CDN
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Apply custom fonts to override Bootstrap
  useEffect(() => {
    // Add custom font styles to document
    const style = document.createElement('style');
    style.textContent = `
      body, .contact-section, .contact-form, .contact-info {
        font-family: 'Montserrat', sans-serif !important;
        color: #2C1810 !important;
        line-height: 1.6 !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif !important;
        font-weight: 700 !important;
        color: #3E2723 !important;
      }
      
      .form-label, .form-control, .btn, .card-body h6, .contact-card h6 {
        font-family: 'Montserrat', sans-serif !important;
      }
      
      .contact-card p, .contact-form p, .text-muted {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 400 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(''), 5000);
    }, 1500);
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

      <br></br>
       
      
                       
      
                

      



    

     


      
                
                      
                     
          




    {/* PAGE HEADER */}
      
        <div className="container text-center position-relative">
          <h1 className="fw-bold mb-3" data-aos="fade-down">
            Get In Touch
          </h1>
          
        </div>
      

      <div className="container mb-5">
        <div className="row">
          {/* CONTACT INFORMATION */}
          <div className="col-lg-4 mb-4">
            <div className="contact-info" data-aos="fade-right">
              <h3 className="mb-4 fw-bold" style={{ color: '#3E2723' }}>Contact Information</h3>
              <p className="text-muted mb-4">
                Feel free to reach out to us through any of the following channels. We're here to help with all your leather needs.
              </p>

              {/* Contact Cards */}
              <div className="contact-card mb-3 p-4 bg-white rounded-3 shadow-sm border-0" 
                   style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 168, 110, 0.2)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1.1) rotate(5deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1) rotate(0deg)';
                   }}>
                <div className="d-flex align-items-center">
                  <div className="icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)',
                    boxShadow: '0 4px 15px rgba(215, 168, 110, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <i className="bi bi-geo-alt-fill" style={{ 
                      fontSize: '1.5rem', 
                      color: '#ffffff', 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ color: '#3E2723' }}>Address</h6>
                    <p className="mb-0 text-muted small">23 valluvar Street<br /> Tirupattur,634560</p>
                  </div>
                </div>
              </div>

              <div className="contact-card mb-3 p-4 bg-white rounded-3 shadow-sm border-0" 
                   style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 168, 110, 0.2)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1.1) rotate(5deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1) rotate(0deg)';
                   }}>
                <div className="d-flex align-items-center">
                  <div className="icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)',
                    boxShadow: '0 4px 15px rgba(215, 168, 110, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <i className="bi bi-telephone-fill" style={{ 
                      fontSize: '1.5rem', 
                      color: '#ffffff', 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ color: '#3E2723' }}>Phone</h6>
                    <p className="mb-0 text-muted small"> 9842365882<br />Mon-Fri: 9AM-6PM </p>
                  </div>
                </div>
              </div>

              <div className="contact-card mb-3 p-4 bg-white rounded-3 shadow-sm border-0" 
                   style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 168, 110, 0.2)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1.1) rotate(5deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1) rotate(0deg)';
                   }}>
                <div className="d-flex align-items-center">
                  <div className="icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)',
                    boxShadow: '0 4px 15px rgba(215, 168, 110, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <i className="bi bi-envelope-fill" style={{ 
                      fontSize: '1.5rem', 
                      color: '#ffffff', 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ color: '#3E2723' }}>Email</h6>
                    <p className="mb-0 text-muted small">luxuryluxe@.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-card mb-4 p-4 bg-white rounded-3 shadow-sm border-0" 
                   style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 168, 110, 0.2)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1.1) rotate(5deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                     const icon = e.currentTarget.querySelector('.icon-wrapper');
                     icon.style.transform = 'scale(1) rotate(0deg)';
                   }}>
                <div className="d-flex align-items-center">
                  <div className="icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)',
                    boxShadow: '0 4px 15px rgba(215, 168, 110, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <i className="bi bi-clock-fill" style={{ 
                      fontSize: '1.5rem', 
                      color: '#ffffff', 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ color: '#3E2723' }}>Business Hours</h6>
                    <p className="mb-0 text-muted small">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center">
                <h5 className="mb-4 fw-bold" style={{ color: '#3E2723' }}>Follow Us</h5>
                <div className="social-icons justify-content-center d-flex gap-3">
                  <a href="#" 
                     className="social-icon-link d-flex align-items-center justify-content-center text-decoration-none"
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       borderRadius: '50%',
                       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                       transition: 'all 0.3s ease',
                       color: '#3E2723'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #1877f2 0%, #0c63d4 100%)';
                       e.currentTarget.style.color = '#ffffff';
                       e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                       e.currentTarget.style.boxShadow = '0 6px 20px rgba(24, 119, 242, 0.4)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0) scale(1)';
                       e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                     }}>
                    <i className="bi bi-facebook" style={{ fontSize: '1.3rem' }}></i>
                  </a>
                  <a href="#" 
                     className="social-icon-link d-flex align-items-center justify-content-center text-decoration-none"
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       borderRadius: '50%',
                       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                       transition: 'all 0.3s ease',
                       color: '#3E2723'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #1da1f2 0%, #0c85d0 100%)';
                       e.currentTarget.style.color = '#ffffff';
                       e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                       e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 161, 242, 0.4)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0) scale(1)';
                       e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                     }}>
                    <i className="bi bi-twitter" style={{ fontSize: '1.3rem' }}></i>
                  </a>
                  <a href="#" 
                     className="social-icon-link d-flex align-items-center justify-content-center text-decoration-none"
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       borderRadius: '50%',
                       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                       transition: 'all 0.3s ease',
                       color: '#3E2723'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #e4405f 0%, #c13584 100%)';
                       e.currentTarget.style.color = '#ffffff';
                       e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                       e.currentTarget.style.boxShadow = '0 6px 20px rgba(228, 64, 95, 0.4)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0) scale(1)';
                       e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                     }}>
                    <i className="bi bi-instagram" style={{ fontSize: '1.3rem' }}></i>
                  </a>
                  <a href="#" 
                     className="social-icon-link d-flex align-items-center justify-content-center text-decoration-none"
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       borderRadius: '50%',
                       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                       transition: 'all 0.3s ease',
                       color: '#3E2723'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #0077b5 0%, #005885 100%)';
                       e.currentTarget.style.color = '#ffffff';
                       e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                       e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 119, 181, 0.4)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0) scale(1)';
                       e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                     }}>
                    <i className="bi bi-linkedin" style={{ fontSize: '1.3rem' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-8">
            <div className="contact-form bg-white p-4 rounded shadow-sm" data-aos="fade-left">
              <h3 className="mb-4 fw-bold" style={{ color: '#3E2723' }}>Send Us a Message</h3>
              
              {formStatus === 'success' && (
                <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                  <FaCheckCircle className="me-2" />
                  <div>
                    Thank you for your message! We'll get back to you soon.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #dee2e6',
                        borderRadius: '8px',
                        color: '#2C1810'
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #dee2e6',
                        borderRadius: '8px',
                        color: '#2C1810'
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #dee2e6',
                        borderRadius: '8px',
                        color: '#2C1810'
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">Subject *</label>
                    <select
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #dee2e6',
                        borderRadius: '8px',
                        color: '#2C1810'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Status</option>
                      <option value="custom">Custom Order</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us how we can help you..."
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #dee2e6',
                      borderRadius: '8px',
                      color: '#2C1810',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2 fw-bold"
                    disabled={isSubmitting}
                    style={{ 
                      backgroundColor: '#3E2723',
                      borderColor: '#3E2723',
                      borderRadius: '50px'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center mb-4" data-aos="fade-up">
              <h2 className="fw-bold mb-3" style={{ color: '#3E2723' }}>Frequently Asked Questions</h2>
              <p className="text-muted">Quick answers to common questions about our leather products</p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="100">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold mb-2" style={{ color: '#3E2723' }}>What types of leather do you use?</h6>
                    <p className="text-muted small mb-0">We use full-grain, top-grain, and genuine leather, all sourced from sustainable tanneries.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold mb-2" style={{ color: '#3E2723' }}>Do you offer custom orders?</h6>
                    <p className="text-muted small mb-0">Yes, we specialize in custom leather goods. Contact us with your specifications.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="300">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold mb-2" style={{ color: '#3E2723' }}>What is your return policy?</h6>
                    <p className="text-muted small mb-0">We offer a 30-day return policy for unused items in original packaging.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="400">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold mb-2" style={{ color: '#3E2723' }}>How long does shipping take?</h6>
                    <p className="text-muted small mb-0">Standard shipping takes 5-7 business days. Express options available at checkout.</p>
                  </div>
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

export default Contact;


