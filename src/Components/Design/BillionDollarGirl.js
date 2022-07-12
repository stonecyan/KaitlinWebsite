import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/BillionDollarGirl.jpg'
import Jacket from '../../Images/Design/PenguinBooks/BillionDollarGirlJacket.jpg'

function BillionDollarGirl(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Billion Dollar Girl</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Dana SanMar</p>
		        </div>
				<br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default BillionDollarGirl
