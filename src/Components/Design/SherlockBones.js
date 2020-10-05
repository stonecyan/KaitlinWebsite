import React from 'react';
import '../Desktop.css'

import Sherlock from '../../Images/Design/HMHBooks/SherlockBones.jpg'

function SherlockBones(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Sherlock} />

		            <p class="contentTextHMHTitle">SHERLOCK BONES</p>
		            <p class="contentTextHMH">Etch</p>
		            <p class="contentTextHMH ItalicText"> Cover design for US edition</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText"> Compiled from interior illustrations by Renee Treml</p>
		        </div>
		    </div>
		</div>
	)
}

export default SherlockBones