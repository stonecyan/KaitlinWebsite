import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Creature from '../../Images/Design/HMHBooks/WaywardCreatures.jpg'
import Jacket from '../../Images/Design/HMHBooks/WaywardCreaturesJacket.jpg'
import Alternatives from '../../Images/Design/HMHBooks/WaywardCreaturesAlternatives.jpg'

function WaywardCreatures(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Creature} />
		            <p class="contentTextHMHTitle">Wayward Creatures</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Junyi Wu</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		        <p class="contentTextHMH centered">Alternative type options</p>
		        <img class="contentImage" src={Alternatives} />
		    </div>
		</div>
	)
}

export default WaywardCreatures