import React, {useState} from "react";
import '../Desktop.css'
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'

import DesignProcess from '../../Images/UIUX/TapNY/TAPNYSwagDesignProcess.jpeg'
import DesignLogo from '../../Images/UIUX/TapNY/TAPNYSwagDesignLogo.jpeg'
import Design1 from '../../Images/UIUX/TapNY/TAPNYSwagDesign1.jpeg'
import Design2 from '../../Images/UIUX/TapNY/TAPNYSwagDesign2.jpeg'
import Design3 from '../../Images/UIUX/TapNY/TAPNYSwagDesign3.jpeg'


function TapNY(){
	const [open, setOpen] = useState(false);
	return(
		<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="designContent">
		    	
		    	<div class="contentHMH">
		            <img class="contentImage" src={DesignProcess} />
		            <img class="contentImage" src={DesignLogo} />
	            </div>
	            <div class="threeColumn">
	            	<img class="contentImage" src={Design1} />
	            	<img class="contentImage" src={Design2} />
	            	<img class="contentImage" src={Design3} />
	            </div>

		    </div>
		</div>
	)
}

export default TapNY
