import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import PrincessUnlimitedCover from '../../Images/Design/HMHBooks/PrincessUnlimited.jpg'
import Samples from '../../Images/Design/HMHBooks/PrincessUnlimitedSamples.jpg'
import Jacket from '../../Images/Design/HMHBooks/PrincessUnlimitedJacket.jpg'

function PrincessUnlimited(){
	const [open, setOpen] = useState(false);
	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={PrincessUnlimitedCover} />
		            <p class="contentTextHMHTitle">Princess Unlimited</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Art direction, logo design, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Raissa Figueroa</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		 		<p class="contentTextHMHTitle centered">Interior Samples</p>
		        <img class="contentImage" src={Samples} />
		    </div>
		</div>
	)
}

export default PrincessUnlimited
