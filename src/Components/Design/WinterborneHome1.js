import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import WinterborneHome from '../../Images/Design/HMHBooks/WinterborneHome1.jpg'
import Process from '../../Images/Design/HMHBooks/WinterborneHome1Process.jpg'
import Jacket from '../../Images/Design/HMHBooks/WinterborneHome1Jacket.jpg'

import WinterborneHome2 from '../../Images/Design/HMHBooks/WinterborneHome2.jpg'
import Jacket2 from '../../Images/Design/HMHBooks/WinterborneHome2Jacket.jpg'

function WinterborneHome1(){
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
		 		<p class="contentTextHMHTitle centered">Process</p>
		 		<p class="contentTextHMH centered">Initial concept sketches</p>
		        <img class="contentImage" src={Process} />
				<p class="contentText">Book 2 of the series:</p>
				<div class="contentHMH">
				<img class="contentImage" src={WinterborneHome2} />
				</div>
				<br/>
				<img class="contentImage" src={Jacket2} />


		    </div>
		</div>
	)
}

export default WinterborneHome1