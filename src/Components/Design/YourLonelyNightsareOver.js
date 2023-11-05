import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/YourLonelyNightsareOver.jpg'
import Jacket from '../../Images/Design/HMHBooks/YourLonelyNightsareOverBookJacket.jpg'

function YourLonelyNightsareOver(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Your Lonely Nights are Over</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction and design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Monica Loya</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default YourLonelyNightsareOver