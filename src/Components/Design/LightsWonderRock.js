import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Lights from '../../Images/Design/HMHBooks/LightsonWonderRock.jpg'
import Jacket from '../../Images/Design/HMHBooks/LightsonWonderRockJacket.jpg'

function LightsWonderRock(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Lights} />
		            <p class="contentTextHMHTitle">LIGHTS ON WONDER ROCK</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText">Title lettering, design for US edition</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default LightsWonderRock