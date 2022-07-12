import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/TheHiddenDragon.jpg'

function HiddenDragon(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Hidden Dragon</p>
		            <p class="contentTextHMH">Peguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Vivienne To</p>
		        </div>
		    </div>
		</div>
	)
}

export default HiddenDragon
