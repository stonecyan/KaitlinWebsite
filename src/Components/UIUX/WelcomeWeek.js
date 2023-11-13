import React from 'react';
import '../Desktop.css'

import WW from '../../Images/UIUX/WelcomeWeek/WelcomeWeekStyleGuide.jpg'
import FamilyNight from '../../Images/UIUX/WelcomeWeek/FamilyNightStyleGuide.jpg'


function WelcomeWeek(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div class="contentHMH">
		            <img class="contentImage" src={WW} />
		            <img class="contentImage" src={FamilyNight} />
	            </div>

		    </div>
		</div>
	)
}

export default WelcomeWeek
