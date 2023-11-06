import React from 'react';
import '../Desktop.css'

import blue from '../../Images/Illustration/Levi_napkin_blue.jpg'
import blush from '../../Images/Illustration/Levi_napkin_blush.jpg'

function LeviNapkin(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Wedding Napkin Design</h2>
		        <img class="contentImage" src={blush} />
		        
		        <img class="contentImage" src={blue} />
		    </div>
		</div>
    )
}

export default LeviNapkin