import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/TheBreakupLists.jpg'
import Jacket from '../../Images/Design/HMHBooks/TheBreakupListsBookJacket.jpg'

function TheBreakupLists(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Breakup Lists</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction and design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Be Fernandez</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default TheBreakupLists