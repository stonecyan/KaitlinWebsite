import React from 'react';
import '../ContentPages.css'

import Panda from '../../Images/Illustration/StarvingPanda.jpg'

function StarvingPanda(){
    return(
    	<div class="page">
		    <div class="contentPage">
		        <h2>Starving Panda</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Panda} />
		    </div>
		</div>
    )
}

export default StarvingPanda