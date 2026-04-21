import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaEnvelope, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaClock, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <>
      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-overlay"></div>
        
        {/* MAIN FOOTER CONTENT */}
        <div className="container position-relative">
          <div className="footer-content">
            {/* BRAND SECTION */}
            <div className="footer-brand" data-aos="fade-up">
              <div className="brand-logo mb-3">
                <h2 className="mb-0">
                  <span className="brand-leather">LEATHER</span>
                  <span className="brand-luxe">LUXE</span>
                </h2>
              </div>
              <p className="footer-description">
                Crafting premium leather goods with exceptional quality and timeless elegance. 
                Experience luxury in every stitch.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
               
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" className="social-link" aria-label="Pinterest">
                  <FaPinterest />
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/shop" className="footer-link">Shop</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                <li><Link to="/cart" className="footer-link">Cart</Link></li>
                <li><Link to="/login" className="footer-link">Account</Link></li>
              </ul>
            </div>

            {/* CATEGORIES */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
              <h4 className="footer-title">Categories</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Leather Bags</a></li>
                <li><a href="#" className="footer-link">Wallets & Belts</a></li>
                <li><a href="#" className="footer-link">Accessories</a></li>
        
                <li><a href="#" className="footer-link">Custom Orders</a></li>
                <li><a href="#" className="footer-link">New Arrivals</a></li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                  <span>23 Valluvar Street, Tirupattur, 634560</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone-fill contact-icon"></i>
                  <span>+91 98423 65882</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope-fill contact-icon"></i>
                  <span>luxuryluxe@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock-fill contact-icon"></i>
                  <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="footer-column newsletter-column" data-aos="fade-up" data-aos-delay="400">
              <h4 className="footer-title">Newsletter</h4>
              <p className="newsletter-description">
                Subscribe to get special offers, new product announcements, and exclusive deals.
              </p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn">
                    <FaEnvelope style={{
                      width: '22px',
                      height: '22px',
                      color: '#ffffff',
                      fill: '#ffffff',
                      display: 'block',
                      opacity: 1,
                      visibility: 'visible'
                    }} />
                  </button>
                </div>
                {subscribed && (
                  <div className="newsletter-success">
                    Successfully subscribed!
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* PAYMENT METHODS */}
          
        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; 2026 Leather Luxe. All rights reserved. Crafted with passion for excellence.</p>
              </div>
              <div className="footer-bottom-links">
                <a href="#" className="bottom-link">Privacy Policy</a>
                <a href="#" className="bottom-link">Terms of Service</a>
                <a href="#" className="bottom-link">Shipping Policy</a>
                <a href="#" className="bottom-link">Refund Policy</a>
                <a href="#" className="bottom-link">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* MARQUEE SECTION */}
      <div className="marquee-section">
        <div className="marquee-content">
          <div className="marquee-track">
            <span className="marquee-text">
              PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 
              30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | 
              LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS | 
              PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 
              30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | 
              LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS
            </span>
            <span className="marquee-text">
              PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 
              30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | 
              LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS | 
              PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 
              30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | 
              LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER STYLES */}
      <style jsx>{`
        .footer-section {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(20, 15, 12, 0.95) 0%, 
            rgba(45, 30, 25, 0.9) 25%,
            rgba(62, 39, 35, 0.85) 50%,
            rgba(80, 50, 40, 0.8) 75%,
            rgba(215, 168, 110, 0.25) 100%);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          margin-top: 80px;
          overflow: hidden;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.2);
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(215, 168, 110, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(62, 39, 35, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr 1.5fr;
          gap: 40px;
          padding: 60px 0 40px;
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          max-width: 350px;
        }

        .brand-logo h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .brand-leather {
          color: #D7A86E;
        }

        .brand-luxe {
          color: #ffffff;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 25px;
          font-family: 'Montserrat', sans-serif;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: rgba(215, 168, 110, 0.25);
          backdrop-filter: blur(15px) saturate(200%);
          -webkit-backdrop-filter: blur(15px) saturate(200%);
          color: #ffffff;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 8px 30px rgba(215, 168, 110, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .footer-column {
          min-width: 0;
        }

        .footer-title {
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #D7A86E, transparent);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          display: inline-block;
        }

        .footer-link:hover {
          color: #D7A86E;
          transform: translateX(5px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
        }

        .contact-icon {
          color: #D7A86E !important;
          margin-top: 2px;
          flex-shrink: 0;
          font-size: 18px !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          line-height: 1 !important;
        }

        .contact-icon::before {
          color: #D7A86E !important;
          font-size: 18px !important;
        }

        .newsletter-column {
          max-width: 300px;
        }

        .newsletter-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
        }

        .newsletter-form {
          position: relative;
        }

        .newsletter-input-group {
          display: flex;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .newsletter-input {
          flex: 1;
          padding: 14px 20px;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
        }

        .newsletter-btn {
          padding: 14px 20px;
          background: linear-gradient(135deg, rgba(215, 168, 110, 0.9), rgba(62, 39, 35, 0.9));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff !important;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex !important;
          align-items: center;
          justify-content: center;
          min-width: 55px;
          font-size: 1.2rem !important;
          box-shadow: 0 4px 15px rgba(215, 168, 110, 0.2);
          opacity: 1;
          visibility: visible;
        }

        .newsletter-btn svg,
        .newsletter-btn > svg,
        .newsletter-btn > svg:first-child,
        .newsletter-btn > svg:last-child {
          width: 22px !important;
          height: 22px !important;
          fill: #ffffff !important;
          color: #ffffff !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          min-width: 22px !important;
          min-height: 22px !important;
          position: relative !important;
          z-index: 10 !important;
        }

        /* Force visibility for all SVG elements in newsletter button */
        .newsletter-btn * {
          visibility: visible !important;
          opacity: 1 !important;
        }

        .newsletter-btn svg path {
          fill: #ffffff !important;
        }

        .newsletter-btn i,
        .newsletter-btn .fa,
        .newsletter-btn .fas,
        .newsletter-btn .far {
          color: #ffffff !important;
          font-size: 18px !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .newsletter-btn:hover {
          background: linear-gradient(135deg, rgba(62, 39, 35, 0.95), rgba(215, 168, 110, 0.95));
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(215, 168, 110, 0.3);
        }

        .newsletter-success {
          margin-top: 10px;
          color: #4CAF50;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          animation: fadeIn 0.3s ease;
        }

        .payment-section {
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .payment-title {
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .payment-methods {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .payment-icon {
          width: 52px;
          height: 34px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.75);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .payment-icon:hover {
          background: rgba(215, 168, 110, 0.2);
          backdrop-filter: blur(15px) saturate(200%);
          -webkit-backdrop-filter: blur(15px) saturate(200%);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 
            0 6px 20px rgba(215, 168, 110, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .footer-bottom {
          background: linear-gradient(135deg, 
            rgba(15, 10, 8, 0.9) 0%, 
            rgba(30, 20, 15, 0.85) 50%,
            rgba(45, 30, 25, 0.8) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.15);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .bottom-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .bottom-link:hover {
          color: #D7A86E;
        }

        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(215, 168, 110, 0.9), rgba(62, 39, 35, 0.9));
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff !important;
          cursor: pointer;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 8px 30px rgba(215, 168, 110, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          font-size: 1.1rem;
          opacity: 1;
          visibility: visible;
        }

        .back-to-top:hover {
          transform: translateY(-5px) scale(1.05);
          background: linear-gradient(135deg, rgba(62, 39, 35, 0.95), rgba(215, 168, 110, 0.95));
          box-shadow: 
            0 12px 40px rgba(215, 168, 110, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .marquee-section {
          background: linear-gradient(135deg, 
            rgba(62, 39, 35, 0.95) 0%, 
            rgba(215, 168, 110, 0.3) 25%,
            rgba(255, 215, 0, 0.2) 50%,
            rgba(215, 168, 110, 0.3) 75%,
            rgba(62, 39, 35, 0.95) 100%);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border-top: 2px solid rgba(255, 215, 0, 0.4);
          border-bottom: 2px solid rgba(215, 168, 110, 0.4);
          overflow: hidden;
          position: relative;
          padding: 18px 0;
          box-shadow: 
            0 -5px 20px rgba(215, 168, 110, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 100vw;
        }

        .marquee-content {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .marquee-track {
          display: flex;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        .marquee-text {
          background: linear-gradient(90deg, 
            #FFD700 0%, 
            #FFA500 25%, 
            #FFD700 50%, 
            #FFA500 75%, 
            #FFD700 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 0 50px;
          display: inline-block;
          white-space: nowrap;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          animation: shimmer 3s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .marquee-section:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Desktop-specific fixes */
        @media (min-width: 991px) {
          .newsletter-btn {
            min-width: 65px !important;
            font-size: 1.3rem !important;
          }
          
          .newsletter-btn svg {
            width: 22px !important;
            height: 22px !important;
            min-width: 22px !important;
            min-height: 22px !important;
          }
          
          .newsletter-btn i,
          .newsletter-btn .fa,
          .newsletter-btn .fas,
          .newsletter-btn .far {
            font-size: 20px !important;
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .footer-content {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 30px;
          }
          
          .footer-brand {
            grid-column: 1 / -1;
            max-width: 100%;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding: 40px 0 30px;
          }
          
          .footer-brand {
            grid-column: 1 / -1;
          }
          
          .newsletter-column {
            grid-column: 1 / -1;
            max-width: 100%;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 30px 0 20px;
          }
          
          .brand-logo h2 {
            font-size: 1.5rem;
          }
          
          .payment-methods {
            gap: 10px;
          }
          
          .footer-bottom-links {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          
          .back-to-top {
            bottom: 20px !important;
            right: 20px !important;
            width: 48px !important;
            height: 48px !important;
            display: flex !important;
            opacity: 1 !important;
            visibility: visible !important;
            z-index: 9999 !important;
            color: #ffffff !important;
            font-size: 1rem !important;
          }

          .marquee-section {
            padding: 12px 0;
          }

          .marquee-text {
            font-size: 11px;
            letter-spacing: 1px;
            padding: 0 30px;
          }

          .marquee-track {
            animation: marquee 25s linear infinite;
          }
        }

        @media (max-width: 768px) {
          .marquee-text {
            font-size: 12px;
            letter-spacing: 1.5px;
            padding: 0 40px;
          }

          .marquee-track {
            animation: marquee 28s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
