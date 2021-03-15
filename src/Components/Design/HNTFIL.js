import React from 'react';
import '../Desktop.css'

import HNTFILCover from '../../Images/Design/HMHBooks/HNTFIL.jpg'
import Alternatives from '../../Images/Design/HMHBooks/HNTFILAlternativeCovers.jpg'

function HNTFIL(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={HNTFILCover} />
		            <p class="contentTextHMHTitle">How Not to Fall in Love</p>
		            <p class="contentTextHMH">HMH Books for Young Readers</p>
		            <p class="contentTextHMH ItalicText" > Art direction, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Naya Ismael</p>
		        </div>
		        <br />
		 		<p class="contentTextHMHTitle centered">Process</p>
		 		<p class="contentTextHMH centered">Alternative cover comps</p>
		        <img class="contentImage" src={Alternatives} />
		    </div>
		</div>
	)
}

export default HNTFIL
