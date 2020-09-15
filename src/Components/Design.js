import React from "react";
import {NavLink} from 'react-router-dom'
import './Design.css'

import Feather from '../Images/Design/OfAFeatherBookCover.jpg'
import SherlockBones from '../Images/Design/SherlockBonesBookCover.jpg'
import MrComplain from '../Images/Design/MrComplainBookCover.jpg'
import GhostCrutchfield from '../Images/Design/GhostofCrutchfieldHallBookCover.jpg'
import LightsWonderRock from '../Images/Design/LightsonWonderRockBookCover.jpg'
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
	    		<img className="gridImage"src={Feather} />
            	<NavLink to="/Design/OfAFeather" activeClassName="designOverlay">Of a Feather</NavLink>
	        </div>

	        <div class="designProject">
	    		<img className="gridImage"src={SherlockBones} />
            	<NavLink to="/Design/SherlockBones" activeClassName="designOverlay">SherlockBones</NavLink>
	        </div>

		</div>
	)
}

export default Design