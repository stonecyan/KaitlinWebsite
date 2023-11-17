import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/TheSeaKnowsmyName.jpg'

function TheSeaKnowsmyName(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Sea Knows my Name</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Cover design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Cover photographs: Girl &copy; TJ Drysdale; Sea/Shipwreck &copy; Getty Images</p>
		        </div>
		    </div>
		</div>
	)
}

export default TheSeaKnowsmyName