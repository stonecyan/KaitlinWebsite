import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import WinterborneHome from '../../Images/Design/HMHBooks/WinterborneHome2.jpg'
import Jacket from '../../Images/Design/HMHBooks/WinterborneHome2Jacket.jpg'

function WinterborneHome2(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={WinterborneHome} />
		            <p class="contentTextHMHTitle">Winterborne Home for Vengeance and Valor</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, logo design, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Vivienne To</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default WinterborneHome2