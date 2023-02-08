import React from 'react';
import '../Desktop.css'

import one from '../../Images/Illustration/WhenWordsHavePower/Cover.jpg'
import two from '../../Images/Illustration/WhenWordsHavePower/FinalCase_KY.jpg'
import three from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p1.jpg'
import four from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p4-5.jpg'
import five from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p12-13.jpg'
import six from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p14-15.jpg'
import seven from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p16-17.jpg'
import eight from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p22-23.jpg'
import nine from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p24-25.jpg'
import ten from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p28-29.jpg'
import eleven from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p32.jpg'

function WordsHavePower(){
    return(
    	<div class="page">
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

export default WordsHavePower