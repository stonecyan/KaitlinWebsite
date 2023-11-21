import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Chips from '../../Images/Illustration/PotatoChips.jpg'
import ChipsGIF from '../../Images/Illustration/PotatoChips.gif'

function PotatoChips(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Potato Chips GIF</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={ChipsGIF} />
		        <img class="contentImage" src={Chips} />
		    </div>
		</div>
    )
}

export default PotatoChips