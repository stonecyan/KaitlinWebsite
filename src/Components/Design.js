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
import Wayward from '../Images/Design/WaywardCreaturesBookCover.jpg'
import PrincessUnlimited from '../Images/Design/PrincessUnlimitedBookCover.jpg'
import Graceling from '../Images/Design/GracelingBookCover.jpg'
import WTBFB from '../Images/Design/WTBFBBookCover.jpg'
import HNTFIL from '../Images/Design/HNTFILBookCover.jpg'


const Design = props => {
	return(
		<div>
			<div class="design-grid-container">

				<div class="designProject">
		    		<img className="designImage"src={WinterborneHome1} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WinterborneHomeVV"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={WinterborneHome2} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WinterborneHomeMM"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={RescueLakeWild} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/LakeWild"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ASingleShard} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/ASingleShard"></a>
		    		</div>
		    	</div>
		    	
		    	<div class="designProject">
		    		<img className="designImage"src={Wayward} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WaywardCreatures"></a>
		    		</div>
		    	</div>

		    	<div class="designProject">
		    		<img className="designImage"src={Feather} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/OfAFeather"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={Graceling} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/Graceling"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={WTBFB} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WhereTheBlackFlowersBloom"></a>
		    		</div>
		    	</div>
				<div class="designProject">
		    		<img className="designImage"src={PrincessUnlimited} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/PrincessUnlimited"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={HNTFIL} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/HowNotToFallinLove"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SherlockBones} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/SherlockBones"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SherlockBonesSeaCreature} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/SherlockBonesSeaCreature"></a>
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
		    		<img className="designImage"src={OneSmartSheep} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/OneSmartSheep"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={LightsWonderRock} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/LightsWonderRock"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={EvenOdd} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/EvenOdd"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={GhostCrutchfield} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/GhostCrutchfield"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ClosedForSeason} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/ClosedForSeason"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={TimeForAndrew} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TimeForAndrew"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={DollGarden} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/DollGarden"></a>
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
				<a href="/BookDesign/WinterborneHomeVV"><img className="designImage"src={WinterborneHome1} /></a>
				<a href="/BookDesign/WinterborneHomeMM"><img className="designImage"src={WinterborneHome2} /></a>
				<a href="/BookDesign/LakeWild"><img className="designImage"src={RescueLakeWild} /></a>
				<a href="/BookDesign/ASingleShard"><img className="designImage"src={ASingleShard} /></a>
				<a href="/BookDesign/WaywardCreatures"><img className="designImage"src={Wayward} /></a>
				<a href="/BookDesign/OfAFeather"><img className="designImage"src={Feather} /></a>
				<a href="/BookDesign/Graceling"><img className="designImage"src={Graceling} /></a>
				<a href="/BookDesign/WhereTheBlackFlowersBloom"><img className="designImage"src={WTBFB} /></a>
				<a href="/BookDesign/PrincessUnlimited"><img className="designImage"src={PrincessUnlimited} /></a>
				<a href="/BookDesign/HowNotToFallinLove"><img className="designImage"src={HNTFIL} /></a>
				<a href="/BookDesign/SherlockBones"><img className="designImage"src={SherlockBones} /></a>
				<a href="/BookDesign/SherlockBonesSeaCreature"><img className="designImage"src={SherlockBonesSeaCreature} /></a>
				<a href="/BookDesign/MrWalker"><img className="designImage"src={MrWalker} /></a>
				<a href="/BookDesign/MrComplain"><img className="designImage"src={MrComplain} /></a>
				<a href="/BookDesign/OneSmartSheep"><img className="designImage"src={OneSmartSheep} /></a>
				<a href="/BookDesign/LightsWonderRock"><img className="designImage"src={LightsWonderRock} /></a>
				<a href="/BookDesign/GhostCrutchfield"><img className="designImage"src={GhostCrutchfield} /></a>
				<a href="/BookDesign/ClosedForSeason"><img className="designImage"src={ClosedForSeason} /></a>
				<a href="/BookDesign/TimeForAndrew"><img className="designImage"src={TimeForAndrew} /></a>
				<a href="/BookDesign/DollGarden"><img className="designImage"src={DollGarden} /></a>
				{/*<a href="/BookDesign/Chocolate"><img className="designImage"src={Chocolate} /></a>
				<a href="/BookDesign/Strength"><img className="designImage"src={Strength} /></a>
				<a href="/BookDesign/MagicHouse"><img className="designImage"src={MagicHouse} /></a>
				<a href="/BookDesign/Podcast"><img className="designImage"src={Podcast} /></a>
				<a href="/BookDesign/BubbleTea"><img className="designImage"src={BubbleTea} /></a>*/}
			</div>
		</div>

	)
}

export default Design