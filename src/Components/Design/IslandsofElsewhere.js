import React from 'react';
import '../Desktop.css'

import Islands from '../../Images/Design/PenguinBooks/TheIslandsofElsewhere.jpg'
import Jacket from '../../Images/Design/PenguinBooks/TheIslandsofElsewhereBookJacket.jpg'

function IslandsofElsewhere(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Islands} />
		            <p class="contentTextHMHTitle">The Islands of Elsewhere</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, title lettering, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Matt Schu</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default IslandsofElsewhere