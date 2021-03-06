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
				            <li><a href="/BookDesign">book design</a></li>
				            <li><a href="/About">about</a></li>
				        </ul>
			        </Router>
			    </div>
			    

			    <br />
			    <br />
			    
			    <div id="navIcons">
			        <a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='1x' /></a>
			        <a href="https://www.instagram.com/kaitlin.k.draws/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
			    </div>

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