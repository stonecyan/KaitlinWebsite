import React, {useState} from "react";
import '../Desktop.css'
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'

import Cover from '../../Images/Design/PenguinBooks/BeautyandtheBesharam.jpg'
import Jacket from '../../Images/Design/PenguinBooks/BeautyandtheBesharamJacket.jpg'

function BeautyandtheBesharam(){
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
		            <p class="contentTextHMHTitle">Beauty and the Besharam</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, Jacket illustrations, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Cover model and background wall &copy; Shutterstock </p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default BeautyandtheBesharam