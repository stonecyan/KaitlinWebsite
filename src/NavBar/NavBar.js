import React from "react";
import LogoSelfPortrait from "../Images/LogoSelfPortrait.jpg"
import LogoPicture from "../Images/LogoPicture.jpg"
import "./NavBar.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faFacebookSquare,
	faLinkedin,
	faInstagram
} from "@fortawesome/free-brands-svg-icons"

const NavBar = props => {
	return(
		<div id="navigation" className="navigation">
		    <img className="weblogo" src={LogoSelfPortrait} />
		    <img className="mobilelogo" src={LogoPicture} />
		    <div className="navItems">
			    <Router>
			        <ul>
			            <li><Link to="/Illustration">illustration </Link></li>
			            <li><Link to="/Design">design</Link></li>
			            <li><Link to="/About">about</Link></li>
			        </ul>
		        </Router>
		    </div>
		    

		    <div id="navIcons">
		        <a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
		        <a href="https://www.instagram.com/kaitlin.y.draws/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
		    	<a href="https://www.facebook.com/kaitlin.y.draws/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size='2x' /></a>
		    </div>

		    <br />
		    <br />
		    <div id="navContact">
		        <a href="mailto:kaitlin.k.yang@gmail.com">kaitlin.k.yang@gmail.com</a>
		        <p id="navNumber">(626) 818-8078</p>
		    </div> 
		</div>
	);
}; 

export default NavBar