import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import CovidImage from '../../Images/Illustration/Covid.jpg'

function Covid(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>COVID Inspired Illustration</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={CovidImage} />
		    </div>
		</div>
    )
}

export default Covid