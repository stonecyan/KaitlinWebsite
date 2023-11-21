import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Sherlock from '../../Images/Design/HMHBooks/SherlockBonesSeaCreature.jpg'

function SherlockBonesSeaCreature(){
	const [open, setOpen] = useState(false);
	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Sherlock} />
		            <p class="contentTextHMHTitle">Sherlock Bones and the Sea-Creature Feature</p>
		            <p class="contentTextHMH">Etch</p>
		            <p class="contentTextHMH ItalicText"> Cover design for US edition</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText"> Compiled from interior illustrations by Renee Treml</p>
		        </div>
		    </div>
		</div>
	)
}

export default SherlockBonesSeaCreature