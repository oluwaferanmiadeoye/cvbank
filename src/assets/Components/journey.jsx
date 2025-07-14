import "./journey.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

function Journey () {
    return (
        <section className="start-today">
       <h2 className="start">Start your Journey Today</h2>
        <p>Whether you're seeking your next role or hiring the best, 
M-CVs Bank is here to help. Sign up now and explore opportunities!</p>
        <div className="buttons">
            <a href="#" target="_blank"className="seek">Get started <div className="iic"><FontAwesomeIcon icon={faArrowRight} /></div> </a>
           <a href="#" target="_blank" className="rec">Learn more</a>
           
            </div>
     </section>
    )
}

export default Journey