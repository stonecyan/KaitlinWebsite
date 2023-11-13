import React from 'react';
import '../Desktop.css'

import DesignProcess from '../../Images/UIUX/TapNY/TAPNYSwagDesignProcess.jpeg'
import DesignLogo from '../../Images/UIUX/TapNY/TAPNYSwagDesignLogo.jpeg'
import Design1 from '../../Images/UIUX/TapNY/TAPNYSwagDesign1.jpeg'
import Design2 from '../../Images/UIUX/TapNY/TAPNYSwagDesign2.jpeg'
import Design3 from '../../Images/UIUX/TapNY/TAPNYSwagDesign3.jpeg'


function TapNY(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div class="contentHMH">
		            <img class="contentImage" src={DesignProcess} />
		            <img class="contentImage" src={DesignLogo} />
	            </div>
	            <div class="threeColumn">
	            	<img class="contentImage" src={Design1} />
	            	<img class="contentImage" src={Design2} />
	            	<img class="contentImage" src={Design3} />
	            </div>

		    </div>
		</div>
	)
}

export default TapNY
