import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Christmas from '../../Images/Illustration/ChristmasCard.jpg'
import Card from '../../Images/Illustration/Christmas Card/ChristmasCard.jpg'

function ChristmasCard(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Christmas Card</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Christmas} />
		        <img class="contentImage" src={Card} />
		    </div>
		</div>
    )
}

export default ChristmasCard