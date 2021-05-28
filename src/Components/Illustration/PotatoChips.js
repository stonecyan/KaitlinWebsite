import React from 'react';
import '../Desktop.css'

import Chips from '../../Images/Illustration/PotatoChips.jpg'
import ChipsGIF from '../../Images/Illustration/PotatoChips.gif'

function PotatoChips(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Potato Chips GIF</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={ChipsGIF} />
		        <img class="contentImage" src={Chips} />
		    </div>
		</div>
    )
}

export default PotatoChips