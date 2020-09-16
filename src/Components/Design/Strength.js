import React from 'react';
import '../ContentPages.css'

import one from '../../Images/Design/Strength/1.jpg'
import two from '../../Images/Design/Strength/2.jpg'
import three from '../../Images/Design/Strength/3.jpg'
import four from '../../Images/Design/Strength/4.jpg'
import five from '../../Images/Design/Strength/5.jpg'
import six from '../../Images/Design/Strength/6.jpg'
import seven from '../../Images/Design/Strength/7.jpg'
import eight from '../../Images/Design/Strength/8.jpg'

function Strength(){
	return(
		<div class="page">
		    <div class="contentPage">
		        <h2>Strength Magazine</h2>
		        <p class="contentText">I worked as the lead Graphic Designer for Strength magazine, an annual publication for all members of the Annie Wright Schools and the Tacoma community. The magazine includes articles about educational trends, stories about students and alumni, updates on the evolving history of the school, student and faculty achievement, and more. I had the opportunity to develop the entire publication from content developing, brainstorming, designing all the way to print production and distributing. </p>
		        <p class="contentText">Since the overarching theme for this issue is the topic of IB, I used a lot of geometric shapes and bold colors to bring more visual interest to the intellectual topic. Another goal of mine was highlighting the candid photos of the beautiful campus and students. </p>
		        <p class="contentText">Some sample spreads below (Total 68 pages)</p>
		        <img class="contentImage" src={one} />
		        <img class="contentImage" src={two} />
		        <img class="contentImage" src={three} />
		        <img class="contentImage" src={four} />
		        <img class="contentImage" src={five} />
		        <img class="contentImage" src={six} />
		        <img class="contentImage" src={seven} />
		        <img class="contentImage" src={eight} />
		    </div>
		</div>
	)
}

export default Strength