import './hero.css'
import Mag from '../images/mag.png'
import Illustration from '../images/illustration1.png'

function Hero() {
    return (
      <section className="hero">
        <div className="left-section">
          <div className="main-text">
            <h1 className="text">
              Connect Talent <br />
              with <span className="block">Opportunity</span>
            </h1>
            <img src={Mag} alt="" />
          </div>

          <h3 className="sub-text">
            Welcome to M-CVs Bank, the premier job platform. 
Unlock a world of skilled professionals with free CV downloads 
and verified talent screening. 
          </h3>
          <div className="btns">
            <div className="post-btn get-started">
              <a href="#" target="_blank">Join as a recruiter</a>
            </div>
            <div className="learn">
              <a href="" target="_blank">Join as a job seeker</a>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={Illustration} alt="Hero Image" className="hero-image" />
        </div>
      </section>
    );
    
}

export default Hero;