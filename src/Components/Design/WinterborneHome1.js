import React from 'react';
import '../Desktop.css'

import WinterborneHome from '../../Images/Design/HMHBooks/WinterborneHome1.jpg'
import Process from '../../Images/Design/HMHBooks/WinterborneHome1Process.jpg'
import Jacket from '../../Images/Design/HMHBooks/WinterborneHome1Jacket.jpg'

function WinterborneHome1(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
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
		    </div>
		</div>
	)
}

export default WinterborneHome1