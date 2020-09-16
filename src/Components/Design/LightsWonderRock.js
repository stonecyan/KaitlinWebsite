import React from 'react';
import '../ContentPages.css'

import Lights from '../../Images/Design/HMHBooks/LightsonWonderRock.jpg'
import Jacket from '../../Images/Design/HMHBooks/LightsonWonderRockJacket.jpg'

function LightsWonderRock(){
	return(
		<div class="page">
		    <div class="contentPage">
		        <div class="contentHMH">
		            <img class="contentImage" src={Lights} />
		            <p class="contentTextHMHTitle">LIGHTS ON WONDER ROCK</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText">Title lettering, design for US edition</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default LightsWonderRock