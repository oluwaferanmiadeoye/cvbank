import Logo from '../images/logo.png';
import './footer.css';
import React from 'react';  



function Footer (){
    return (
        <footer className="footer">
        <div className="above">
          <div className="leftt">
            <img src={Logo} alt="CV Bank Logo" />
            <p>Connecting talent with opportunity across Nigeria. 
The premier platform for job seekers and recruiters.</p>
          </div>
          <div className="righty">
          <div className="link-one">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="link-two">
            <h2>Support</h2>
            <ul>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className="line"></div>
        <div className="below">
          <p>© 2025 M-CVs Bank. All rights reserved.</p>
        </div>
      </footer>
    )

}

export default Footer;