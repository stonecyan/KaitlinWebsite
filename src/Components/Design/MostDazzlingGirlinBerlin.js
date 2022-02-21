import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/MostDazzlingGirlinBerlin.jpg'

function MostDazzlingGirlinBerlin(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Most Dazzling Girl in Berlin</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Ana Novaes</p>
		        </div>
		    </div>
		</div>
	)
}

export default MostDazzlingGirlinBerlin