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


const YoungAdult = props => {
	return(
		<div>
			<div class="design-grid-container">
				<div class="designProject">
		    		<img className="designImage"src={WishUponLantern} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/WishUponLantern"></a>
		    		</div>
		    	</div>
				<div class="designProject">
		    		<img className="designImage"src={WalkonBy} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/AsYouWalkonBy"></a>
		    		</div>
		    	</div>
				
				
				<div class="designProject">
		    		<img className="designImage"src={MicahSummers} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/99BoyfriendsofMicahSummers"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={MostDazzlingGirlinBerlin} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/MostDazzlingGirlinBerlin"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={ZylaandKai} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/ZylaandKai"></a>
		    		</div>
		    	</div>		    	
		    	<div class="designProject">
		    		<img className="designImage"src={BeautyandtheBesharam} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/BeautyandtheBesharam"></a>
		    		</div>
		    	</div>
		    	<div class="designProject"> 
		    		<img className="designImage"src={TheSeaKnowsmyName} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TheSeaKnowsmyName"></a>
		    		</div>
		    	</div>		    	
		    	<div class="designProject">
		    		<img className="designImage"src={TheVanishingDeep} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/TheVanishingDeep"></a>
		    		</div>
		    	</div>
		    	<div class="designProject">
		    		<img className="designImage"src={HNTFIL} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/HowNotToFallinLove"></a>
		    		</div>
		    	</div>

		    	<div class="designProject">
		    		<img className="designImage"src={Graceling} />
		    		<div class="designOverlay">
		    			<a href="/BookDesign/Graceling"></a>
		    		</div>
		    	</div>

		    </div>

			<div className="design-mobile">
				<a href="/BookDesign/99BoyfriendsofMicahSummers"><img className="designImage"src={MicahSummers} /></a>
				<a href="/BookDesign/BeautyandtheBesharam"><img className="designImage"src={BeautyandtheBesharam} /></a>
				<a href="/BookDesign/TheSeaKnowsmyName"><img className="designImage"src={TheSeaKnowsmyName} /></a>
				<a href="/BookDesign/TheVanishingDeep"><img className="designImage"src={TheVanishingDeep} /></a>
				<a href="/BookDesign/ZylaandKai"><img className="designImage"src={ZylaandKai} /></a>
				<a href="/BookDesign/MostDazzlingGirlinBerlin"><img className="designImage"src={MostDazzlingGirlinBerlin} /></a>
				<a href="/BookDesign/Graceling"><img className="designImage"src={Graceling} /></a>
				<a href="/BookDesign/HowNotToFallinLove"><img className="designImage"src={HNTFIL} /></a>
			</div>
		</div>

	)
}

export default YoungAdult