import React from 'react';
import '../ContentPages.css'

import onea from '../../Images/Design/Podcast/1a.jpg'
import oneb from '../../Images/Design/Podcast/1b.jpg'
import two from '../../Images/Design/Podcast/2.jpg'
import three from '../../Images/Design/Podcast/3.jpg'
import four from '../../Images/Design/Podcast/4.jpg'
import five from '../../Images/Design/Podcast/5.jpg'
import six from '../../Images/Design/Podcast/6.jpg'
import seven from '../../Images/Design/Podcast/7.jpg'
import eight from '../../Images/Design/Podcast/8.jpg'
import nine from '../../Images/Design/Podcast/9.jpg'
import ten from '../../Images/Design/Podcast/10.jpg'
import eleven from '../../Images/Design/Podcast/11.jpg'
import twelve from '../../Images/Design/Podcast/12.jpg'

function Podcast(){
	return(
		<div class="page">
		    <div class="contentPage">
		        <h2>Podcast Book Design</h2>
		        <p class="contentText">I illustrated and designed this book for the podcast “Who you gonna call?” from the American Life by Sean Cole. The podcast illustrates Sean’s relationship with his mom before her passing and his relationship with his step-dad since his mom’s passing. My concept for the book was developed from the idea of double narratives. I absorbed this intimate story with real-life recordings and turned them into two separate books, one of his Mom and one of his step-dad, Ed. The two books can be read simultaneously or individually. Although on the surface, Sean embodies different relationships with his mom and Ed, there is significant overlap between the two. Thus, by using two books, I am able to capture each individual relationship, while highlighting the similarities and love shared in the family.</p>
		        <p class="contentText">The different colors, typefaces, graphical icons, cross-page illustrations, and intensity of the lines are used to portray each characters’ personality, expressions, and voices. I used hot pink for the mom’s dialogue to express her boisterous and passionate personality. A cold light blue was used for Ed because the relationship started out with limited affection, and as they connected more after his mom’s passing, the blue becomes warmer. </p>
		        <div class="row">
		            <div class="column">
		                <img class="contentImage" src={onea} />
		            </div>
		            <div class="column">
		                <img class="contentImage" src={oneb} />
		            </div>
		        </div>
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
		        <img class="contentImage" src={twelve} />
		        
		    </div>
		</div>
	)
}

export default Podcast