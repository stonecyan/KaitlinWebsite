import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/TheVanishingDeep.jpg'

function TheVanishingDeep(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Vanishing Deep</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Photo Illustration by Jorge Luis Miraldo(aka Shorsh)</p>
		        </div>
		    </div>
		</div>
	)
}

export default TheVanishingDeep