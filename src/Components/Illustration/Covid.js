import React from 'react';
import '../Desktop.css'

import CovidImage from '../../Images/Illustration/Covid.jpg'

function Covid(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>COVID Inspired Illustration</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={CovidImage} />
		    </div>
		</div>
    )
}

export default Covid