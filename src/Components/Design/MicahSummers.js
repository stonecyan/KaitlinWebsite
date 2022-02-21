import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/99BoyfriendsofMicahSummers.jpg'

function MicahSummers(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">99 Boyfriends of Micah Summers</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Anne Pomel</p>
		        </div>
		    </div>
		</div>
	)
}

export default MicahSummers