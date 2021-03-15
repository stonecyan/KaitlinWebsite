import React from 'react';
import '../Desktop.css'

import WTBFBCover from '../../Images/Design/HMHBooks/WTBFB.jpg'

function WTBFB(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={WTBFBCover} />
		            <p class="contentTextHMHTitle">Where the Black Flowers Bloom</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Art direction, logo design, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Machira</p>
		        </div>
		    </div>
		</div>
	)
}

export default WTBFB
