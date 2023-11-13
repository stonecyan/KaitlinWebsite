import React from 'react';
import '../Desktop.css'

import Buddha1 from '../../Images/Illustration/MiniBuddhas/ElephantBuddha.jpg'
import Buddha2 from '../../Images/Illustration/MiniBuddhas/Buddha1.png'
import Buddha3 from '../../Images/Illustration/MiniBuddhas/Buddha2.png'
import Buddha4 from '../../Images/Illustration/MiniBuddhas/Buddha3.png'
import Buddha5 from '../../Images/Illustration/MiniBuddhas/Buddha4.png'
import Buddha6 from '../../Images/Illustration/MiniBuddhas/Buddha5.png'
import Buddha7 from '../../Images/Illustration/MiniBuddhas/Buddha6.png'

function MiniBuddha(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Buddha Statues</h2>
		        <p class="contentText"></p>
		        <div class="threeColumn">	
		        	<img class="contentImage" src={Buddha2} />
		        	<img class="contentImage" src={Buddha3} />
		        	<img class="contentImage" src={Buddha4} />
		        	<img class="contentImage" src={Buddha5} />
		        	<img class="contentImage" src={Buddha6} />
		        	<img class="contentImage" src={Buddha7} />
		        </div>
		        
		    </div>
		</div>
    )
}

export default MiniBuddha