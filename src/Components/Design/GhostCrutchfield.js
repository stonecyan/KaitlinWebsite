import React from 'react';
import '../Desktop.css'

import Ghost from '../../Images/Design/HMHBooks/GhostofCrutchfieldHall.jpg'

function GhostCrutchfield(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Ghost} />
		            <p class="contentTextHMHTitle">THE GHOST OF CRUTCHFIELD HALL</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" >Cover design, title lettering</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >
		                Cover photographs: Girl &copy; Kamil Vojnar / Trevillion Images; House &copy; Lee Avison / Trevillion Images; Sky &copy; Trevor Payne / Trevillion Images
		            </p>
		        </div>
		    </div>
		</div>
	)
}

export default GhostCrutchfield