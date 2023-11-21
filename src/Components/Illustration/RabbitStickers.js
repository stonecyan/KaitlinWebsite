import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Rabbit from '../../Images/Illustration/RabbitStickers.jpg'

function RabbitSamples(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Rabbit Character Samples</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Rabbit} />
		    </div>
		</div>
    )
}

export default RabbitSamples