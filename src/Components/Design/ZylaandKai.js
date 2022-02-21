import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/ZylaandKai.jpg'
import Jacket from '../../Images/Design/PenguinBooks/ZylaandKaiJacket.jpg'

function ZylaandKai(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Zyla and Kai</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, title lettering, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Adriana Bellet</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default ZylaandKai