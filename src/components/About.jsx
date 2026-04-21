










import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

import { FaShoppingBag, FaUserTie, FaRecycle, FaStar, FaChevronLeft, FaChevronRight, FaLeaf, FaHammer, FaPaintBrush, FaCut, FaEye, FaCheckCircle } from "react-icons/fa";
import a1Image from "../assets/images/a1.jpg";
import b1Image from "../assets/images/b1.jpg";
import b8Image from "../assets/images/b8.jpg";
import c1Image from "../assets/images/c1.jpg";
import m1Image from "../assets/images/m1.jpg";
import m2Image from "../assets/images/m2.jpg";
import m3Image from "../assets/images/m3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import Footer from './Footer';




function About() {
  const { getCartCount } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

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
  
  const images = [
    { src: a1Image, alt: "Premium Leather Bag" },
    { src: b1Image, alt: "Leather Wallet" },
    { src: b8Image, alt: "Leather Belt" },
    { src: c1Image, alt: "Leather Jacket" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  useEffect(() => {
    const targetCount = 9000;
    const duration = 2000; // 2 seconds
    const increment = targetCount / (duration / 16); // 60fps
    let currentCount = 0;

    const counter = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setProjectCount(targetCount);
        clearInterval(counter);
      } else {
        setProjectCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(counter);
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

      <br></br>
       
      
                       
      
                

      



    

     


      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="hero-content">
                <h3>Transform Your Style with Our Expert Leather Craftsmanship</h3>
                <p className="tagline">Genuine Leather. Timeless Style.</p>
                <p className="about-description">
                  We specialize in premium leather products including bags, wallets, belts, and jackets. 
                  Every product is designed to last and improve with age, giving you both durability and elegance.
                </p>
                
                <div className="features-list">
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Expert & Professional</span>
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Premium Quality Materials</span>
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Satisfaction Guarantee</span>
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Handcrafted Excellence</span>
                  </div>
                </div>
                
                <div className="hero-buttons">
                  <Link to="/shop" className="btn btn-primary">
                    Get A Quote
                  </Link>
                  <Link to="/about" className="btn btn-outline-dark">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-images-layout">
                <div className="main-image-wrapper">
                  <div className="main-image-container">
                    <img
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      className="main-image img-fluid rounded shadow"
                    />
                    <div className="stats-badge">
                      <span className="stats-number">{projectCount >= 9000 ? '9k+' : `${Math.floor(projectCount / 1000)}k+`}</span>
                      <span className="stats-text">Complete Projects</span>
                    </div>
                    <button 
                      className="switcher-btn prev-btn" 
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>
                    <button 
                      className="switcher-btn next-btn" 
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
                <div className="side-images">
                  <div className="secondary-image-container">
                    <img
                      src={images[(currentImageIndex + 1) % images.length].src}
                      alt={images[(currentImageIndex + 1) % images.length].alt}
                      className="secondary-image img-fluid rounded shadow"
                    />
                  </div>
                  <div className="tertiary-image-container">
                    <img
                      src={images[(currentImageIndex + 2) % images.length].src}
                      alt={images[(currentImageIndex + 2) % images.length].alt}
                      className="tertiary-image img-fluid rounded shadow"
                    />
                  </div>
                </div>
                <div className="image-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEATHER TYPES (UNIQUE SECTION) */}
      <section className="leather-types">
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: `url(${c1Image})`
          }}
        />
        <div className="container text-center">
          <h2 className="mb-5">Types of Leather We Use</h2>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
              <div className="leather-card h-100">
                <h4>Full-Grain Leather</h4>
                <p>Highest quality leather known for strength and natural texture.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
              <div className="leather-card h-100">
                <h4>Top-Grain Leather</h4>
                <p>Smooth finish with durability and premium appearance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-12" data-aos="fade-up" data-aos-delay="200">
              <div className="leather-card h-100">
                <h4>Genuine Leather</h4>
                <p>Affordable and stylish leather for everyday use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFTING PROCESS */}
      <section className="crafting-process-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Crafting Process</h2>
            <p className="section-subtitle">Handcrafted with precision and passion</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="craft-card">
                <div className="craft-icon-wrapper">
                  <div className="craft-icon">
                    <FaLeaf />
                  </div>
                  <div className="craft-number">01</div>
                </div>
                <div className="craft-content">
                  <h4>Ethical Sourcing</h4>
                  <p>Premium leather hides from sustainable tanneries</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="craft-card">
                <div className="craft-icon-wrapper">
                  <div className="craft-icon">
                    <FaHammer />
                  </div>
                  <div className="craft-number">02</div>
                </div>
                <div className="craft-content">
                  <h4>Traditional Tanning</h4>
                  <p>Time-honored vegetable tanning techniques</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="craft-card">
                <div className="craft-icon-wrapper">
                  <div className="craft-icon">
                    <FaPaintBrush />
                  </div>
                  <div className="craft-number">03</div>
                </div>
                <div className="craft-content">
                  <h4>Artistic Design</h4>
                  <p>Modern patterns with timeless craftsmanship</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="craft-card">
                <div className="craft-icon-wrapper">
                  <div className="craft-icon">
                    <FaCut />
                  </div>
                  <div className="craft-number">04</div>
                </div>
                <div className="craft-content">
                  <h4>Precision Cutting</h4>
                  <p>Meticulously hand-cut by skilled artisans</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="craft-card">
                <div className="craft-icon-wrapper">
                  <div className="craft-icon">
                    <FaEye />
                  </div>
                  <div className="craft-number">05</div>
                </div>
                <div className="craft-content">
                  <h4>Expert Stitching</h4>
                  <p>Traditional hand-stitching techniques</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="craft-card">
                <div className="craft-icon-wrapper">
                  <div className="craft-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="craft-number">06</div>
                </div>
                <div className="craft-content">
                  <h4>Quality Assurance</h4>
                  <p>Rigorous inspection for premium quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <h2 className="text-center mb-5">Why Our Leather?</h2>

          <div className="row">

            <div className="col-md-3" data-aos="fade-up">
              <div className="why-card">
                <FaShoppingBag className="icon" />
                <h5>Premium Products</h5>
                <p>Bags, wallets & accessories crafted to perfection.</p>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up">
              <div className="why-card">
                <FaUserTie className="icon" />
                <h5>Expert Craftsmanship</h5>
                <p>Handmade by experienced artisans.</p>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up">
              <div className="why-card">
                <FaRecycle className="icon" />
                <h5>Sustainable</h5>
                <p>Eco-friendly leather processing.</p>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up">
              <div className="why-card">
                <FaStar className="icon" />
                <h5>Long Lasting</h5>
                <p>Products that age beautifully over time.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title fw-bold mb-3" style={{ color: '#3E2723' }}>Our Team</h2>
            <p className="section-subtitle text-muted">Meet the talented artisans behind our leather craftsmanship</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-card text-center">
                <div className="team-image-wrapper mb-4">
                  <img 
                    src={m1Image} 
                    alt="Team Member 1" 
                    className="team-image"
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #D7A86E',
                      boxShadow: '0 8px 25px rgba(215, 168, 110, 0.3)',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h4 className="team-name fw-bold mb-2" style={{ color: '#3E2723' }}>Mariya</h4>
                <p className="team-role text-muted mb-3">Master Leather Craftsman</p>
                
                <div className="team-social-links d-flex justify-content-center gap-3">
                  <a href="#" className="social-link text-decoration-none" 
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#1877f2';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-facebook fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#1da1f2';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#e4405f';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-instagram fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#0077b5';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-card text-center">
                <div className="team-image-wrapper mb-4">
                  <img 
                    src={m2Image} 
                    alt="Team Member 2" 
                    className="team-image"
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #D7A86E',
                      boxShadow: '0 8px 25px rgba(215, 168, 110, 0.3)',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h4 className="team-name fw-bold mb-2" style={{ color: '#3E2723' }}>Sophia </h4>
                <p className="team-role text-muted mb-3">Lead Designer</p>
                
                <div className="team-social-links d-flex justify-content-center gap-3">
                  <a href="#" className="social-link text-decoration-none" 
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#1877f2';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-facebook fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#1da1f2';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#e4405f';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-instagram fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#0077b5';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team-card text-center">
                <div className="team-image-wrapper mb-4">
                  <img 
                    src={m3Image} 
                    alt="Team Member 3" 
                    className="team-image"
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #D7A86E',
                      boxShadow: '0 8px 25px rgba(215, 168, 110, 0.3)',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h4 className="team-name fw-bold mb-2" style={{ color: '#3E2723' }}>Jhon</h4>
                <p className="team-role text-muted mb-3">Quality Control Expert</p>
                
                <div className="team-social-links d-flex justify-content-center gap-3">
                  <a href="#" className="social-link text-decoration-none" 
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#1877f2';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-facebook fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#1da1f2';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#e4405f';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-instagram fs-5"></i>
                  </a>
                  <a href="#" className="social-link text-decoration-none"
                     style={{ 
                       color: '#3E2723',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.currentTarget.style.color = '#0077b5';
                       e.currentTarget.style.transform = 'translateY(-3px)';
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.color = '#3E2723';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Upgrade Your Style with Leather</h2>
          <p>Shop premium leather products today.</p>
          <Link to="/shop" className="btn btn-light mt-3">
            Shop Now
          </Link>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default About;


