import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Girl from '../../Images/Illustration/GirlStickers.jpg'

function GirlStickers(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Girl Character Samples</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Girl} />
		    </div>
		</div>
    )
}

export default GirlStickers