import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/TheCurseofEelgrassBog.jpg'
import Jacket from '../../Images/Design/HMHBooks/TheCurseofEelgrassBogBookJacket.jpg'

function TheCurseofEelgrassBog(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Curse of Eelgras Bog</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by James Firnhaber</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default TheCurseofEelgrassBog