import React from 'react';
import '../Desktop.css'

import LakeWild from '../../Images/Design/HMHBooks/RescueAtLakeWild.jpg'
import Jacket from '../../Images/Design/HMHBooks/RescueAtLakeWildJacket.jpg'

function RescueLakeWild(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={LakeWild} />
		            <p class="contentTextHMHTitle">Rescue at Lake Wild</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Maike Plenzke</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default RescueLakeWild