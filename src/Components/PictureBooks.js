import React from "react";
import {Link} from 'react-router-dom'
import './DesignSub.css'
import {withRouter} from 'react-router'

import MrWalker from '../Images/Design/MrWalkerStepsOutBookCover.jpg'
import MrComplain from '../Images/Design/MrComplainBookCover.jpg'
import LightsWonderRock from '../Images/Design/LightsonWonderRockBookCover.jpg'
import Wayward from '../Images/Design/WaywardCreaturesBookCover.jpg'
import PrincessUnlimited from '../Images/Design/PrincessUnlimitedBookCover.jpg'

import VeryBigFall from '../Images/Design/AVeryBigFallBookCover.jpg'

const PictureBook = props => {
	return(
		<div>
			<div class="design-grid-container">
				<div class="designProject">
		    		<img className="designImage"src={VeryBigFall} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/VeryBigFall"></a>
		    		</div>
		    	</div>

				<div class="designProject">
		    		<img className="designImage"src={PrincessUnlimited} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/PrincessUnlimited"></a>
		    		</div>
		    	</div>

		    	<div class="designProject">
		    		<img className="designImage"src={MrWalker} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MrWalker"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MrComplain} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MrComplain"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={LightsWonderRock} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/LightsWonderRock"></a>
		    		</div>
		    	</div>
			</div>

			<div className="design-mobile">
				<a href="/BookDesign/VeryBigFall"><img className="designImage"src={VeryBigFall} /></a>
				<a href="/BookDesign/PrincessUnlimited"><img className="designImage"src={PrincessUnlimited} /></a>
				<a href="/BookDesign/MrWalker"><img className="designImage"src={MrWalker} /></a>
				<a href="/BookDesign/MrComplain"><img className="designImage"src={MrComplain} /></a>
				<a href="/BookDesign/LightsWonderRock"><img className="designImage"src={LightsWonderRock} /></a>
			</div>
		</div>

	)
}

export default PictureBook