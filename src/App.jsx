import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Download, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = `Hello, I am ${name}. I am interested in Royal Heritage by Alay Developers. Phone: ${phone}. Please share complete details.`;
    window.open(`https://wa.me/919850993992?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ROYAL HERITAGE
          </motion.div>
          
          <div className="nav-links desktop-nav">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('founder')}>Founder</a>
            <a onClick={() => scrollToSection('highlights')}>Highlights</a>
            <a onClick={() => scrollToSection('gallery')}>Gallery</a>
            <a onClick={() => scrollToSection('enquiry')}>Enquiry</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-links">
              <a onClick={() => scrollToSection('home')}>Home</a>
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('founder')}>Founder</a>
              <a onClick={() => scrollToSection('highlights')}>Highlights</a>
              <a onClick={() => scrollToSection('gallery')}>Gallery</a>
              <a onClick={() => scrollToSection('enquiry')}>Enquiry</a>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hero-video"
          >
            <source src="/this will be for hero section video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <motion.div 
          className="hero-content"
          style={{ opacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ROYAL HERITAGE
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Luxury Living Redefined
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            An exclusive residential address crafted with timeless design,<br />
            modern architecture, and premium comfort.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="btn-primary" onClick={() => scrollToSection('enquiry')}>
              Enquire Now
            </button>
            <button className="btn-secondary">
              <Download size={18} />
              Download Brochure
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <motion.a
          href="https://wa.me/919850993992"
          target="_blank"
          rel="noopener noreferrer"
          className="fab whatsapp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
        </motion.a>
        <motion.a
          href="tel:+919850993992"
          className="fab phone"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone size={24} />
        </motion.a>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Royal Heritage</h2>
            <p className="about-text">
              Royal Heritage by Alay Developers is a premium residential development designed for modern families 
              seeking elegance, comfort, and connectivity. With thoughtfully planned spaces, refined elevation, 
              and superior construction quality, it delivers a lifestyle beyond expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section id="founder" className="founder">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet the Founder
          </motion.h2>
          <div className="founder-content">
            <motion.div
              className="founder-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/image.png" alt="Mr. Nassiruddin Khan - Founder, Alay Developers" className="founder-image" />
            </motion.div>
            <motion.div
              className="founder-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Mr. Nassiruddin Khan</h3>
              <p className="founder-title">Founder & Managing Director</p>
              <p className="founder-description">
                With a vision to redefine luxury living, Mr. Nassiruddin Khan founded Alay Developers 
                to create residential spaces that blend timeless elegance with modern comfort. His commitment 
                to quality, innovation, and customer satisfaction has established Alay Developers as a trusted 
                name in premium real estate.
              </p>
              <div className="founder-contact">
                <a href="tel:+919850993992" className="founder-contact-btn">
                  <Phone size={20} />
                  +91 98509 93992
                </a>
                <a href="https://wa.me/919850993992" target="_blank" rel="noopener noreferrer" className="founder-contact-btn whatsapp">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
              <p className="partnership-text">
                For partnership opportunities and business inquiries, please contact directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="highlights" className="highlights">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Project Highlights
          </motion.h2>
          <div className="highlights-grid">
            {[
              'Premium 2 & 3 BHK Residences',
              'Prime Location',
              'Elegant Modern Elevation',
              'Ample Parking Space',
              'High-Quality Construction',
              'Well-Designed Floor Plans'
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                <div className="highlight-icon">✦</div>
                <h3>{highlight}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section id="gallery" className="video-showcase">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Project Walkthrough
          </motion.h2>
          <div className="reels-container">
            <motion.div
              className="reel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="reel-video"
              >
                <source src="/reel1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              className="reel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="reel-video"
              >
                <source src="/reel2.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="enquiry">
        <div className="container">
          <motion.div
            className="enquiry-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Make an Enquiry</h2>
            <form className="enquiry-form" onSubmit={handleEnquiry}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email (Optional)" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message (Optional)" rows="4"></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Enquiry</button>
            </form>
            <div className="whatsapp-options">
              <p>Or contact us directly on WhatsApp:</p>
              <div className="whatsapp-buttons">
                <a href="https://wa.me/919850993992" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle size={18} />
                  +91 98509 93992
                </a>
                <a href="https://wa.me/919766640007" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle size={18} />
                  +91 97666 40007
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h3>Call Us</h3>
                    <p><a href="tel:+919850993992" className="contact-link">+91 98509 93992</a></p>
                    <p><a href="tel:+919766640007" className="contact-link">+91 97666 40007</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h3>Location</h3>
                    <a 
                      href="https://maps.app.goo.gl/WDoxhBznDjGhYq3m8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <p>Lane No. 1, Rajendri Nagar</p>
                      <p>Raghuveer Nagar, Wadgaon Sheri</p>
                      <p>Pune, Maharashtra 411014</p>
                    </a>
                  </div>
                </div>
                <div className="contact-buttons">
                  <a href="tel:+919850993992" className="btn-primary">
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a href="https://wa.me/919850993992" target="_blank" rel="noopener noreferrer" className="btn-secondary whatsapp-btn">
                    <MessageCircle size={18} />
                    WhatsApp Now
                  </a>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8047891234567!2d73.92608931490123!3d18.579345687382456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2b5d6c8a9e7f1234!2sLane%20No.%201%2C%20Rajendri%20Nagar%2C%20Raghuveer%20Nagar%2C%20Wadgaon%20Sheri%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Heritage Location - Wadgaon Sheri, Pune"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/WDoxhBznDjGhYq3m8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <MapPin size={18} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Alay Developers</h3>
              <p>Royal Heritage</p>
              <p>Luxury Living Redefined</p>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p><a href="tel:+919850993992" className="footer-link">+91 98509 93992</a></p>
              <p><a href="tel:+919766640007" className="footer-link">+91 97666 40007</a></p>
            </div>
            <div className="footer-section">
              <h3>Location</h3>
              <a 
                href="https://maps.app.goo.gl/WDoxhBznDjGhYq3m8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <p><MapPin size={16} /> Lane No. 1, Rajendri Nagar</p>
                <p style={{ paddingLeft: '24px' }}>Wadgaon Sheri, Pune</p>
                <p style={{ paddingLeft: '24px' }}>Maharashtra 411014</p>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Alay Developers. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
