import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import poster from '../../Images/Illustration/RapBattle/Poster V6.jpg'
import one from '../../Images/Illustration/RapBattle/Scan.jpeg'
import two from '../../Images/Illustration/RapBattle/Scan 2.jpeg'
import four from '../../Images/Illustration/RapBattle/Scan 4.jpeg'
import three from '../../Images/Illustration/RapBattle/Scan 3.jpeg'
import seventeen from '../../Images/Illustration/RapBattle/Scan 17.jpeg'
import ten from '../../Images/Illustration/RapBattle/Scan 10.jpeg'
import eleven from '../../Images/Illustration/RapBattle/Scan 11.jpeg'
import twelve from '../../Images/Illustration/RapBattle/Scan 12.jpeg'
import nine from '../../Images/Illustration/RapBattle/Scan 9.jpeg'
import mockup from '../../Images/Illustration/RapBattle/Poster_Mockup.jpg'

function RapBattle(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage" id="rapBattlePage">
		        <h2>Autumn Moon Rap Battle Poster</h2>
		        <p class="contentText">Commissioned to illustrate and design a promotional poster for an annual event <a id="rapLink" href="https://franklin.ucbtheatre.com/show/6398">“An Autumn Moon Rap Battle”</a> presented by Asian AF and Dopetown 3000. The poster was hung around town and event venue for the month of the event.  </p>
		        <img class="contentImage" src={poster} />
		        <p class="contentText">Pitched 4 Initial Ideas/Skethces Below to Client For First Round Review</p>
		        <img class="contentImage" src={one} />
		        <img class="contentImage" src={two} />
		        <img class="contentImage" src={four} />
		        <img class="contentImage" src={three} />
		        <p class="contentText">End up with one idea with simplification and clearer message:</p>
		        <img class="contentImage" src={seventeen} />
		        <p class="contentText">Inked Figures</p>
		        <div class="row">
		            <div class="column">
		                <img class="contentImage" src={ten} />
		            </div>
		            <div class="column">
		                <img class="contentImage" src={eleven} />
		            </div>
		        </div>
		        <div class="row">
		            <div class="column">
		                <img class="contentImage" src={twelve} />
		            </div>
		            <div class="column">
		                <img class="contentImage" src={nine} />
		            </div>
		        </div>
		        <img class="contentImage" src={mockup} />

		    </div>
		</div> 
   	)
}

export default RapBattle