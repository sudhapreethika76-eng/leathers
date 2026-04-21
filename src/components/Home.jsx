import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

import c1Image from "../assets/images/c1.jpg";
import s1Image from "../assets/images/s1.jpg";
import s2Image from "../assets/images/s2.jpg";
import s3Image from "../assets/images/s3.jpg";
import s4Image from "../assets/images/s4.jpg";
import b1Image from "../assets/images/b1.jpg";
import b2Image from "../assets/images/b2.jpg";
import b3Image from "../assets/images/b3.jpg";
import b4Image from "../assets/images/b4.jpg";
import b5Image from "../assets/images/b5.jpg";
import b6Image from "../assets/images/b6.jpg";
import b7Image from "../assets/images/b7.jpg";
import t1Image from "../assets/images/t1.jpg";
import t2Image from "../assets/images/t2.jpg";
import t3Image from "../assets/images/t3.jpg";
import Footer from "./Footer";

function Home() {
  const categoryRefs = useRef([]);
  const [products, setProducts] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart, getCartCount } = useCart();

  const addToWishlist = (product) => {
    const existingItem = wishlist.find(item => item.id === product.id);
    if (existingItem) {
      return;
    }
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 8);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 8) % 8);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    fetch("https://theleatherchef.in/products/manhattan-ikat-office-tote")
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .catch(err => {
        console.log(err);
        setProducts([]); // Set empty array on error
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

      {/* HERO */}
      <section style={heroStyle}>
        <div style={overlayStyle}>
          <div className="hero-content" style={heroContentStyle}>
            <h1 className="hero-title" >
              Premium Leather Products
            </h1>
            <p className="hero-subtitle" style={heroSubtitleStyle}>
              Crafted with style. Designed to last.
            </p>
            <Link to="/Shop">
              <button className="btn btn-hero mt-4" style={heroButtonStyle}>
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="container mt-5" style={{padding: "60px 30px", borderRadius: "15px"}}>
        <h2 className="text-center mb-5" style={{fontSize: "2.5rem", fontWeight: "700", color: "#3E2723", fontFamily: "'Georgia', serif"}}>Our Categories</h2>
        <div className="row justify-content-center g-4">
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className="category-item text-center">
              <div className="category-circle" style={categoryCircleStyle}>
                <img src={s1Image} alt="BAG" style={categoryCircleImageStyle} className="category-zoom-in" />
              </div>
              <h5 style={categoryTextStyle} className="category-fade-up">Bag</h5>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className="category-item text-center">
              <div className="category-circle" style={categoryCircleStyle}>
                <img src={s2Image} alt="WALLET" style={categoryCircleImageStyle} className="category-zoom-in" />
              </div>
              <h5 style={categoryTextStyle} className="category-fade-up">Wallet</h5>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className="category-item text-center">
              <div className="category-circle" style={categoryCircleStyle}>
                <img src={s3Image} alt="BELT" style={categoryCircleImageStyle} className="category-zoom-in" />
              </div>
              <h5 style={categoryTextStyle} className="category-fade-up">Belt</h5>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className="category-item text-center">
              <div className="category-circle" style={categoryCircleStyle}>
                <img src={s4Image} alt="SHOE" style={categoryCircleImageStyle} className="category-zoom-in" />
              </div>
              <h5 style={categoryTextStyle} className="category-fade-up">Shoe</h5>
            </div>
          </div>
          
    
        </div>
      </div>

      {/* BEST SELLERS */}
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-5" style={{fontSize: "2.5rem", fontWeight: "700", color: "#3E2723", fontFamily: "'Georgia', serif"}}>Best Sellers</h2>
        
        <div className="best-sellers-carousel" style={carouselContainerStyle}>
          
          {/* Carousel Track */}
          <div className="carousel-track" style={carouselTrackStyle}>
            {[
              { id: 1, name: "Classic Leather Bag", price: "₹12,999", image: b1Image, rating: 5 },
              { id: 2, name: "Premium Wallet", price: "₹4,999", image: b2Image, rating: 4 },
              { id: 3, name: "Genuine Belt", price: "₹3,499", image: b3Image, rating: 5 },
              { id: 4, name: "Leather Wallet", price: "₹8,999", image: b4Image, rating: 4 },
              { id: 5, name: "Designer Belt", price: "₹15,999", image: b5Image, rating: 5 },
              { id: 6, name: "Leather Shoe", price: "₹7,999", image: b6Image, rating: 4 },
              { id: 7, name: "Classic Wallet", price: "₹2,999", image: b7Image, rating: 5 }
            ]
            .filter((product, index) => {
              // Page 1: Show first 4 products (indices 0-3)
              // Page 2: Show next 3 products (indices 4-6)
              if (currentSlide === 0) {
                return index < 4;
              } else {
                return index >= 4;
              }
            })
            .map((product, index) => (
              <div key={product.id} className="carousel-product-card" style={carouselProductCardStyle}>
                <div className="product-image-container" style={productImageContainerStyle}>
                  <img src={product.image} alt={product.name} style={carouselProductImageStyle} />
                  <div className="product-actions" style={productActionsStyle}>
                    <button 
                      style={actionButtonStyle} 
                      onClick={() => addToCart(product)}
                      title="Add to Cart"
                    >🛒</button>
                    <button 
                      style={actionButtonStyle} 
                      onClick={() => addToWishlist(product)}
                      title="Add to Wishlist"
                    >❤️</button>
                    
                  </div>
                </div>
                <div className="product-info" style={productInfoStyle}>
                  <h6 style={productNameStyle}>{product.name}</h6>
                  <p style={productPriceStyle}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Controls */}
          <div style={{display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px"}}>
            <button 
              onClick={() => setCurrentSlide(0)}
              style={{
                background: currentSlide === 0 ? "#D4AF37" : "#3E2723",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >← Previous</button>
            
            {[0, 1].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  background: currentSlide === index ? "#D4AF37" : "#3E2723",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >{index + 1}</button>
            ))}
            
            <button 
              onClick={() => setCurrentSlide(1)}
              style={{
                background: currentSlide === 1 ? "#D4AF37" : "#3E2723",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >Next →</button>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="container-fluid mt-5 mb-5" style={{padding: "80px 0"}}>
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up" style={{fontSize: "2.5rem", fontWeight: "700", color: "#3E2723", fontFamily: "'Georgia', serif", textTransform: "uppercase", letterSpacing: "3px"}}>What Our Customers Say</h2>
          <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200" style={{fontSize: "1.1rem", color: "#D4AF37", fontFamily: "'Arial', sans-serif", fontStyle: "italic"}}>Real experiences from real leather enthusiasts</p>
          
          <div className="row g-4">
            {[
              {
                id: 1,
                name: "Sarah Johnson",
                location: "Mumbai, India",
                image: t1Image,
                rating: 5,
                testimonial: "Absolutely love my leather bag! The craftsmanship is exceptional and it's perfect for my daily office commute. Worth every penny!",
                product: "Classic Leather Bag"
              },
              {
                id: 2,
                name: "Raj ",
                location: "Delhi, India", 
                image: t2Image,
                rating: 5,
                testimonial: "The quality is outstanding! I've been using this wallet for 6 months and it still looks brand new. The leather ages beautifully.",
                product: "Premium Wallet"
              },
              {
                id: 3,
                name: "Preshika",
                location: "Bangalore, India",
                image: t3Image,
                rating: 4,
                testimonial: "Best purchase I've made this year! The attention to detail is amazing and customer service was exceptional. Highly recommend!",
                product: "Designer Handbag"
              }
            ].map((testimonial, index) => (
              <div key={testimonial.id} className="col-12 col-md-4" data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
                <div className="testimonial-card" style={testimonialCardStyle}>
                  <div className="testimonial-header" style={testimonialHeaderStyle}>
                    <div className="customer-image" style={customerImageStyle}>
                      <img src={testimonial.image} alt={testimonial.name} style={customerImgStyle} />
                    </div>
                    <div className="customer-info" style={customerInfoStyle}>
                      <h5 style={customerNameStyle}>{testimonial.name}</h5>
                      <p style={customerLocationStyle}>{testimonial.location}</p>
                      <div className="rating" style={ratingContainerStyle}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} style={starStyle}>{"\u2605"}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-content" style={testimonialContentStyle}>
                    <div className="quote-icon" style={quoteIconStyle}>"</div>
                    <p style={testimonialTextStyle}>{testimonial.testimonial}</p>
                    <div className="product-tag" style={productTagStyle}>
                      <span style={productTagTextStyle}>Purchased: {testimonial.product}</span>
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>

      <Footer />

    </>
  );
}

export default Home;





/* Inline styles (no CSS file error now) */
const heroStyle = {
  height: "80vh",
  backgroundImage: `url(${c1Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const overlayStyle = {
  color: "white",
  padding: "30px",
  textAlign: "center",
};

const heroContentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const heroTitleStyle = {
  fontSize: "3.5rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  textTransform: "uppercase",
  letterSpacing: "3px",
  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  animation: "fadeInDown 1.5s ease-out",
  fontFamily: "'Georgia', serif",
};

const heroSubtitleStyle = {
  fontSize: "1.3rem",
  fontWeight: "300",
  marginBottom: "2rem",
  textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
  animation: "fadeInUp 1.5s ease-out 0.5s both",
  fontFamily: "'Georgia', serif",
  fontStyle: "italic",
};

const heroButtonStyle = {
  padding: "15px 40px",
  fontSize: "1.1rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "2px",
  backgroundColor: "#D4AF37",
  borderColor: "#D4AF37",
  color: "#000",
  borderRadius: "0",
  transition: "all 0.3s ease",
  animation: "fadeInUp 1.5s ease-out 1s both",
  boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
};

const categoryCardStyle = {
  borderRadius: "15px",
  boxShadow: "0 8px 25px rgba(62,39,35,0.2), 0 4px 12px rgba(0,0,0,0.1)",
  transition: "all 0.4s ease",
  animation: "fadeInUp 1.5s ease-out 0.3s both",
  cursor: "pointer",
  height: "280px",
  position: "relative",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",
};

const categoryImageWrapperStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const categoryImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "scale(1)",
  filter: "contrast(1.1) saturate(1.2)",
};

const categoryOverlayStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "rgba(62, 39, 35, 0.95)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: "0",
  transition: "all 0.3s ease",
  transform: "translateY(10px)",
  backdropFilter: "blur(8px)",
};

const categoryNameStyle = {
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "600",
  textTransform: "lowercase",
  letterSpacing: "2px",
  fontFamily: "'Arial', sans-serif",
  textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4)",
  transform: "translateY(0) scale(1)",
  transition: "all 0.3s ease",
  position: "relative",
  zIndex: "10",
  whiteSpace: "nowrap",
  lineHeight: "1",
};

// Circular Category Styles
const categoryCircleStyle = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  margin: "0 auto 20px auto",
  border: "4px solid #fff",
  boxShadow: "0 8px 25px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  backgroundColor: "#f8f9fa",
  animation: "floatAnimation 3s ease-in-out infinite",
  position: "relative",
  overflow: "hidden"
};

const categoryCircleImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const categoryTextStyle = {
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "#3E2723",
  margin: "0",
  fontFamily: "'Arial', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "all 0.3s ease",
};

// Carousel Styles
const carouselContainerStyle = {
  position: "relative",
  width: "100%",
  padding: "30px 0",
};

const carouselTrackStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  padding: "10px",
  width: "100%",
};

const carouselProductCardStyle = {
  minWidth: "300px",
  maxWidth: "300px",
  marginRight: "25px",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  borderRadius: "15px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.12), 0 4px 15px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  border: "1px solid rgba(0,0,0,0.08)",
  position: "relative",
};

const productImageContainerStyle = {
  position: "relative",
  width: "100%",
  height: "300px",
  backgroundColor: "#f8f9fa",
};

const carouselProductImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 0.3s ease",
};

const productActionsStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  opacity: "0",
  transition: "all 0.3s ease",
};

const actionButtonStyle = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

const productInfoStyle = {
  padding: "15px",
  textAlign: "center",
};

const productNameStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#333",
  marginBottom: "8px",
  fontFamily: "'Arial', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const productPriceStyle = {
  fontSize: "1.1rem",
  fontWeight: "700",
  color: "#000",
  margin: "0",
  fontFamily: "'Arial', sans-serif",
};

// Testimonial Styles
const testimonialCardStyle = {
  background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%)",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(212,175,55,0.2)",
  height: "100%",
  position: "relative",
};

const testimonialHeaderStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const customerImageStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  marginRight: "20px",
  border: "3px solid #D4AF37",
  boxShadow: "0 4px 15px rgba(212,175,55,0.3)",
};

const customerImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
};

const customerInfoStyle = {
  flex: 1,
};

const customerNameStyle = {
  margin: "0",
  fontSize: "1.2rem",
  fontWeight: "700",
  color: "#3E2723",
  fontFamily: "'Georgia', serif",
};

const customerLocationStyle = {
  margin: "5px 0",
  color: "#666",
  fontSize: "0.9rem",
  fontFamily: "'Arial', sans-serif",
};

const ratingContainerStyle = {
  display: "flex",
  gap: "2px",
};

const starStyle = {
  color: "#D4AF37",
  fontSize: "1rem",
  textShadow: "0 0 5px rgba(212,175,55,0.5)",
};

const testimonialContentStyle = {
  position: "relative",
  padding: "20px 0",
};

const quoteIconStyle = {
  fontSize: "4rem",
  color: "rgba(212,175,55,0.2)",
  position: "absolute",
  top: "-10px",
  left: "-10px",
  fontFamily: "'Georgia', serif",
  lineHeight: "1",
};

const testimonialTextStyle = {
  margin: "0 0 20px 0",
  fontSize: "1rem",
  lineHeight: "1.6",
  color: "#333",
  fontStyle: "italic",
  fontFamily: "'Georgia', serif",
  position: "relative",
  zIndex: 1,
};

const productTagStyle = {
  background: "rgba(212,175,55,0.1)",
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: "20px",
  padding: "8px 15px",
  display: "inline-block",
};

const productTagTextStyle = {
  fontSize: "0.85rem",
  color: "#3E2723",
  fontWeight: "600",
  fontFamily: "'Arial', sans-serif",
};

const testimonialFooterStyle = {
  marginTop: "20px",
  paddingTop: "15px",
  borderTop: "1px solid rgba(0,0,0,0.1)",
};

const verifiedBadgeStyle = {
  background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
  color: "white",
  padding: "5px 12px",
  borderRadius: "15px",
  display: "inline-block",
  fontSize: "0.75rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
  boxShadow: "0 2px 8px rgba(40,167,69,0.3)",
};

const verifiedTextStyle = {
  fontFamily: "'Arial', sans-serif",
};

const testimonialButtonStyle = {
  background: "#D4AF37",
  color: "#000",
  border: "none",
  padding: "15px 35px",
  fontSize: "1rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "2px",
  borderRadius: "0",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(212,175,55,0.3)",
  fontFamily: "'Arial', sans-serif",
};

// Best Sellers Styles
const bestSellerCardStyle = {
  borderRadius: "15px",
  boxShadow: "0 8px 25px rgba(62,39,35,0.15), 0 4px 12px rgba(0,0,0,0.1)",
  transition: "all 0.4s ease",
  animation: "fadeInUp 1.5s ease-out 0.6s both",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const bestSellerImageWrapperStyle = {
  position: "relative",
  width: "100%",
  height: "250px",
  backgroundColor: "#f8f9fa",
};

const bestSellerImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "scale(1)",
};

const bestSellerOverlayStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "rgba(62, 39, 35, 0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: "0",
  transition: "all 0.3s ease",
  transform: "translateY(10px)",
  backdropFilter: "blur(5px)",
};

const bestSellerTitleStyle = {
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#3E2723",
  marginBottom: "0.5rem",
  fontFamily: "'Georgia', serif",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const bestSellerPriceStyle = {
  fontSize: "1.3rem",
  fontWeight: "700",
  color: "#D4AF37",
  marginBottom: "0.5rem",
  fontFamily: "'Arial', sans-serif",
};

const ratingStyle = {
  color: "#D4AF37",
  fontSize: "1rem",
  letterSpacing: "2px",
};

const addToCartStyle = {
  backgroundColor: "#3E2723",
  borderColor: "#3E2723",
  borderRadius: "0",
  padding: "10px 20px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "all 0.3s ease",
  fontFamily: "'Arial', sans-serif",
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .btn-hero:hover {
    background-color: #B8941F !important;
    border-color: #B8941F !important;
    color: #fff !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4) !important;
  }
  
  .hero-title:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
  
  .category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
  
  .category-card:hover .category-image-wrapper img {
    transform: scale(1.08);
    filter: brightness(0.7) blur(5px);
  }
  
  .category-card:hover .category-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .category-card:hover .category-overlay h3 {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
  
  .category-image-wrapper:hover .category-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .category-image-wrapper:hover .category-overlay h3 {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
  
  .best-seller-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(62,39,35,0.25), 0 8px 20px rgba(0,0,0,0.15);
  }
  
  .best-seller-card:hover .best-seller-image-wrapper img {
    transform: scale(1.1);
    filter: brightness(0.8);
  }
  
  .best-seller-card:hover .best-seller-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .best-seller-image-wrapper:hover .best-seller-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .best-seller-card:hover button.btn-dark {
    background-color: #D4AF37 !important;
    border-color: #D4AF37 !important;
    color: #000 !important;
    transform: translateY(-2px);
  }
  
  .category-circle:hover {
    transform: scale(1.2) rotate(8deg);
    box-shadow: 0 20px 40px rgba(62,39,35,0.5);
    animation-play-state: paused;
    border-color: #D7A86E;
  }
  
  .category-circle:hover img {
    transform: scale(1.2);
    filter: brightness(1.1) contrast(1.2);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .category-item:hover h5 {
    color: #D4AF37 !important;
    transform: translateY(-3px) scale(1.05);
    text-shadow: 0 2px 8px rgba(212,175,55,0.3);
  }
  
  .category-item {
    animation: fadeInUp 1.5s ease-out 0.3s both;
  }
  
  .category-item:nth-child(1) {
    animation-delay: 0.3s;
  }
  
  .category-item:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  .category-item:nth-child(3) {
    animation-delay: 0.7s;
  }
    25% {
      transform: translateY(-10px) rotate(2deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    75% {
      transform: translateY(-5px) rotate(-1deg);
    }
  }
  
  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    50% {
      box-shadow: 0 8px 25px rgba(62,39,35,0.3);
    }
  }
  
  @keyframes autoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .carousel-product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .carousel-product-card:hover .product-actions {
    opacity: 1 !important;
  }
  
  .carousel-product-card:hover img {
    transform: scale(1.05);
    filter: brightness(0.9);
  }
  
  .carousel-product-card:hover .action-button {
    background-color: #3E2723 !important;
    color: #fff !important;
    transform: scale(1.1);
  }
  
  .best-sellers-carousel:hover .carousel-track {
    animation-play-state: paused;
  }
  
  @media (max-width: 768px) {
    .category-card {
      height: 200px;
    }
    
    .category-overlay h3 {
      font-size: 1.4rem !important;
    }
    
    .best-seller-image-wrapper {
      height: 200px;
    }
    
    .category-circle {
      width: 100px;
      height: 100px;
    }
    
    .btn-hero {
      padding: 12px 25px !important;
      font-size: 0.9rem !important;
      letter-spacing: 1px !important;
      min-width: 120px;
    }
  }
  
  @media (max-width: 576px) {
    .btn-hero {
      padding: 10px 20px !important;
      font-size: 0.85rem !important;
      letter-spacing: 0.5px !important;
      min-width: 100px;
    
    .product-image-container {
      height: 280px;
    }
    
    .carousel-product-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #D4AF37 0%, #3E2723 50%, #D4AF37 100%);
      border-radius: 15px 15px 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .carousel-product-card:hover::before {
      opacity: 1;
    }
    
    .carousel-product-card::after {
      content: '✨ NEW';
      position: absolute;
      top: 10px;
      left: 10px;
      background: #D4AF37;
      color: #fff;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 700;
      opacity: 0;
      transform: rotate(-15deg);
      transition: all 0.3s ease;
    }
    
    .carousel-product-card:hover::after {
      opacity: 1;
      transform: rotate(0deg) scale(1.1);
    }
  }
  
  @media (max-width: 1200px) {
    .carousel-product-card {
      min-width: 260px;
      max-width: 300px;
    }
    
    .product-image-container {
      height: 260px;
    }
  }
  
  @media (max-width: 992px) {
    .carousel-product-card {
      min-width: 240px;
      max-width: 280px;
    }
    
    .product-image-container {
      height: 240px;
    }
  }
  
  @media (max-width: 768px) {
    .carousel-product-card {
      min-width: 220px;
      max-width: 250px;
      margin-right: 15px;
    }
    
    .product-image-container {
      height: 220px;
    }
    
    .carousel-container {
      padding: 20px 0;
    }
  }
  
  @media (max-width: 576px) {
    .carousel-product-card {
      min-width: 200px;
      max-width: 220px;
      margin-right: 12px;
    }
    
    .product-image-container {
      height: 200px;
    }
    
    .carousel-container {
      padding: 15px 0;
      border-radius: 15px;
    }
  }
  
  // Testimonial Styles
  .testimonial-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%);
    border-radius: "20px";
    padding: "30px";
    box-shadow: "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)";
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    border: "1px solid rgba(212,175,55,0.2)";
    height: "100%";
    position: "relative";
    overflow: "hidden";
  }
  
  .testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #D4AF37 0%, #3E2723 50%, #D4AF37 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .testimonial-card:hover::before {
    opacity: 1;
  }
  
  .testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .testimonial-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .customer-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    border: 3px solid #D4AF37;
    box-shadow: 0 4px 15px rgba(212,175,55,0.3);
  }
  
  .customer-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .customer-image:hover img {
    transform: scale(1.1);
  }
  
  .customer-info h5 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #3E2723;
    font-family: 'Georgia', serif;
  }
  
  .customer-info p {
    margin: 5px 0;
    color: #666;
    font-size: 0.9rem;
    font-family: 'Arial', sans-serif;
  }
  
  .rating {
    display: flex;
    gap: 2px;
  }
  
  .rating span {
    color: #D4AF37;
    font-size: 1rem;
    text-shadow: 0 0 5px rgba(212,175,55,0.5);
  }
  
  .testimonial-content {
    position: relative;
    padding: 20px 0;
  }
  
  .quote-icon {
    font-size: 4rem;
    color: rgba(212,175,55,0.2);
    position: absolute;
    top: -10px;
    left: -10px;
    font-family: 'Georgia', serif;
    line-height: 1;
  }
  
  .testimonial-content p {
    margin: 0 0 20px 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    font-style: italic;
    font-family: 'Georgia', serif;
    position: relative;
    z-index: 1;
  }
  
  .product-tag {
    background: rgba(212,175,55,0.1);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 20px;
    padding: 8px 15px;
    display: inline-block;
  }
  
  .product-tag span {
    font-size: 0.85rem;
    color: #3E2723;
    font-weight: 600;
    font-family: 'Arial', sans-serif;
  }
  
  .testimonial-footer {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  
  .verified-badge {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 2px 8px rgba(40,167,69,0.3);
  }
  
  .testimonial-button {
    background: #D4AF37;
    color: #000;
    border: none;
    padding: 15px 35px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212,175,55,0.3);
    font-family: 'Arial', sans-serif;
  }
  
  .testimonial-button:hover {
    background: #B8941F;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212,175,55,0.4);
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .testimonial-card {
      padding: 20px;
      margin-bottom: 20px;
    }
    
    .customer-image {
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }
    
    .customer-info h5 {
      font-size: 1rem;
    }
    
    .quote-icon {
      font-size: 3rem;
    }
    
    .testimonial-content p {
      font-size: 0.9rem;
    }
  }
`;
document.head.appendChild(style);