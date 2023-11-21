import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import blue from '../../Images/Illustration/Levi_napkin_blue.jpg'
import blush from '../../Images/Illustration/Levi_napkin_blush.jpg'

function LeviNapkin(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Wedding Napkin Design</h2>
		        <img class="contentImage" src={blush} />
		        
		        <img class="contentImage" src={blue} />
		    </div>
		</div>
    )
}

export default LeviNapkin