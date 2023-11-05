import React from "react";
import {Link} from 'react-router-dom'
import './DesignSub.css'
import {withRouter} from 'react-router'


import Graceling from '../Images/Design/GracelingBookCover.jpg'
import HNTFIL from '../Images/Design/HNTFILBookCover.jpg'
import MicahSummers from '../Images/Design/99BoyfriendsofMicahSummersBookCover.jpg'
import BeautyandtheBesharam from '../Images/Design/BeautyandtheBesharamBookCover.jpg'
import TheSeaKnowsmyName from '../Images/Design/TheSeaKnowsmyNameBookCover.jpg'
import TheVanishingDeep from '../Images/Design/TheVanishingDeepBookCover.jpg'
import ZylaandKai from '../Images/Design/ZylaandKaiBookCover.jpg'
import MostDazzlingGirlinBerlin from '../Images/Design/MostDazzlingGirlinBerlinBookCover.jpg'
import WalkonBy from '../Images/Design/AsYouWalkonByBookCover.jpg'
import WishUponLantern from '../Images/Design/WhenYouWishUponaLanternBookCover.jpg'
import LightEnoughtoFloat from '../Images/Design/LightEnoughtoFloatBookCover.jpg'
import RulesforRuleBreaking from '../Images/Design/RulesforRuleBreakingBookCover.jpg'
import FromLittleTokyoWithLove from '../Images/Design/FromLittleTokyoWithLoveBookCover.jpg'
import YourLonelyNightsareOver from '../Images/Design/YourLonelyNightsareOverBookCover.jpg'
import SuddenlyaMurder from '../Images/Design/SuddenlyaMurderBookCover.jpg'
import TheBreakupLists from '../Images/Design/TheBreakupListsBookCover.jpg'
import CursedBoysandBrokenHearts from '../Images/Design/CursedBoysandBrokenHeartsBookCover.jpg'





const YoungAdult = props => {
	return(
		<div>
			<div class="design-grid-container">
				<div class="designProject">
		    		<img className="designImage"src={LightEnoughtoFloat} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/LightEnoughtoFloat"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={RulesforRuleBreaking} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/RulesforRuleBreaking"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={FromLittleTokyoWithLove} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/FromLittleTokyoWithLove"></a>
		    		</div>
		    	</div>
				<div class="designProject">
		    		<img className="designImage"src={WishUponLantern} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WishUponLantern"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={YourLonelyNightsareOver} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/YourLonelyNightsareOver"></a>
		    		</div>
		    	</div>
				<div class="designProject">
		    		<img className="designImage"src={WalkonBy} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/AsYouWalkonBy"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={SuddenlyaMurder} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/SuddenlyaMurder"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={TheBreakupLists} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TheBreakupLists"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={CursedBoysandBrokenHearts} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/CursedBoysandBrokenHearts"></a>
		    		</div>
		    	</div>
				
				
				<div class="designProject">
		    		<img className="designImage"src={MicahSummers} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/99BoyfriendsofMicahSummers"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MostDazzlingGirlinBerlin} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MostDazzlingGirlinBerlin"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ZylaandKai} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/ZylaandKai"></a>
		    		</div>
		    	</div>		    	
		    	<div class="designProject">
		    		<img className="designImage"src={BeautyandtheBesharam} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/BeautyandtheBesharam"></a>
		    		</div>
		    	</div>
		    	<div class="designProject"> 
		    		<img className="designImage"src={TheSeaKnowsmyName} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TheSeaKnowsmyName"></a>
		    		</div>
		    	</div>		    	
		    	<div class="designProject">
		    		<img className="designImage"src={TheVanishingDeep} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TheVanishingDeep"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={HNTFIL} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/HowNotToFallinLove"></a>
		    		</div>
		    	</div>

		    	<div class="designProject">
		    		<img className="designImage"src={Graceling} loading="lazy"/>
		    		<div class="designOverlay">
		    			<a href="/BookDesign/Graceling"></a>
		    		</div>
		    	</div>

		    </div>

			<div className="design-mobile">
				<a href="/BookDesign/WishUponLantern"><img className="designImage"src={WishUponLantern} loading="lazy"/></a>
				<a href="/BookDesign/AsYouWalkonBy"><img className="designImage"src={WalkonBy} loading="lazy"/></a>

				<a href="/BookDesign/99BoyfriendsofMicahSummers"><img className="designImage"src={MicahSummers} loading="lazy"/></a>
				<a href="/BookDesign/BeautyandtheBesharam"><img className="designImage"src={BeautyandtheBesharam} loading="lazy"/></a>
				<a href="/BookDesign/TheSeaKnowsmyName"><img className="designImage"src={TheSeaKnowsmyName} loading="lazy"/></a>
				<a href="/BookDesign/TheVanishingDeep"><img className="designImage"src={TheVanishingDeep} loading="lazy"/></a>
				<a href="/BookDesign/ZylaandKai"><img className="designImage"src={ZylaandKai} loading="lazy"/></a>
				<a href="/BookDesign/MostDazzlingGirlinBerlin"><img className="designImage"src={MostDazzlingGirlinBerlin} loading="lazy"/></a>
				<a href="/BookDesign/Graceling"><img className="designImage"src={Graceling} loading="lazy"/></a>
				<a href="/BookDesign/HowNotToFallinLove"><img className="designImage"src={HNTFIL} loading="lazy"/></a>
			</div>
		</div>

	)
}

export default YoungAdult