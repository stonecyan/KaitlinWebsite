import React from 'react';
import '../Desktop.css'

import Christmas from '../../Images/Illustration/ChristmasCard.jpg'
import Card from '../../Images/Illustration/Christmas Card/ChristmasCard.jpg'

function ChristmasCard(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Christmas Card</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={Christmas} />
		        <img class="contentImage" src={Card} />
		    </div>
		</div>
    )
}

export default ChristmasCard