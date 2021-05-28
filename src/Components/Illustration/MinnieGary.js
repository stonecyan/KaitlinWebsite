import React from 'react';
import '../Desktop.css'

import MG from '../../Images/Illustration/MinnieGary.jpg'

function MinnieGary(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Customized Couple Sticker</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={MG} />
		    </div>
		</div>
    )
}

export default MinnieGary