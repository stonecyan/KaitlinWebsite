import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/AsYouWalkonBy.jpg'

function WalkonBy(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">As You Walk on By</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Cannaday Chapman</p>
		        </div>
		    </div>
		</div>
	)
}

export default WalkonBy