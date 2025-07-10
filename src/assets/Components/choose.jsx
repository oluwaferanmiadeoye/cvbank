import "./choose.css";
import Illustration2 from "../images/illustration2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Choose (){
    return(
        <section className="choose">
        <div className="top">
          <h2 className="choose-us">Why Choose Us?</h2>
          <p className="paragraph">
           Experience the future of recruitment with our innovative platform designed for the modern job market.
          </p>
        </div>
        <div className="bottom">
          <div className="left">
        <img src={Illustration2} alt="" />
          </div>
          <div className="right">
            <div className="breh">
              <div className="icons"><FontAwesomeIcon icon={faDownload} /></div>
              <h3 className="heading">Free CV Access</h3>
              <p className="text">
                Download CVs instantly at no cost. Find the perfect candidate
                with our powerful search tools.
              </p>
            </div>
            <div className="breh">
              <div className="icons green">
              <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <h3 className="heading">Verified Screening</h3>
              <p className="text">
                Get peace of mind with our premium screening service, ensuring
                top-tier talent (pay only after selection).
              </p>
            </div>
            <div className="breh">
              <div className="icons red">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <h3 className="heading">Smart Filtering</h3>
              <p className="text">
                Advanced search filters to find the perfect candidate for your
                role.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Choose;