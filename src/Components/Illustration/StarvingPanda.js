import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Panda from '../../Images/Illustration/StarvingPanda.jpg'

function StarvingPanda(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Starving Panda</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Panda} />
		    </div>
		</div>
    )
}

export default StarvingPanda