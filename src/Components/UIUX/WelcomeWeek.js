import React, {useState} from "react";
import '../Desktop.css'
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'

import WW from '../../Images/UIUX/WelcomeWeek/WelcomeWeekStyleGuide.jpg'
import FamilyNight from '../../Images/UIUX/WelcomeWeek/FamilyNightStyleGuide.jpg'


function WelcomeWeek(){
	const [open, setOpen] = useState(false);
	return(
		<div class="page">
				<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="designContent">
		    	<div class="contentHMH">
		            <img class="contentImage" src={WW} />
		            <img class="contentImage" src={FamilyNight} />
	            </div>

		    </div>
		</div>
	)
}

export default WelcomeWeek
