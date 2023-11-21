import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import one from '../../Images/Illustration/Little Red Riding Hood/Scene 1.jpg'
import onea from '../../Images/Illustration/Little Red Riding Hood/Scene 1(2).jpg'
import two from '../../Images/Illustration/Little Red Riding Hood/scene 2.jpg'
import three from '../../Images/Illustration/Little Red Riding Hood/Scene 3.jpg'
import four from '../../Images/Illustration/Little Red Riding Hood/Scene 4.jpg'
import five from '../../Images/Illustration/Little Red Riding Hood/Scene 5.jpg'
import seven from '../../Images/Illustration/Little Red Riding Hood/Scene 7.jpg'
import sevena from '../../Images/Illustration/Little Red Riding Hood/Scene 7.1.jpg'
import ten from '../../Images/Illustration/Little Red Riding Hood/Scene 10 for portfolio.jpg'
import twelve from '../../Images/Illustration/Little Red Riding Hood/Scene 12-14.jpg'
import nineteen from '../../Images/Illustration/Little Red Riding Hood/Scene 19.jpg'
import twenty from '../../Images/Illustration/Little Red Riding Hood/Scene 20.jpg'
import twentysix from '../../Images/Illustration/Little Red Riding Hood/Scene 26.jpg'

function LittleRedRidingHood(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Little Red Riding Hood</h2>
		        <p class="contentText">Worked as a contractor for Gakko Inc, an educational technology start-up that thrives to create meaningful experiences for early learners. I illustrated and assisted with animating the classic story, Little Red Riding Hood, for an expansion of their existing smart phone and tablet app, Moji Moji. </p>
		        <p class="contentText">Highlighted Spreads:</p>
		        <div class="row">
		            <div class="column">
		                <img class="contentImage" src={one} />
		            </div>
		            <div class="column">
		                <img class="contentImage" src={onea} />
		            </div>
		        </div>
		        <img class="contentImage" src={two} />
		        <img class="contentImage" src={three} />
		        <img class="contentImage" src={four} />
		        <img class="contentImage" src={five} />
		        <div class="row">
		            <div class="column">
		                <img class="contentImage" src={seven} />
		            </div>
		            <div class="column">
		                <img class="contentImage" src={sevena} />
		            </div>
		        </div>
		        <img class="contentImage" src={ten} />
		        <img class="contentImage" src={twelve} />
		        <img class="contentImage" src={nineteen} />
		        <img class="contentImage" src={twenty} />
		        <img class="contentImage" src={twentysix} />

		    </div>
		</div>
    )
}

export default LittleRedRidingHood