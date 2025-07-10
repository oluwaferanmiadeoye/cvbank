import Logo from '../images/logo.png';
import './navBar.css'
function NavBar() {
  return (
      <nav className="main-nav">
        <div className="logo">
          <img src={Logo} alt="CV Bank Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="auth-buttons">
          <a href="#" className="login-btn">Sign up</a>
          <a href="#" className="post-btn">Login</a>
        </div>
      </nav>
  );
}

export default NavBar;
