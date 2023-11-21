import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import YeYe from '../../Images/Illustration/IntheKitchenwithYeYe.jpg'

function Grandpa(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>In the Kitchen with YeYe</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={YeYe} />
		    </div>
		</div>
    )
}

export default Grandpa