import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Med from '../../Images/Illustration/MedSchool.jpg'

function MedSchool(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Slam Poetry Cover</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Med} />
		    </div>
		</div>
    )
}

export default MedSchool