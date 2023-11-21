import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Dad from '../../Images/Illustration/Portraits/dad.jpg'
import Mom from '../../Images/Illustration/Portraits/mom.jpg'

function Buddha(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <img class="contentImage" src={Mom} />
		        <img class="contentImage" src={Dad} />
		    </div>
		</div>
    )
}

export default Buddha