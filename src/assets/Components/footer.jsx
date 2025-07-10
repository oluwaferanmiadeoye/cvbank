import Logo from '../images/logo.png';
import './footer.css';

function Footer (){
    return (
        <footer class="footer">
        <div class="above">
          <div class="leftt">
            <img src={Logo} alt="CV Bank Logo" />
            <p>Connecting talent with opportunity across Nigeria. 
The premier platform for job seekers and recruiters.</p>
          </div>
          <div class="righty">
          <div class="link-one">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="link-two">
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
        <div class="line"></div>
        <div class="below">
          <p>© 2025 M-CVs Bank. All rights reserved.</p>
        </div>
      </footer>
    )

}

export default Footer;