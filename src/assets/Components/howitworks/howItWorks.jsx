import "./howItWorks.css";

function HowItWorks (){
    return (
<section className="how-it-works">
        <div className="top-text">
          <h2>How it Works</h2>
          <p>Simple steps to connect talent with opportunity</p>
        </div>
        <div className="cards">
          <div className="recruit">
            <div className="header">
              <h1>Recruiters</h1>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Sign Up</h3>
                  <p className="step-description">
                    Create a free account in minutes to get started. Enter your
                    company details and start exploring.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Build Your Profile</h3>
                  <p className="step-description">
                    Use our powerful search tools to find candidates by role,
                    experience, or location. Download CVs instantly for free.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Request Screening</h3>
                  <p className="step-description">
                    Select candidates and request a verified screening. Pay only
                    after choosing the right fit.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Hire with Confidence</h3>
                  <p className="step-description">
                    Review screened profiles and hire top talent, knowing their
                    credentials are verified.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="seeker">
            <div className="header">
              <h1>Job Seekers</h1>
            </div>
            <div className="steps2">
              <div className="step">
                <div className="step-number one">1</div>
                <div className="step-content">
                  <h3 className="step-title">Sign Up</h3>
                  <p className="step-description">
                    Join CV Bank for free. Provide your details such as email
                    and upload your CV to get started.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number two">2</div>
                <div className="step-content">
                  <h3 className="step-title">Build Your Profile</h3>
                  <p className="step-description">
                    Complete your profile with your skills, experience, and
                    contact information to stand out
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number three">3</div>
                <div className="step-content">
                  <h3 className="step-title">Opt for Screening</h3>
                  <p className="step-description">
                    Choose our premium screening service to verify your
                    qualifications and boost your visibility.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number four">4</div>
                <div className="step-content">
                  <h3 className="step-title">Get Noticed</h3>
                  <p className="step-description">
                    Let recruiters find you through our platform and receive
                    job offers tailored to your skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HowItWorks;
