import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Walker from '../../Images/Design/HMHBooks/MrWalkerStepsOut.jpg'
import Jacket from '../../Images/Design/HMHBooks/MrWalkerStepsOutJacket.jpg'
import Case from '../../Images/Design/HMHBooks/MrWalkerCase.jpg'
import Interior from '../../Images/Design/HMHBooks/MrWalkerInterior.jpg'

function MrWalker(){
	const [open, setOpen] = useState(false);
	return(
		<div class="page">
		    <div class="designContentPageBook">
		   		<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Walker} />
		            <p class="contentTextHMHTitle">Mr. Walker Steps Out</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Christophe Jacques</p>
		        </div>
		        <br />
		        <br />
		        <img class="contentImage" src={Case} />
		        <img class="contentImage" src={Jacket} />
		        <img class="contentImage" src={Interior} />
		        
		    </div>
		</div>
	)
}

export default MrWalker