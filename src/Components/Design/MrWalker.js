import React from 'react';
import '../Desktop.css'

import Walker from '../../Images/Design/HMHBooks/MrWalkerStepsOut.jpg'
import Jacket from '../../Images/Design/HMHBooks/MrWalkerStepsOutJacket.jpg'

function MrWalker(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Walker} />
		            <p class="contentTextHMHTitle">Mr. Walker Steps Out</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Christophe Jacques</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default MrWalker