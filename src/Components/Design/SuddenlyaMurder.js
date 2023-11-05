import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/HMHBooks/SuddenlyaMurder.jpg'
import Jacket from '../../Images/Design/HMHBooks/SuddenlyaMurderBookJacket.jpg'

function SuddenlyaMurder(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Suddenly a Murder</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction and design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Vasya Kolotusha</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default SuddenlyaMurder