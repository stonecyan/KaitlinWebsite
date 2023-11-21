import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import MG from '../../Images/Illustration/MinnieGary.jpg'
import sketch from '../../Images/Illustration/MinnieGary/sketches.jpg'
import invitation from '../../Images/Illustration/MinnieGary/invitation.jpg'

function MinnieGary(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Customized Couple Sticker</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={MG} />
		        <h2>Process Sketch</h2>
		        <img class="contentImage" src={sketch} />
		        <h2>Bridal Shower Invitation</h2>
		        <img class="contentImage" src={invitation} />
		    </div>
		</div>
    )
}

export default MinnieGary