import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import WTBFBCover from '../../Images/Design/HMHBooks/WTBFB.jpg'

function WTBFB(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={WTBFBCover} />
		            <p class="contentTextHMHTitle">Where the Black Flowers Bloom</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Art direction, logo design, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Machira</p>
		        </div>
		    </div>
		</div>
	)
}

export default WTBFB
