import React from "react";

const NavBar = props => {
	return(
		<div id="navigation" class="navigation">
		    <img class="weblogo" src="~/Images/Logo Self Portrait.jpg" />
		    <img class="mobilelogo" src="~/Images/Logo Picture.jpg" />
		    <div class="navItems">
		        <ul>
		            <li><a href="~/Home/Illustration" onclick="navToggleOff">illustration </a></li>
		            <li><a href="~/Home/Design" onclick="navToggleOff">design</a></li>
		            <li><a href="~/Home/About" onclick="navToggleOff">about</a></li>
		        </ul>
		    </div>

		    <div id="navIcons">
		        <a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
		        <a href="https://www.instagram.com/kaitlin.y.draws/" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
		        <a href="https://www.facebook.com/kaitlin.y.draws/" target="_blank"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
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