import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiFileText, FiUser, FiFolder, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from 'react';

const ModernNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Force navbar to stay visible on scroll
    const navbar = document.querySelector('.modern-navbar');
    if (navbar) {
      navbar.style.position = 'fixed';
      navbar.style.top = isMobile ? '20px' : '60px';
      navbar.style.left = '50%';
      navbar.style.transform = 'translateX(-50%)';
      navbar.style.zIndex = '999999';
      navbar.style.visibility = 'visible';
      navbar.style.opacity = '1';
      navbar.style.display = 'block';
    }

    // Prevent any scroll listeners from hiding the navbar
    const handleScroll = () => {
      if (navbar) {
        navbar.style.position = 'fixed';
        navbar.style.top = isMobile ? '20px' : '60px';
        navbar.style.visibility = 'visible';
        navbar.style.opacity = '1';
        navbar.style.display = 'block';
        navbar.style.zIndex = '999999';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const navbarStyle = {
    position: 'fixed',
    top: isMobile ? '20px' : '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '999999',
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    visibility: 'visible',
    opacity: '1',
    display: 'block',
    padding: isMobile ? '8px 16px' : '12px 20px',
    margin: '0',
    width: isMobile ? '90vw' : 'auto',
    maxWidth: isMobile ? '350px' : 'none'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'space-between' : 'center',
    gap: isMobile ? '12px' : '24px',
    visibility: 'visible',
    opacity: '1',
    padding: '0',
    margin: '0',
    flexWrap: isMobile ? 'wrap' : 'nowrap'
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isMobile) {
    return (
      <nav className="modern-navbar" style={navbarStyle}>
        <div className="navbar-container" style={containerStyle}>
          {/* Mobile Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', justifyContent: 'space-between' }}>
            {/* Social Icons - Always visible */}
            <div className="social-icons" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconButton 
                icon={<FaLinkedinIn />} 
                href="https://linkedin.com/in/mazidkhan12/" 
                ariaLabel="LinkedIn"
                mobile={true}
              />
              <IconButton 
                icon={<FaGithub />} 
                href="https://github.com/Mazidkh12/" 
                ariaLabel="GitHub"
                mobile={true}
              />
              <IconButton 
                icon={<FaInstagram />} 
                href="https://www.instagram.com/majidkhann__?igsh=b3JnZ3FwM3RmOWN3" 
                ariaLabel="Instagram"
                mobile={true}
              />
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: 'rgba(255, 255, 255, 0.8)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                cursor: 'pointer'
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          
          {/* Mobile Menu - Collapsible */}
          {isMobileMenuOpen && (
            <div style={{ 
              width: '100%', 
              marginTop: '12px', 
              paddingTop: '12px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <NavButton 
                icon={<FiFileText />} 
                text="Resume" 
                href="/Resume.pdf"
                download="Mazid_Khan_Resume.pdf"
                mobile={true}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavButton 
                icon={<FiUser />} 
                text="About" 
                href="#intro"
                mobile={true}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavButton 
                icon={<FiFolder />} 
                text="Projects" 
                href="#projects"
                mobile={true}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavButton 
                icon={<FiMail />} 
                text="Contact" 
                href="#connect"
                mobile={true}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="modern-navbar" style={navbarStyle}>
      <div className="navbar-container" style={containerStyle}>
        {/* Social Icons */}
        <div className="social-icons" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0', margin: '0' }}>
          <IconButton 
            icon={<FaLinkedinIn />} 
            href="https://linkedin.com/in/mazidkhan12/" 
            ariaLabel="LinkedIn"
          />
          <IconButton 
            icon={<FaGithub />} 
            href="https://github.com/Mazidkh12/" 
            ariaLabel="GitHub"
          />
          <IconButton 
            icon={<FaInstagram />} 
            href="https://www.instagram.com/majidkhann__?igsh=b3JnZ3FwM3RmOWN3" 
            ariaLabel="Instagram"
          />
        </div>
        
        {/* Divider */}
        <div className="divider" style={{
          width: '1px',
          height: '28px',
          background: 'rgba(255, 255, 255, 0.2)',
          margin: '0'
        }}></div>
        
        {/* Navigation Links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0', margin: '0' }}>
          <NavButton 
            icon={<FiFileText />} 
            text="Resume" 
            href="/Resume.pdf"
            download="Mazid_Khan_Resume.pdf"
          />
          <NavButton 
            icon={<FiUser />} 
            text="About" 
            href="#intro"
          />
          <NavButton 
            icon={<FiFolder />} 
            text="Projects" 
            href="#projects"
          />
          <NavButton 
            icon={<FiMail />} 
            text="Contact" 
            href="#connect"
          />
        </div>
      </div>
    </nav>
  );
};

const IconButton = ({ icon, href, ariaLabel, mobile = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="icon-btn"
    style={{
      width: mobile ? '32px' : '40px',
      height: mobile ? '32px' : '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: mobile ? '14px' : '16px',
      textDecoration: 'none',
      padding: '0',
      margin: '0',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'transparent';
      e.target.style.color = '#ffffff';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'transparent';
      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.target.style.transform = 'scale(1)';
    }}
  >
    {icon}
  </a>
);

const NavButton = ({ icon, text, href, download, mobile = false, onClick }) => (
  <a 
    href={href} 
    className="nav-btn"
    download={download}
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: mobile ? '12px' : '8px',
      padding: mobile ? '12px 16px' : '10px 16px',
      height: mobile ? '44px' : '40px',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: mobile ? '14px' : '13px',
      fontWeight: '500',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      margin: '0',
      width: mobile ? '100%' : 'auto',
      justifyContent: mobile ? 'flex-start' : 'center',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
      e.target.style.color = '#ffffff';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      e.target.style.transform = mobile ? 'translateX(4px)' : 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'transparent';
      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.target.style.transform = 'translate(0)';
    }}
  >
    <span className="nav-icon" style={{ fontSize: mobile ? '16px' : '14px', display: 'flex', alignItems: 'center' }}>{icon}</span>
    <span className="nav-text" style={{ fontWeight: '500', letterSpacing: '0.01em' }}>{text}</span>
  </a>
);

export default ModernNavbar;