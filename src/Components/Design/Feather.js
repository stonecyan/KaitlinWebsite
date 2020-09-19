import React from 'react';
import '../ContentPages.css'

import OfFeather from '../../Images/Design/HMHBooks/OfAFeather.jpg'

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
		    </div>
		</div>
	)
}

export default Feather