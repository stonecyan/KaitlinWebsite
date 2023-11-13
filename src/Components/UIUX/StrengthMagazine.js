import React from 'react';
import '../Desktop.css'

import SM1 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread1.jpg'
import SM2 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread2.jpg'
import SM3 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread3.jpg'
import SM4 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread4.jpg'
import SM5 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread5.jpg'
import SM6 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread6.jpg'
import SM7 from '../../Images/UIUX/StrengthMagazine/StrengthMagazineSpread7.jpg'
import styleGuide from '../../Images/UIUX/StrengthMagazine/StrengthMagazineStyleGuide.jpg'



function StrengthMagazine(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div class="contentHMH">
		            <img class="contentImage" src={SM1} />
		            <img class="contentImage" src={SM2} />
		            <img class="contentImage" src={SM3} />
		            <img class="contentImage" src={SM4} />
		            <img class="contentImage" src={SM5} />
		            <img class="contentImage" src={SM6} />
		            <img class="contentImage" src={SM7} />
		            <img class="contentImage" src={styleGuide} />
	            </div>

		    </div>
		</div>
	)
}

export default StrengthMagazine
