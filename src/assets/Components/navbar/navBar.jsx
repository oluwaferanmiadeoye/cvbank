import Logo from '../../images/logo.png';
import './navBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle body class to prevent scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={Logo} alt="CV Bank Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : 'closed'}`}>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <a href="#" className="login-btn">Sign up</a>
        <a href="#" className="post-btn">Login</a>
      </div>
      <div className={`icon ${isOpen ? 'open' : ''}`} onClick={mobileMenu}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </div>
    </nav>
  );
}

export default NavBar;