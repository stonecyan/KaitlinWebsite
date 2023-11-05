import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/FromLittleTokyoWithLove.jpg'

function FromLittleTokyoWithLove(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">From Little Tokyo With Love</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction and design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Bron Payne</p>
		        </div>
		    </div>
		</div>
	)
}

export default FromLittleTokyoWithLove