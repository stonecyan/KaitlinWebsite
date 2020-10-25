import React from "react";
import {Link} from 'react-router-dom'
import './Design.css'
import {withRouter} from 'react-router'

import WinterborneHome1 from '../Images/Design/WinterborneHome1BookCover.jpg'
import WinterborneHome2 from '../Images/Design/WinterborneHome2BookCover.jpg'
import MrWalker from '../Images/Design/MrWalkerStepsOutBookCover.jpg'
import OneSmartSheep from '../Images/Design/OneSmartSheepBookCover.jpg'
import SherlockBonesSeaCreature from '../Images/Design/SherlockBonesSeaCreatureBookCover.jpg'
import RescueLakeWild from '../Images/Design/RescueAtLakeWildBookCover.jpg'
import EvenOdd from '../Images/Design/EvenandOddBookCover.jpg'
import ASingleShard from '../Images/Design/ASingleShardBookCover.jpg'
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
		<div>
			<div class="design-grid-container">
				<div class="designProject">
		    		<img className="designImage"src={WinterborneHome1} />
		    		<div class="designOverlay">
		    			<a href="/Design/WinterborneHomeVV">Winterborne Home for Vengeance and Valor</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={WinterborneHome2} />
		    		<div class="designOverlay">
		    			<a href="/Design/WinterborneHomeMM">Winterborne Home for Mayhem and Mystery</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={RescueLakeWild} />
		    		<div class="designOverlay">
		    			<a href="/Design/LakeWild">Rescue at Lake Wild</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Feather} />
		    		<div class="designOverlay">
		    			<a href="/Design/OfAFeather">Of a Feather</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ASingleShard} />
		    		<div class="designOverlay">
		    			<a href="/Design/ASingleShard">A Single Shard</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={OneSmartSheep} />
		    		<div class="designOverlay">
		    			<a href="/Design/OneSmartSheep">One Smart Sheep</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SherlockBones} />
		    		<div class="designOverlay">
		    			<a href="/Design/SherlockBones">Sherlock Bones</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SherlockBonesSeaCreature} />
		    		<div class="designOverlay">
		    			<a href="/Design/SherlockBonesSeaCreature">Sherlock Bones and the Sea Creature Feature</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MrWalker} />
		    		<div class="designOverlay">
		    			<a href="/Design/MrWalker">Mr. Walker Steps Out</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MrComplain} />
		    		<div class="designOverlay">
		    			<a href="/Design/MrComplain">Mr. Complain Takes the Train</a>
		    		</div>
		    	</div>
		    	
		    	<div class="designProject">
		    		<img className="designImage"src={LightsWonderRock} />
		    		<div class="designOverlay">
		    			<a href="/Design/LightsWonderRock">Lights on Wonder Rock</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={EvenOdd} />
		    		<div class="designOverlay">
		    			<a href="/Design/EvenOdd">Even and Odd</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={GhostCrutchfield} />
		    		<div class="designOverlay">
		    			<a href="/Design/GhostCrutchfield">The Ghost of Crutchfield Hall</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ClosedForSeason} />
		    		<div class="designOverlay">
		    			<a href="/Design/ClosedForSeason">Closed for the Season</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={TimeForAndrew} />
		    		<div class="designOverlay">
		    			<a href="/Design/TimeForAndrew">Time for Andrew</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={DollGarden} />
		    		<div class="designOverlay">
		    			<a href="/Design/DollGarden">The Doll in the Garden</a>
		    		</div>
		    	</div>



		    	
		    	{/* <div class="designProject">
		    		<img className="designImage"src={Chocolate} />
		    		<div class="designOverlay">
		    			<a href="/Design/Chocolate">Chocolate</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Strength} />
		    		<div class="designOverlay">
		    			<a href="/Design/Strength">Strength Magazine</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MagicHouse} />
		    		<div class="designOverlay">
		    			<a href="/Design/MagicHouse">The Magic House</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Podcast} />
		    		<div class="designOverlay">
		    			<a href="/Design/Podcast">Podcast Book Design</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={BubbleTea} />
		    		<div class="designOverlay">
		    			<a href="/Design/BubbleTea">St. Louis Bubble Tea Rebrand</a>
		    		</div>
		    	</div> */}
			</div>

			<div className="design-mobile">
				<a href="/Design/OfAFeather"><img className="designImage"src={Feather} /></a>
				<a href="/Design/SherlockBones"><img className="designImage"src={SherlockBones} /></a>
				<a href="/Design/MrComplain"><img className="designImage"src={MrComplain} /></a>
				<a href="/Design/LightsWonderRock"><img className="designImage"src={LightsWonderRock} /></a>
				<a href="/Design/GhostCrutchfield"><img className="designImage"src={GhostCrutchfield} /></a>
				<a href="/Design/ClosedForSeason"><img className="designImage"src={ClosedForSeason} /></a>
				<a href="/Design/TimeForAndrew"><img className="designImage"src={TimeForAndrew} /></a>
				<a href="/Design/DollGarden"><img className="designImage"src={DollGarden} /></a>
				<a href="/Design/Chocolate"><img className="designImage"src={Chocolate} /></a>
				<a href="/Design/Strength"><img className="designImage"src={Strength} /></a>
				<a href="/Design/MagicHouse"><img className="designImage"src={MagicHouse} /></a>
				<a href="/Design/Podcast"><img className="designImage"src={Podcast} /></a>
				<a href="/Design/BubbleTea"><img className="designImage"src={BubbleTea} /></a>
			</div>
		</div>

	)
}

export default Design