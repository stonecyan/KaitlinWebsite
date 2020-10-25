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
		    			<a href="/BookDesign/WinterborneHomeVV">Winterborne Home for Vengeance and Valor</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={WinterborneHome2} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WinterborneHomeMM">Winterborne Home for Mayhem and Mystery</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={RescueLakeWild} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/LakeWild">Rescue at Lake Wild</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Feather} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/OfAFeather">Of a Feather</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ASingleShard} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/ASingleShard">A Single Shard</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={OneSmartSheep} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/OneSmartSheep">One Smart Sheep</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SherlockBones} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/SherlockBones">Sherlock Bones</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SherlockBonesSeaCreature} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/SherlockBonesSeaCreature">Sherlock Bones and the Sea Creature Feature</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MrWalker} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MrWalker">Mr. Walker Steps Out</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MrComplain} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MrComplain">Mr. Complain Takes the Train</a>
		    		</div>
		    	</div>
		    	
		    	<div class="designProject">
		    		<img className="designImage"src={LightsWonderRock} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/LightsWonderRock">Lights on Wonder Rock</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={EvenOdd} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/EvenOdd">Even and Odd</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={GhostCrutchfield} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/GhostCrutchfield">The Ghost of Crutchfield Hall</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ClosedForSeason} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/ClosedForSeason">Closed for the Season</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={TimeForAndrew} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TimeForAndrew">Time for Andrew</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={DollGarden} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/DollGarden">The Doll in the Garden</a>
		    		</div>
		    	</div>



		    	
		    	{/* <div class="designProject">
		    		<img className="designImage"src={Chocolate} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/Chocolate">Chocolate</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Strength} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/Strength">Strength Magazine</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MagicHouse} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MagicHouse">The Magic House</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Podcast} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/Podcast">Podcast Book Design</a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={BubbleTea} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/BubbleTea">St. Louis Bubble Tea Rebrand</a>
		    		</div>
		    	</div> */}
			</div>

			<div className="design-mobile">
				<a href="/BookDesign/OfAFeather"><img className="designImage"src={Feather} /></a>
				<a href="/BookDesign/SherlockBones"><img className="designImage"src={SherlockBones} /></a>
				<a href="/BookDesign/MrComplain"><img className="designImage"src={MrComplain} /></a>
				<a href="/BookDesign/LightsWonderRock"><img className="designImage"src={LightsWonderRock} /></a>
				<a href="/BookDesign/GhostCrutchfield"><img className="designImage"src={GhostCrutchfield} /></a>
				<a href="/BookDesign/ClosedForSeason"><img className="designImage"src={ClosedForSeason} /></a>
				<a href="/BookDesign/TimeForAndrew"><img className="designImage"src={TimeForAndrew} /></a>
				<a href="/BookDesign/DollGarden"><img className="designImage"src={DollGarden} /></a>
				<a href="/BookDesign/Chocolate"><img className="designImage"src={Chocolate} /></a>
				<a href="/BookDesign/Strength"><img className="designImage"src={Strength} /></a>
				<a href="/BookDesign/MagicHouse"><img className="designImage"src={MagicHouse} /></a>
				<a href="/BookDesign/Podcast"><img className="designImage"src={Podcast} /></a>
				<a href="/BookDesign/BubbleTea"><img className="designImage"src={BubbleTea} /></a>
			</div>
		</div>

	)
}

export default Design