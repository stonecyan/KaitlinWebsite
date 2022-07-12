import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/LosMonstruos.jpg'

function LosMonstruos(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Felice and the Wailing Woman</p>
		            <p class="contentTextHMH">Penguin Young Readers</p>
		            <p class="contentTextHMH ItalicText" >Art direction, logo lettering, jacket design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" >Illustration by Pablo Leon</p>
		        </div>
		    </div>
		</div>
	)
}

export default LosMonstruos
