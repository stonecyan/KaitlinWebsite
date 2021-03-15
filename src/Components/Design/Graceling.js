import React from 'react';
import '../Desktop.css'

import GracelingCover from '../../Images/Design/HMHBooks/Graceling.jpg'
import Jacket from '../../Images/Design/HMHBooks/GracelingJacket.jpg'

function Graceling(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={GracelingCover} />
		            <p class="contentTextHMHTitle">Graceling The Graphic Novel</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Gareth Hinds</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default Graceling
