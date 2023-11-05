import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/WhenYouWishUponaLantern.jpg'
import Jacket from '../../Images/Design/PenguinBooks/WhenYouWishUponaLanternBookJacket.jpg'


function WishUponLantern(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">When You Wish Upon a Lantern</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Kat Tsai</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default WishUponLantern
