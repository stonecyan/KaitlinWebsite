import React from 'react';
import '../Desktop.css'

import finalCover from '../../Images/Design/Chocolate/final cover.jpg'
import asdf from '../../Images/Design/Chocolate/9780544175662_lres-1.gif'
import mockup from '../../Images/Design/Chocolate/chocolate book mockup.jpg'

function Chocolate(){
	return(
		<div class="page">
		    <div class="designContentPage">
		        <h2>Chocolate Book Cover</h2>
		        <p class="contentText">I redesigned the front and back cover of this YA non-fiction novel, Chocolate by Kay Frydenborg. I collaged and photoshopped the chocolate stack and melting drips and hand lettered the title, Chocolate.</p>
		        <a class="contentText" id="chocolateLink" href="https://www.amazon.com/Chocolate-Science-Secrets-Worlds-Favorite/dp/0358112060/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1549983409&sr=8-3">Check it out on Amazon here!</a>
		        <div class="row">
		            <div class="column">
		                <p class="chocolateText">Final Redesign by me</p>
		                <img class="contentImage" src={finalCover} />
		            </div>
		            <div class="column">
		                <p class="chocolateText">Initial Cover</p>
		                <img class="contentImage" src={asdf} />
		            </div>
		        </div>
		        <img class="contentImage" src={mockup} />
		    </div>
		</div>
	)
}

export default Chocolate