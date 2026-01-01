import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiFileText, FiUser, FiFolder, FiMail } from "react-icons/fi";
import { useEffect } from 'react';

const ModernNavbar = () => {
  useEffect(() => {
    // Force navbar to stay visible on scroll
    const navbar = document.querySelector('.modern-navbar');
    if (navbar) {
      navbar.style.position = 'fixed';
      navbar.style.top = '60px';
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
        navbar.style.top = '60px';
        navbar.style.visibility = 'visible';
        navbar.style.opacity = '1';
        navbar.style.display = 'block';
        navbar.style.zIndex = '999999';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '999999',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    visibility: 'visible',
    opacity: '1',
    display: 'block',
    padding: '12px 20px',
    margin: '0'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    visibility: 'visible',
    opacity: '1',
    padding: '0',
    margin: '0'
  };

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

const IconButton = ({ icon, href, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="icon-btn"
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '16px',
      textDecoration: 'none',
      padding: '0',
      margin: '0'
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

const NavButton = ({ icon, text, href, download }) => (
  <a 
    href={href} 
    className="nav-btn"
    download={download}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 16px',
      height: '40px',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '13px',
      fontWeight: '500',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      margin: '0'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'transparent';
      e.target.style.color = '#ffffff';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      e.target.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'transparent';
      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.target.style.transform = 'translateY(0)';
    }}
  >
    <span className="nav-icon" style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>{icon}</span>
    <span className="nav-text" style={{ fontWeight: '500', letterSpacing: '0.01em' }}>{text}</span>
  </a>
);

export default ModernNavbar;