import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import one from '../../Images/Illustration/SecretSantaSociety/1.Book.jpg'
import two from '../../Images/Illustration/SecretSantaSociety/2.Book Jacket.jpg'
import three from '../../Images/Illustration/SecretSantaSociety/3.Inner Pattern.jpg'
import four from '../../Images/Illustration/SecretSantaSociety/4.Highlighted Spread.jpg'
import five from '../../Images/Illustration/SecretSantaSociety/5.Highlighted Spread.jpg'
import six from '../../Images/Illustration/SecretSantaSociety/6.Highlighted Spread.jpg'
import seven from '../../Images/Illustration/SecretSantaSociety/7.Highlighted Spread.jpg'
import eight from '../../Images/Illustration/SecretSantaSociety/8.Highlighted Spread.jpg'
import nine from '../../Images/Illustration/SecretSantaSociety/9.Highlighted Spread.jpg'
import ten from '../../Images/Illustration/SecretSantaSociety/10.Highlighted Spread.jpg'
import eleven from '../../Images/Illustration/SecretSantaSociety/11.Highlighted Spread.jpg'

function SecretSantaSociety(){
	const [open, setOpen] = useState(false);

    return(
    	<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="illustrationContentPage">
		        <h2>Secret Santa Society</h2>
		        <p class="contentText">Worked as the illustrator for Michella Hatherill's picture book, "Secret Santa Society with Sonny and Ray", released in December 2018.</p>
		        <img class="contentImage" src={one} />
		        <p class="contentText">Book Jacket:</p>
		        <img class="contentImage" src={two} />
		        <p class="contentText">Inner Pattern Spread:</p>
		        <img class="contentImage" src={three} />
		        <p class="contentText">Highlighted Spreads:</p>
		        <img class="contentImage" src={four} />
		        <img class="contentImage" src={five} />
		        <p class="contentText">Only highlighted spread in the book that reads vertically to enhance excitement for the big reveal!</p>
		        <img class="contentImage" src={six} />
		        <img class="contentImage" src={seven} />
		        <img class="contentImage" src={eight} />
		        <img class="contentImage" src={nine} />
		        <img class="contentImage" src={ten} />
		        <img class="contentImage" src={eleven} />

		    </div>
		</div>
    )
}

export default SecretSantaSociety