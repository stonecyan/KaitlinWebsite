import React from 'react';
import '../Desktop.css'

import Rabbit from '../../Images/Illustration/RabbitStickers.jpg'

function RabbitSamples(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Rabbit Character Samples</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Rabbit} />
		    </div>
		</div>
    )
}

export default RabbitSamples