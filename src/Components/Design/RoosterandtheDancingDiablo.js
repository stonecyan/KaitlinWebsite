import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/RoosterandtheDancingDiablo.jpg'

function RoosterandtheDancingDiablo(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Rooster and the Dancing Diablo</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Pablo Leon</p>
		        </div>
		    </div>
		</div>
	)
}

export default RoosterandtheDancingDiablo