import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Complain from '../../Images/Design/HMHBooks/MrComplain.jpg'
import Jacket from '../../Images/Design/HMHBooks/MrComplainJacket.jpg'
import Interior from '../../Images/Design/HMHBooks/MrComplainInterior.jpg'

function MagicHouse(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Complain} />
		            <p class="contentTextHMHTitle">MR. COMPLAIN TAKES THE TRAIN</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText">Art direction, title lettering, design</p>
		        </div>

		        <br />
		        <img class="contentImage" src={Jacket} />
		        <img class="contentImage" src={Interior} />

		    </div>

		</div>
	)
}

export default MagicHouse