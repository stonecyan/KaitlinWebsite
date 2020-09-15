import React from "react";
import {Link} from 'react-router-dom'
import './Design.css'

import Feather from '../Images/Design/OfAFeatherBookCover.jpg'
import SherlockBones from '../Images/Design/SherlockBonesBookCover.jpg'
import MrComplain from '../Images/Design/MrComplainBookCover.jpg'
import LightsWonderRock from '../Images/Design/LightsonWonderRockBookCover.jpg'
import GhostCrutchfield from '../Images/Design/GhostofCrutchfieldHallBookCover.jpg'
import ClosedForSeason from '../Images/Design/ClosedForTheSeasonBookCover.jpg'
import DollGarden from '../Images/Design/DollinTheGardenBookCover.jpg'
import TimeForAndrew from '../Images/Design/TimeForAndrewBookCover.jpg'
import Chocolate from '../Images/Design/Chocolate Book Design.jpg'
import Strength from '../Images/Design/Strength Magazine Design.jpg'
import MagicHouse from '../Images/Design/The Magic House Design.jpg'
import Podcast from '../Images/Design/Podcast Book Design.jpg'
import BubbleTea from '../Images/Design/St. Louis Bubble Tea Rebrand.jpg'

const Design = props => {
	return(
		<div class="design-grid-container">
			<div class="designProject">
	    		<img className="designImage"src={Feather} />
	    		<div class="designOverlay">
	    			<Link to="/Design/OfAFeather">Of a Feather</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={SherlockBones} />
	    		<div class="designOverlay">
	    			<Link to="/Design/SherlockBones">Sherlock Bones</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={MrComplain} />
	    		<div class="designOverlay">
	    			<Link to="/Design/MrComplain">Mr. Complain Takes the Train</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={LightsWonderRock} />
	    		<div class="designOverlay">
	    			<Link to="/Design/LightsWonderRock">Lights on Wonder Rock</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={GhostCrutchfield} />
	    		<div class="designOverlay">
	    			<Link to="/Design/GhostCrutchfield">The Ghost of Crutchfield Hall</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={ClosedForSeason} />
	    		<div class="designOverlay">
	    			<Link to="/Design/ClosedForSeason">Closed for the Season</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={DollGarden} />
	    		<div class="designOverlay">
	    			<Link to="/Design/DollGarden">The Doll in the Garden</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={Chocolate} />
	    		<div class="designOverlay">
	    			<Link to="/Design/Chocolate">Chocolate</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={Strength} />
	    		<div class="designOverlay">
	    			<Link to="/Design/Strength">Strength Magazine</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={MagicHouse} />
	    		<div class="designOverlay">
	    			<Link to="/Design/MagicHouse">The Magic House</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={Podcast} />
	    		<div class="designOverlay">
	    			<Link to="/Design/Podcast">Podcast Book Design</Link>
	    		</div>
	    	</div>
	    	<div class="designProject">
	    		<img className="designImage"src={BubbleTea} />
	    		<div class="designOverlay">
	    			<Link to="/Design/BubbleTea">St. Louis Bubble Tea Rebrand</Link>
	    		</div>
	    	</div>
		</div>

	)
}

export default Design