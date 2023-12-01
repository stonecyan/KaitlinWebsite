import React from 'react';
import '../Desktop.css'

import Logo from '../../Images/UIUX/FASNYLogo/FASNYLogoFinal.png'
import LogoLines from '../../Images/UIUX/FASNYLogo/FASNYLogoLinesFinal.png'
import Process1 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess.jpg'
import Process2 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess2.jpg'
import Process3 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess3.jpg'
import Process4 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess4.jpg'
import Process5 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess5.jpg'
import Process6 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess6.jpg'
import Process7 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess7.jpg'
import Process8 from '../../Images/UIUX/FASNYLogo/FASNYLogoProcess8.jpg'


function FASNYLogo(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>FASNY Event Logo Design</h2>
                <div class="contentHMH">
					<img class="contentImage" src={Logo} />
					<img class="contentImage" src={LogoLines} />
				</div>
		        <img class="contentImage" src={Process1} />
                <img class="contentImage" src={Process2} />
		        <img class="contentImage" src={Process3} />
		        <img class="contentImage" src={Process4} />
				<p class="contentText">
					Final concept incoporating initial round ideas 2 and 3:
				</p>
		        <img class="contentImage" src={Process5} />
		        <img class="contentImage" src={Process6} />
		        <img class="contentImage" src={Process7} />
		        <img class="contentImage" src={Process8} />

		    </div>

		</div>
    )
}

export default FASNYLogo