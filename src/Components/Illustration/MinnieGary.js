import React from 'react';
import '../Desktop.css'

import MG from '../../Images/Illustration/MinnieGary.jpg'
import sketch from '../../Images/Illustration/MinnieGary/sketches.jpg'
import invitation from '../../Images/Illustration/MinnieGary/invitation.jpg'

function MinnieGary(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Customized Couple Sticker</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={MG} />
		        <h2>Process Sketch</h2>
		        <img class="contentImage" src={sketch} />
		        <h2>Bridal Shower Invitation</h2>
		        <img class="contentImage" src={invitation} />
		    </div>
		</div>
    )
}

export default MinnieGary