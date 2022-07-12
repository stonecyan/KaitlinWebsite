import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/TheYearMyLifeWentDowntheToilet.jpg'

function YearMyLifeWentDowntheToilet(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Year My Life Went Down the Toilet</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, title lettering, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Aishwarya Tandon</p>
		        </div>
		    </div>
		</div>
	)
}

export default YearMyLifeWentDowntheToilet
