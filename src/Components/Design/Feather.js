import React from 'react';
import '../Desktop.css'

import OfFeather from '../../Images/Design/HMHBooks/OfAFeather.jpg'
import Jacket from '../../Images/Design/HMHBooks/OfAFeatherJacket.jpg'

function Feather(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={OfFeather} />
		            <p class="contentTextHMHTitle">OF A FEATHER</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Izzy Burton</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default Feather