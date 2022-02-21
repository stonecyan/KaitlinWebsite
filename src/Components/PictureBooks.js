import React from "react";
import {Link} from 'react-router-dom'
import './DesignSub.css'
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
import MicahSummers from '../Images/Design/99BoyfriendsofMicahSummersBookCover.jpg'
import BeautyandtheBesharam from '../Images/Design/BeautyandtheBesharamBookCover.jpg'
import RethinktheInternet from '../Images/Design/RethinktheInternetBookCover.jpg'
import TheSeaKnowsmyName from '../Images/Design/TheSeaKnowsmyNameBookCover.jpg'
import TheVanishingDeep from '../Images/Design/TheVanishingDeepBookCover.jpg'
import ZylaandKai from '../Images/Design/ZylaandKaiBookCover.jpg'
import MostDazzlingGirlinBerlin from '../Images/Design/MostDazzlingGirlinBerlinBookCover.jpg'

const PictureBook = props => {
	return(
		<div>
			<div class="design-grid-container">
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
				<a href="/BookDesign/PrincessUnlimited"><img className="designImage"src={PrincessUnlimited} /></a>
				<a href="/BookDesign/MrWalker"><img className="designImage"src={MrWalker} /></a>
				<a href="/BookDesign/MrComplain"><img className="designImage"src={MrComplain} /></a>
				<a href="/BookDesign/LightsWonderRock"><img className="designImage"src={LightsWonderRock} /></a>
			</div>
		</div>

	)
}

export default PictureBook