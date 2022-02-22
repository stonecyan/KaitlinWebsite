import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/RethinktheInternet.jpg'
import Jacket from '../../Images/Design/PenguinBooks/RethinktheInternetJacket.jpg'

function RethinktheInternet(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">ReThink the Internet</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Dave Homer</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default RethinktheInternet