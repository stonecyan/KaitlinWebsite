import React from 'react';
import '../Desktop.css'

import Doll from '../../Images/Design/HMHBooks/DollintheGarden.jpg'


function DollGarden(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Doll}/>
		            <p class="contentTextHMHTitle">THE DOLL IN THE GARDEN</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText">Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText">Original photoshoot & photo illustration by David Field / Caterpillar Media</p>
		        </div>
		    </div>
		</div>
	)
}

export default DollGarden