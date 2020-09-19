import React from 'react';
import '../ContentPages.css'

import one from '../../Images/Design/MagicHouse/1.jpg'
import two from '../../Images/Design/MagicHouse/2.jpg'
import three from '../../Images/Design/MagicHouse/3.jpg'
import four from '../../Images/Design/MagicHouse/4.jpg'
import five from '../../Images/Design/MagicHouse/5.jpg'
import six from '../../Images/Design/MagicHouse/6.jpg'
import seven from '../../Images/Design/MagicHouse/7.jpg'
import eight from '../../Images/Design/MagicHouse/8.jpg'
import nine from '../../Images/Design/MagicHouse/9.jpg'
import ten from '../../Images/Design/MagicHouse/10.jpg'
import eleven from '../../Images/Design/MagicHouse/11.jpg'
import final from '../../Images/Design/MagicHouse/magic house-final poster.jpg'

function MagicHouse(){
	return(
		<div class="page">
		    <div class="designContentPage">
		        <h2>The Magic House</h2>
		        <p class="contentText">I created an activity workbook for children visiting the St. Louis Children’s Museum, the Magic House. After conducting several interviews onsite, I developed my concept based on solving the lack of interaction between children and the educational materials in each room. The collectable stickers give them the incentive to explore, learn, and complete questions and tasks with the help of their guardians. </p>
		        <p class="contentText">The individual stickers prompt the children to visualize themselves in different roles and careers. The artwork is less realistic and more open to interpretation, which make it more accessible and understandable to the children. I also include different ethnicities and genders to broaden the user’s perspective on the world. The second part of the project serves as a memory documentation that the children and their parents can work on and look back together. </p>

		        <img class="contentImage" src={one} />
		        <img class="contentImage" src={two} />
		        <img class="contentImage" src={three} />
		        <img class="contentImage" src={four} />
		        <img class="contentImage" src={five} />
		        <img class="contentImage" src={six} />
		        <img class="contentImage" src={seven} />
		        <img class="contentImage" src={eight} />
		        <img class="contentImage" src={nine} />
		        <img class="contentImage" src={ten} />
		        <img class="contentImage" src={eleven} />
		        <img class="contentImage" src={final} />

		    </div>
		</div>
	)
}

export default MagicHouse