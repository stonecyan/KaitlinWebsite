import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/FromLittleTokyoWithLove.jpg'

function FromLittleTokyoWithLove(){
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
		            <p class="contentTextHMHTitle">From Little Tokyo With Love</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction and design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Bron Payne</p>
		        </div>
		    </div>
		</div>
	)
}

export default FromLittleTokyoWithLove