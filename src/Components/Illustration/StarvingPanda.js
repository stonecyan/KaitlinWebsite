import React from 'react';
import '../Desktop.css'

import Panda from '../../Images/Illustration/StarvingPanda.jpg'

function StarvingPanda(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Starving Panda</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Panda} />
		    </div>
		</div>
    )
}

export default StarvingPanda