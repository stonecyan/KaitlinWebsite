import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './UIUX.css'
import {withRouter} from 'react-router'
import Burger from './Hamburger.js'
import MobileNavBar from './MobileNavBar.js'

import Bobabar from '../Images/UIUX/Bobabar/BobabarCover.jpg'
import StrengthMagazine from '../Images/UIUX/StrengthMagazine/StrengthMagazineSpread1.jpg'
import TapNY from '../Images/UIUX/TapNY/TAPNYSwagDesignCover.jpeg'
import WelcomeWeek from '../Images/UIUX/WelcomeWeek/WelcomeWeekCover.jpg'



export default function UIUX(){
	const [open, setOpen] = useState(false);

	return(
		<div>
			<div class="uiux-grid-container-main">
				<div class="uiuxProject">
		    		<img className="uiuxImage"src={Bobabar} loading="lazy"/>
		    		<div class="uiuxOverlay">
		    			<a href="/Design/Bobabar"></a>
		    		</div>
		    	</div>
		    	<div class="uiuxProject">
		    		<img className="uiuxImage"src={StrengthMagazine} loading="lazy"/>
		    		<div class="uiuxOverlay">
		    			<a href="/Design/StrengthMagazine"></a>
		    		</div>
		    	</div>
		    	<div class="uiuxProject">
		    		<img className="uiuxImage"src={TapNY} loading="lazy"/>
		    		<div class="uiuxOverlay">
		    			<a href="/Design/TAPNY"></a>
		    		</div>
		    	</div>
		    	<div class="uiuxProject">
		    		<img className="uiuxImage"src={WelcomeWeek} loading="lazy"/>
		    		<div class="uiuxOverlay">
		    			<a href="/Design/StyleGuides"></a>
		    		</div>
		    	</div>
			</div>

			<div className="uiux-mobile">
				<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
				<div className="mobileContent">
				<a href="/Design/Bobabar"><img className="designImage"src={Bobabar} loading="lazy"/></a>
				<a href="/Design/StrengthMagazine"><img className="designImage"src={StrengthMagazine} loading="lazy"/></a>
				<a href="/Design/TAPNY"><img className="designImage"src={TapNY} loading="lazy"/></a>
				<a href="/Design/StyleGuides"><img className="designImage"src={WelcomeWeek} loading="lazy"/></a>

				</div>
			</div>
		</div>

	)
}
