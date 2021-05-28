import React from 'react';
import '../Desktop.css'

import Tiger from '../../Images/Illustration/YogaTiger.jpg'

function TigerYoga(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Tiger Yoga</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Tiger} />
		    </div>
		</div>
    )
}

export default TigerYoga