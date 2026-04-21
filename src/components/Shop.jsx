





import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/animations.css';
import Footer from './Footer';

// Import men images (b8-b20)
import b8Image from "../assets/images/b8.jpg";
import b9Image from "../assets/images/b9.jpg";
import b10Image from "../assets/images/b10.jpg";
import b11Image from "../assets/images/b11.jpg";
import b12Image from "../assets/images/b12.jpg";
import b13Image from "../assets/images/b13.jpg";
import b14Image from "../assets/images/b14.jpg";
import b15Image from "../assets/images/b15.jpg";
import b16Image from "../assets/images/b16.jpg";
import b17Image from "../assets/images/b17.jpg";
import b18Image from "../assets/images/b18.jpg";
import b19Image from "../assets/images/b19.jpg";
import b20Image from "../assets/images/b20.jpg";

// Import women images (b21-b30)
import b21Image from "../assets/images/b21.jpg";
import b22Image from "../assets/images/b22.jpg";
import b23Image from "../assets/images/b23.jpg";
import b24Image from "../assets/images/b24.jpg";
import b25Image from "../assets/images/b25.jpg";
import b26Image from "../assets/images/b26.jpg";
import b27Image from "../assets/images/b27.jpg";
import b28Image from "../assets/images/b28.jpg";
import b29Image from "../assets/images/b29.jpg";
import b30Image from "../assets/images/b30.jpg";




