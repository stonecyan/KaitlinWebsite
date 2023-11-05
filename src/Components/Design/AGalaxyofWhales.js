import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/AGalaxyofWhales.jpg'
import Jacket from '../../Images/Design/HMHBooks/AGalaxyofWhalesBookJacket.jpg'

function AGalaxyofWhales(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">A Galaxy of Whales</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Bao Liu</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default AGalaxyofWhales