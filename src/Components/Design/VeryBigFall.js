import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/AVeryBigFall.jpg'
import Samples from '../../Images/Design/PenguinBooks/AVeryBigFallSamples.jpg'
import Case from '../../Images/Design/PenguinBooks/AVeryBigFallCase.jpg'

function VeryBigFall(){
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
		            <p class="contentTextHMHTitle">A Very Big Fall</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Art direction, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Emmy Kastner</p>
		        </div>
		        <br />
		        <p class="contentTextHMHTitle centered">Case Art</p>
		        <br />
		        <img class="contentImage" src={Case} />
		 		<p class="contentTextHMHTitle centered">Interior Samples</p>
		        <img class="contentImage" src={Samples} />
		    </div>
		</div>
	)
}

export default VeryBigFall
