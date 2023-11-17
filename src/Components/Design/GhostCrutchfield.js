import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Ghost from '../../Images/Design/HMHBooks/GhostofCrutchfieldHall.jpg'

function GhostCrutchfield(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Ghost} />
		            <p class="contentTextHMHTitle">THE GHOST OF CRUTCHFIELD HALL</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Cover design, title lettering</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >
		                Cover photographs: Girl &copy; Kamil Vojnar / Trevillion Images; House &copy; Lee Avison / Trevillion Images; Sky &copy; Trevor Payne / Trevillion Images
		            </p>
		        </div>
		    </div>
		</div>
	)
}

export default GhostCrutchfield