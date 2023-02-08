import React from 'react';
import '../Desktop.css'

import YeYe from '../../Images/Illustration/IntheKitchenwithYeYe.jpg'

function Grandpa(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>In the Kitchen with YeYe</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={YeYe} />
		    </div>
		</div>
    )
}

export default Grandpa