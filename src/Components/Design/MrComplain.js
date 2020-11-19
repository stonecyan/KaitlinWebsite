import React from 'react';
import '../Desktop.css'

import Complain from '../../Images/Design/HMHBooks/MrComplain.jpg'
import Jacket from '../../Images/Design/HMHBooks/MrComplainJacket.jpg'
import Interior from '../../Images/Design/HMHBooks/MrWalkerInterior.jpg'

function MagicHouse(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Complain} />
		            <p class="contentTextHMHTitle">MR. COMPLAIN TAKES THE TRAIN</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText">Art direction, title lettering, design</p>
		        </div>

		        <br />
		        <img class="contentImage" src={Jacket} />
		        <img class="contentImage" src={Interior} />

		    </div>

		</div>
	)
}

export default MagicHouse