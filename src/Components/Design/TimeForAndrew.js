import React from 'react';
import '../Desktop.css'

import Andrew from '../../Images/Design/HMHBooks/TimeForAndrew.jpg'

function TimeForAndrew(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Andrew} />
		            <p class="contentTextHMHTitle">TIME FOR ANDREW</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Cover design, title lettering</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Photo illustration by David Field / Caterpillar Media</p>
		            <p class="contentTextHMH2 ItalicText" >Stairs &copy; Joanna Czogala / Trevillion Images</p>
		        </div>
		    </div>
		</div>
	)
}

export default TimeForAndrew