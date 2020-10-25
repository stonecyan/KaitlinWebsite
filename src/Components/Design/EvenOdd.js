import React from 'react';
import '../Desktop.css'

import Even from '../../Images/Design/HMHBooks/EvenandOdd.jpg'

function EvenOdd(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Even} />
		            <p class="contentTextHMHTitle">Even and Odd</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Brandon Dorman</p>
		        </div>
		    </div>
		</div>
	)
}

export default EvenOdd