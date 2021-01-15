import React from 'react';
import '../Desktop.css'

import Dad from '../../Images/Illustration/Portraits/dad.jpg'
import Mom from '../../Images/Illustration/Portraits/mom.jpg'

function Buddha(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <img class="contentImage" src={Mom} />
		        <img class="contentImage" src={Dad} />
		    </div>
		</div>
    )
}

export default Buddha