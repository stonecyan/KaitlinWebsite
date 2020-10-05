import React, {Component} from "react";
import LogoSelfPortrait from "../Images/LogoSelfPortrait.jpg"
import LogoPicture from "../Images/LogoPicture.jpg"
import "./NavBar.css"
import {withRouter} from 'react-router'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import  { Breakpoint } from 'react-socks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faFacebookSquare,
	faLinkedin,
	faInstagram
} from "@fortawesome/free-brands-svg-icons"

class NavBar extends Component{

	render(){
		return(
		<div>
			<div class="topnav" id="topnavigation">
			</div>
			<div id="navigation" className="navigation">
			    <img className="weblogo" src={LogoSelfPortrait} />
			    <img className="mobilelogo" src={LogoPicture} />
			    <div className="navItems">
				    <Router>
				        <ul>
				            <li><a href="/Illustration">illustration</a></li>
				            <li><a href="/Design">design</a></li>
				            <li><a href="/About">about</a></li>
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
		</div>

		);
	}

}; 

export default NavBar