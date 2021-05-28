import React from 'react';
import '../Desktop.css'

import Girl from '../../Images/Illustration/GirlStickers.jpg'

function GirlStickers(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Girl Character Samples</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Girl} />
		    </div>
		</div>
    )
}

export default GirlStickers