import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/TheYearMyLifeWentDowntheToilet.jpg'
import Jacket from '../../Images/Design/PenguinBooks/TheYearMyLifeWentDowntheToiletBookJacket.jpg'


function YearMyLifeWentDowntheToilet(){
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
		            <p class="contentTextHMHTitle">The Year My Life Went Down the Toilet</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, title lettering, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Aishwarya Tandon</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default YearMyLifeWentDowntheToilet
