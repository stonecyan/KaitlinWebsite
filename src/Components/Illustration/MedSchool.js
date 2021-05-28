import React from 'react';
import '../Desktop.css'

import Med from '../../Images/Illustration/MedSchool.jpg'

function MedSchool(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Slam Poetry Cover</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Med} />
		    </div>
		</div>
    )
}

export default MedSchool