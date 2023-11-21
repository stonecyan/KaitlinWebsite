import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Tiger from '../../Images/Illustration/YogaTiger.jpg'

function TigerYoga(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Tiger Yoga</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Tiger} />
		    </div>
		</div>
    )
}

export default TigerYoga