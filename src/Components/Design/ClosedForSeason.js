import React from 'react';
import '../Desktop.css'

import Closed from '../../Images/Design/HMHBooks/ClosedForTheSeason.jpg'


function ClosedForSeason(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Closed} />

		            <p class="contentTextHMHTitle">CLOSED FOR THE SEASON</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <br />
		            <p class="contentTextHMH ItalicText">Cover design, title lettering</p>
		            <p class="contentTextHMH ItalicText">Photo illustration by David Field / Caterpillar Media</p>
		            <p class="contentTextHMH ItalicText">Horse &copy; Trevor Payne / Arcangel</p>
		        </div>
		    </div>
		</div>
	)
}

export default ClosedForSeason