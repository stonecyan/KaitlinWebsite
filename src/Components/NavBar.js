import React, {Component} from "react";
import LogoSelfPortrait from "../Images/LogoSelfPortrait.jpg"
import LogoPicture from "../Images/LogoPicture.jpg"
import "./NavBar.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faLinkedin,
	faInstagram
} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


class NavBar extends Component{
	
	render(){
		return(
		<div>
			
			<div id="navigation" className="navigation">
			    <img className="weblogo" src={LogoSelfPortrait} />
			    <img className="mobilelogo" src={LogoPicture} />
			    <div className="navItems">
				    <Router>
				        <ul className="navItemsMain">
				            <li><a href="/Illustration">illustration</a></li>
				            <li><a  href="/BookDesign">book design</a>
					            <ul>
					            <li id="youngAdult"><a href="/YoungAdult">young adult</a></li>
					            <li><a href="/MiddleGrade">middle grade</a></li>
					            <li><a href="/PictureBooks">picture books</a></li>
					            </ul>
				            </li>
				            <li className="navItemsMain"><a href="/About">about</a></li>
				        </ul>
				        
			        </Router>
			    </div>

			    

			    <br />
			    <br />
			    
			    <div id="navIcons">
			        <a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='1x' /></a>
			        <a href="https://www.instagram.com/kaitlin.k.draws/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
					    <a href="mailto:kaitlin.k.yang@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size='1x' /></a>			    
				</div>
			</div>
		</div>

		);
	}

}; 

export default NavBar