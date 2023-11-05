import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/CursedBoysandBrokenHearts.jpg'

function CursedBoysandBrokenHearts(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Cursed Boys and Broken Hearts</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Anne Pomel</p>
		        </div>
		    </div>
		</div>
	)
}

export default CursedBoysandBrokenHearts