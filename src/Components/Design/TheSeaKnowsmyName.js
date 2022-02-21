import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/TheSeaKnowsmyName.jpg'

function TheSeaKnowsmyName(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">The Sea Knows my Name</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Cover design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Cover photographs: Girl &copy; TJ Drysdale; Sea/Shipwreck &copy; Getty Images</p>
		        </div>
		    </div>
		</div>
	)
}

export default TheSeaKnowsmyName