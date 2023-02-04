import React, {Component} from "react";
import LogoSelfPortrait from "../Images/LogoSelfPortrait.jpg"
import LogoPicture from "../Images/LogoPicture.jpg"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faLinkedin,
	faInstagram
} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {bool} from 'prop-types'
import {StyledMobileNavBar} from './MobileNavBarStyled'

const MobileNavBar = ({open}) => {
	return(
	<StyledMobileNavBar open={open}>
			<img className="weblogo" src={LogoSelfPortrait} />
			<img className="mobilelogo" src={LogoPicture} />
			<div className="navItems">
				<Router>
					<ul className="navItemsMain">
						<li><a href="/Illustration">illustration</a></li>
						<li><a  href="/BookDesign">book design</a></li>
						<li className="navItemsMain"><a href="/About">about</a></li>
					</ul>
					
				</Router>
				
			</div>

			<br/>
			<br/>
			<div id="navIcons">
				<a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='lg' /></a>
				<a href="https://www.instagram.com/kaitlin.k.draws/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='lg' /></a>
				<a href="mailto:kaitlin.k.yang@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size='lg' /></a>
			</div>

			

					
		</StyledMobileNavBar>

	);
MobileNavBar.propTypes = {
	open: Boolean.isRequired,
}
}
 

export default MobileNavBar;