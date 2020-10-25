import React from 'react';
import '../Desktop.css'

import Sheep from '../../Images/Design/HMHBooks/OneSmartSheep.jpg'
import Jacket from '../../Images/Design/HMHBooks/OneSmartSheepJacket.jpg'

function OneSmartSheep(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Sheep} />
		            <p class="contentTextHMHTitle">One Smart Sheep</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Jane Manning</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default OneSmartSheep