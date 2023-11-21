import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/MostDazzlingGirlinBerlin.jpg'

function MostDazzlingGirlinBerlin(){
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
		            <p class="contentTextHMHTitle">Most Dazzling Girl in Berlin</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Ana Novaes</p>
		        </div>
		    </div>
		</div>
	)
}

export default MostDazzlingGirlinBerlin