function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart, cartItems, getCartCount } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Update cart count when cart items change
  useEffect(() => {
    setCartCount(getCartCount());
  }, [cartItems, getCartCount]);

  // Men products (b8-b20)
  const menProducts = [
    { id: 8, image: b8Image, name: "Premium Leather Jacket", price: "₹24,999", category: "men" },
    { id: 9, image: b9Image, name: "Classic Leather Coat", price: "₹32,999", category: "men" },
    { id: 10, image: b10Image, name: "Stylish Leather Vest", price: "₹16,499", category: "men" },
    { id: 11, image: b11Image, name: "Luxury Leather Blazer", price: "₹37,499", category: "men" },
    { id: 12, image: b12Image, name: "Casual Leather Jacket", price: "₹20,749", category: "men" },
    { id: 13, image: b13Image, name: "Vintage Leather Coat", price: "₹29,249", category: "men" },
    { id: 14, image: b14Image, name: "Modern Leather Jacket", price: "₹23,249", category: "men" },
    { id: 15, image: b15Image, name: "Elegant Leather Coat", price: "₹35,749", category: "men" },
    { id: 16, image: b16Image, name: "Sport Leather Jacket", price: "₹19,074", category: "men" },
    { id: 17, image: b17Image, name: "Formal Leather Blazer", price: "₹32,999", category: "men" },
    { id: 18, image: b18Image, name: "Premium Leather Vest", price: "₹15,749", category: "men" },
    { id: 19, image: b19Image, name: "Designer Leather Coat", price: "₹49,999", category: "men" },
    { id: 20, image: b20Image, name: "Exclusive Leather Jacket", price: "₹41,499", category: "men" }
  ];

  // Women products (b21-b30)
  const womenProducts = [
    { id: 21, image: b21Image, name: "Elegant Leather Jacket", price: "₹29,249", category: "women" },
    { id: 22, image: b22Image, name: "Fashion Leather Coat", price: "₹37,499", category: "women" },
    { id: 23, image: b23Image, name: "Chic Leather Vest", price: "₹19,074", category: "women" },
    { id: 24, image: b24Image, name: "Luxury Leather Blazer", price: "₹41,499", category: "women" },
    { id: 25, image: b25Image, name: "Stylish Leather Jacket", price: "₹24,999", category: "women" },
    { id: 26, image: b26Image, name: "Classic Leather Coat", price: "₹32,999", category: "women" },
    { id: 27, image: b27Image, name: "Modern Leather Jacket", price: "₹27,499", category: "women" },
    { id: 28, image: b28Image, name: "Designer Leather Coat", price: "₹45,749", category: "women" },
    { id: 29, image: b29Image, name: "Premium Leather Vest", price: "₹20,749", category: "women" },
    { id: 30, image: b30Image, name: "Exclusive Leather Jacket", price: "₹35,749", category: "women" }
  ];

  const currentProducts = selectedCategory === 'men' ? menProducts : womenProducts;
  const totalPages = Math.ceil(currentProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                  <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge ${
                        cartCount === 0 ? '' : 
                        cartCount === 1 ? 'count-single' : 
                        cartCount <= 9 ? 'count-double' : 
                        cartCount <= 99 ? 'count-triple' : 'count-many'
                      } ${addedToCart ? 'animate-cart-badge-bounce animate-cart-badge-glow' : ''}`} 
                        style={{
                          backgroundColor: cartCount === 0 ? '#6c757d' : '#D7A86E',
                          color: cartCount === 0 ? '#ffffff' : '#3E2723',
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
                          opacity: cartCount === 0 ? '0.7' : '1'
                        }}>
                    {cartCount}
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
        <div className="container text-center">
          <h3 className=" mb-3" data-aos="fade-down">
            Premium Leather Collection
          </h3>
         
        </div>
      

      {/* CATEGORY SELECTION */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="btn-group w-100" role="group">
              <button
                className={`btn ${selectedCategory === 'men' ? 'btn-primary' : 'btn-outline-primary'} fw-bold py-3`}
                onClick={() => handleCategoryChange('men')}
                style={{ 
                  backgroundColor: selectedCategory === 'men' ? '#3E2723' : 'transparent',
                  borderColor: '#3E2723',
                  color: selectedCategory === 'men' ? 'white' : '#3E2723'
                }}
              >
                <i className="fas fa-male me-2"></i>
                Men's Collection
              </button>
              <button
                className={`btn ${selectedCategory === 'women' ? 'btn-primary' : 'btn-outline-primary'} fw-bold py-3`}
                onClick={() => handleCategoryChange('women')}
                style={{ 
                  backgroundColor: selectedCategory === 'women' ? '#3E2723' : 'transparent',
                  borderColor: '#3E2723',
                  color: selectedCategory === 'women' ? 'white' : '#3E2723'
                }}
              >
                <i className="fas fa-female me-2"></i>
                Women's Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="container mb-5">
        <div className="row g-4">
          {currentItems.map((product, index) => (
            <div 
              key={product.id} 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 border-0 product-card" style={{ backgroundColor: 'transparent' }}>
                <div className="position-relative overflow-hidden">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{ 
                      height: "350px", 
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-secondary">New</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted">Premium quality leather</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="h4 mb-0">{product.price}</span>
                      <div className="text-muted">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(product);
                        setAddedToCart(product.id);
                        
                        // Update cart count immediately
                        setCartCount(prev => prev + 1);
                        
                        setTimeout(() => {
                          setAddedToCart(null);
                        }, 2000);
                      }}
                      className={`btn btn-add-to-cart w-100 fw-bold position-relative overflow-hidden ${
                        addedToCart === product.id ? 'added' : ''
                      }`} 
                      style={{ 
                        backgroundColor: addedToCart === product.id ? '#28a745' : '#3E2723', 
                        borderColor: addedToCart === product.id ? '#28a745' : '#3E2723',
                        color: 'white'
                      }}
                    >
                      <span className={`d-flex align-items-center justify-content-center ${addedToCart === product.id ? 'animate-fade-in' : ''}`}>
                        {addedToCart === product.id ? (
                          <>
                            <i className="fas fa-check-circle me-2"></i>
                            Added to Cart!
                          </>
                        ) : (
                          <>
                            <i className="fas fa-shopping-cart me-2"></i>
                            Add to Cart
                          </>
                        )}
                      </span>
                      {addedToCart === product.id && (
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-25 animate-pulse"></span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="container mb-5">
        <div className="text-center">
          <div style={{display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px", flexWrap: "wrap"}}>
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                background: currentPage === 1 ? "#3E2723" : "#D4AF37",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                opacity: currentPage === 1 ? "0.6" : "1"
              }}
            >← Previous</button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  background: currentPage === index + 1 ? "#D4AF37" : "#3E2723",
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
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                background: currentPage === totalPages ? "#3E2723" : "#D4AF37",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                opacity: currentPage === totalPages ? "0.6" : "1"
              }}
            >Next →</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;


