import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/AverilOffline.jpg'
import Jacket from '../../Images/Design/HMHBooks/AverilOfflineBookJacket.jpg'

function AverilOffline(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Averil Offline</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Ran Zheng</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default AverilOffline