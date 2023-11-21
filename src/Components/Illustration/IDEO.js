import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Illustration/IDEO/IDEOCover.jpg'
import Page from '../../Images/Illustration/IDEO/IdeoPage2.jpg'
import IDEOCover from '../../Images/Illustration/IDEO.jpg'

function IDEO(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage" id="ideoPage">
		        <h2>EC Book Challenge</h2>
		        <p class="contentText">
		            Earlier this year, OpenIDEO and William Penn Foundation launched the #ECBookChallenge, an open call for children’s book manuscripts.
		            I was thrilled to be a part of the challenge as a work for hire illustrator! I collaborated with author, Lesile Bockol, to bring the manuscript and idea alive.
		            Over 500 manuscripts were submitted and the Top Manuscript has been announced. Check it out <a id="aboutEmail" href="https://ideo.to/ybJhVJ">here</a>.
		        </p>
		        <img class="contentImage" src={Cover} />
		        <img class="contentImage" src={Page} />
		        <img class="contentImage" src={IDEOCover} />
		    </div>
		</div>
    )
}

export default IDEO